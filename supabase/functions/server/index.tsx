import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import { createClient } from "npm:@supabase/supabase-js";
import * as kv from "./kv_store.tsx";

const app = new Hono();

app.use('*', logger(console.log));
app.use("/*", cors({
  origin: "*",
  allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowHeaders: ["Content-Type", "Authorization"],
}));

const BUCKET_NAME = "make-db2ca519-vault";

// Middleware to get Supabase client
const getSupabase = () => {
  return createClient(
    Deno.env.get('SUPABASE_URL') || '',
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || ''
  );
};

// Initialize bucket
app.use('*', async (c, next) => {
  const supabase = getSupabase();
  const { data: buckets } = await supabase.storage.listBuckets();
  const bucketExists = buckets?.some(bucket => bucket.name === BUCKET_NAME);
  if (!bucketExists) {
    await supabase.storage.createBucket(BUCKET_NAME, { public: false });
  }
  await next();
});

// Checklist State
app.get('/make-server-db2ca519/checklist', async (c) => {
  try {
    const data = await kv.get('checklist_state');
    return c.json(data ? JSON.parse(data) : { items: {} });
  } catch (error) {
    return c.json({ error: error.message }, 500);
  }
});

app.post('/make-server-db2ca519/checklist', async (c) => {
  try {
    const body = await c.req.json();
    await kv.set('checklist_state', JSON.stringify(body));
    return c.json({ success: true });
  } catch (error) {
    return c.json({ error: error.message }, 500);
  }
});

// Documents Vault
app.post('/make-server-db2ca519/upload', async (c) => {
  try {
    const formData = await c.req.parseBody();
    const file = formData['file'];
    const documentType = formData['type'];
    
    if (!file || !(file instanceof File)) {
      return c.json({ error: 'No file uploaded' }, 400);
    }
    
    const supabase = getSupabase();
    const fileName = `${Date.now()}-${file.name}`;
    
    const { data, error } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(fileName, file);
      
    if (error) throw error;
    
    // Store metadata in KV
    const docsStr = await kv.get('vault_documents') || '[]';
    const docs = JSON.parse(docsStr);
    const newDoc = { id: fileName, name: file.name, type: documentType, uploadedAt: new Date().toISOString() };
    docs.push(newDoc);
    await kv.set('vault_documents', JSON.stringify(docs));
    
    return c.json({ success: true, document: newDoc });
  } catch (error) {
    console.error("Upload error:", error);
    return c.json({ error: error.message }, 500);
  }
});

app.get('/make-server-db2ca519/documents', async (c) => {
  try {
    const docsStr = await kv.get('vault_documents') || '[]';
    const docs = JSON.parse(docsStr);
    
    const supabase = getSupabase();
    
    // Get signed URLs for all documents
    const docsWithUrls = await Promise.all(docs.map(async (doc: any) => {
      const { data } = await supabase.storage
        .from(BUCKET_NAME)
        .createSignedUrl(doc.id, 3600); // 1 hour expiry
      return { ...doc, url: data?.signedUrl };
    }));
    
    return c.json(docsWithUrls);
  } catch (error) {
    return c.json({ error: error.message }, 500);
  }
});

Deno.serve(app.fetch);