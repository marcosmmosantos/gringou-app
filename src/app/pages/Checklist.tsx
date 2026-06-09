import React, { useState, useEffect } from "react";
import { 
  FileText, Calendar, MapPin, Inbox, CircleCheckBig, Circle, Upload, 
  Map, Lightbulb, TriangleAlert, CloudUpload, FileUp, CircleHelp, ArrowRight, Loader2, Check
} from "lucide-react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { projectId, publicAnonKey } from "../../../utils/supabase/info";

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

const API_URL = `https://${projectId}.supabase.co/functions/v1/make-server-db2ca519`;

const TabButton = ({ active, children, onClick }: { active: boolean, children: React.ReactNode, onClick: () => void }) => (
  <button
    onClick={onClick}
    className={cn(
      "px-6 py-2.5 rounded-full text-sm font-bold transition-all whitespace-nowrap",
      active ? "bg-[#2D6A4F] text-white shadow-md" : "bg-[#D8EEE4]/50 text-[#6B6B6B] hover:bg-[#D8EEE4]"
    )}
  >
    {children}
  </button>
);

const ChecklistItem = ({ 
  id, title, desc, status, isUpload, onClick 
}: { id: string, title: string, desc: string, status: "checked" | "unchecked", isUpload?: boolean, onClick: () => void }) => (
  <div 
    onClick={onClick}
    className={cn(
      "flex items-center justify-between p-4 rounded-2xl border transition-all cursor-pointer",
      status === "checked" ? "bg-white border-[#2D6A4F]/10" :
      isUpload ? "bg-white border-[#F4A261] border-dashed border-2" : "bg-[#FAF7F2] border-transparent"
    )}
  >
    <div className="flex items-start gap-4">
      <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors", 
        status === "checked" ? "bg-[#D8EEE4] text-[#2D6A4F]" : "bg-black/5 text-[#6B6B6B]"
      )}>
        <FileText className="w-5 h-5" />
      </div>
      <div className="flex flex-col">
        <span className="font-bold text-[#1C1C1E]">{title}</span>
        <span className={cn("text-xs", isUpload ? "text-[#F4A261] font-bold tracking-widest uppercase" : "text-[#6B6B6B]")}>
          {desc}
        </span>
      </div>
    </div>
    
    {status === "checked" && <CircleCheckBig className="w-6 h-6 text-[#2D6A4F]" />}
    
    {status === "unchecked" && !isUpload && <Circle className="w-6 h-6 text-[#6B6B6B]/30" />}
    
    {isUpload && (
      <button className="bg-[#F4A261] text-white px-4 py-2 rounded-xl font-bold flex items-center gap-2 text-sm shadow-md shadow-[#F4A261]/20 active:scale-95 transition-transform">
        <Upload className="w-4 h-4" />
        SUBIR
      </button>
    )}
  </div>
);

const DocCard = ({ title, type, url }: { title: string, type: "warning" | "action" | "success", url?: string }) => (
  <a 
    href={url || '#'} 
    target="_blank" 
    rel="noreferrer"
    className="bg-[#D8EEE4] p-5 rounded-[24px] border-2 border-[#2D6A4F]/20 flex flex-col justify-between h-40 shadow-[0px_4px_24px_-8px_rgba(45,106,79,0.1)] relative overflow-hidden group hover:border-[#2D6A4F] transition-colors cursor-pointer"
  >
    <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-white/20 rounded-full blur-2xl pointer-events-none group-hover:bg-white/30 transition-colors" />
    <div className="flex items-start justify-between">
      <div className={cn("w-10 h-10 rounded-full flex items-center justify-center shadow-sm", 
        type === "warning" ? "bg-[#C15537]/10 text-[#C15537]" : 
        type === "success" ? "bg-[#2D6A4F] text-white" :
        "bg-[#2D6A4F]/10 text-[#2D6A4F]"
      )}>
        {type === "warning" ? <TriangleAlert className="w-5 h-5" /> : 
         type === "success" ? <Check className="w-5 h-5" /> :
         <CloudUpload className="w-5 h-5" />}
      </div>
    </div>
    <div className="flex flex-col gap-1 z-10">
      <h3 className="font-bold text-[#1C1C1E] text-lg">{title}</h3>
      <p className={cn("text-xs font-bold tracking-wide", 
        type === "warning" ? "text-[#C15537]" : 
        type === "success" ? "text-[#2D6A4F]" : "text-[#2D6A4F]"
      )}>
        {type === 'warning' ? 'Document missing' : type === 'success' ? 'Uploaded' : 'Action Required'}
      </p>
    </div>
  </a>
);

export function Checklist() {
  const [activeTab, setActiveTab] = useState("pos");
  const [checks, setChecks] = useState<Record<string, boolean>>({});
  const [docs, setDocs] = useState<any[]>([]);
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchState = async () => {
    try {
      const res = await fetch(`${API_URL}/checklist`, { headers: { Authorization: `Bearer ${publicAnonKey}` } });
      const data = await res.json();
      if (data.items) setChecks(data.items);
      
      const docRes = await fetch(`${API_URL}/documents`, { headers: { Authorization: `Bearer ${publicAnonKey}` } });
      const docsData = await docRes.json();
      if (Array.isArray(docsData)) setDocs(docsData);
    } catch (e) {
      console.error('Error fetching state', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchState();
  }, []);

  const toggleCheck = async (id: string) => {
    const newChecks = { ...checks, [id]: !checks[id] };
    setChecks(newChecks);
    try {
      await fetch(`${API_URL}/checklist`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          Authorization: `Bearer ${publicAnonKey}` 
        },
        body: JSON.stringify({ items: newChecks }),
      });
    } catch (e) {
      console.error('Error saving state', e);
    }
  };

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("type", "proof_of_fees");

      await fetch(`${API_URL}/upload`, {
        method: "POST",
        headers: { Authorization: `Bearer ${publicAnonKey}` },
        body: formData,
      });
      await fetchState();
      setActiveTab("docs");
    } catch (error) {
      console.error("Upload error", error);
      alert("Error uploading file");
    } finally {
      setUploading(false);
    }
  };

  if (loading) {
    return <div className="flex h-full items-center justify-center pt-20"><Loader2 className="w-8 h-8 animate-spin text-[#2D6A4F]" /></div>;
  }

  const hasHealthInsurance = docs.some(d => d.type === 'health_insurance' || d.name.toLowerCase().includes('insurance'));
  const hasProofOfFees = docs.some(d => d.type === 'proof_of_fees' || d.name.toLowerCase().includes('fees'));

  return (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-10">
      <section className="flex flex-col gap-4">
        {activeTab === "pos" && (
          <>
            <h1 className="text-3xl font-extrabold text-[#2D6A4F] tracking-tight leading-snug">
              Já chegou! Agora é hora de cuidar do IRP number.
            </h1>
            <p className="text-[#6B6B6B] text-base leading-relaxed">
              Relaxa, a gente te mostra como faz. O processo é simples quando estamos juntos.
            </p>
          </>
        )}
        {activeTab === "pre" && (
          <>
            <h1 className="text-3xl font-extrabold text-[#2D6A4F] tracking-tight leading-snug">
              Preparando a sua chegada na Irlanda.
            </h1>
            <p className="text-[#6B6B6B] text-base leading-relaxed">
              Tudo o que você precisa organizar antes de embarcar.
            </p>
          </>
        )}
        {activeTab === "docs" && (
          <>
            <h1 className="text-3xl font-extrabold text-[#2D6A4F] tracking-tight leading-snug">
              Smart Vault
            </h1>
            <p className="text-[#6B6B6B] text-base leading-relaxed">
              Tudo pronto? Vamos organizar seus documentos essenciais para a jornada.
            </p>
          </>
        )}
      </section>

      {/* Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2 -mx-6 px-6 no-scrollbar">
        <TabButton active={activeTab === "pre"} onClick={() => setActiveTab("pre")}>PRÉ CHEGADA</TabButton>
        <TabButton active={activeTab === "pos"} onClick={() => setActiveTab("pos")}>PÓS CHEGADA</TabButton>
        <TabButton active={activeTab === "docs"} onClick={() => setActiveTab("docs")}>DOCUMENTOS</TabButton>
      </div>

      {activeTab === "pos" && (
        <div className="flex flex-col gap-8 animate-in fade-in duration-300">
          {/* Stepper */}
          <div className="flex items-center justify-between px-2 pt-4 relative">
            {[
              { id: "prep", label: "PREP", icon: FileText, active: true },
              { id: "book", label: "BOOKING", icon: Calendar, active: false },
              { id: "attend", label: "ATTEND", icon: MapPin, active: false },
              { id: "collect", label: "COLLECT", icon: Inbox, active: false },
            ].map((step) => (
              <div key={step.id} className="flex flex-col items-center gap-2 relative z-10">
                <div className={cn(
                  "w-14 h-14 rounded-full flex items-center justify-center shadow-sm transition-all",
                  step.active ? "bg-[#2D6A4F] text-white ring-4 ring-[#D8EEE4]" : "bg-[#FAF7F2] text-[#6B6B6B] border border-black/5"
                )}>
                  <step.icon className="w-6 h-6" />
                </div>
                <span className={cn("text-[10px] font-bold tracking-widest", step.active ? "text-[#2D6A4F]" : "text-[#6B6B6B]/60")}>
                  {step.label}
                </span>
              </div>
            ))}
            <div className="absolute left-10 right-10 h-1 bg-[#FAF7F2] border border-black/5 rounded-full top-[36px] -z-0" />
          </div>

          {/* Checklist */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-[#2D6A4F]">Checklist de Documentos</h2>
              <div className="bg-[#F4A261]/20 text-[#C15537] px-3 py-1 rounded-full text-sm font-bold">
                {Object.values(checks).filter(Boolean).length}/4
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <ChecklistItem 
                id="passport" title="Passaporte" desc="Original e válido" 
                status={checks['passport'] ? "checked" : "unchecked"} 
                onClick={() => toggleCheck('passport')} 
              />
              <ChecklistItem 
                id="tcd_letter" title="TCD Letter" desc="Proof of registration" 
                status={checks['tcd_letter'] ? "checked" : "unchecked"} 
                onClick={() => toggleCheck('tcd_letter')} 
              />
              <ChecklistItem 
                id="health_ins" title="Health Insurance" desc="UPLOAD OBRIGATÓRIO" 
                status={hasHealthInsurance || checks['health_ins'] ? "checked" : "unchecked"} 
                isUpload={!hasHealthInsurance && !checks['health_ins']} 
                onClick={() => !hasHealthInsurance ? document.getElementById('doc-upload')?.click() : toggleCheck('health_ins')} 
              />
              <ChecklistItem 
                id="proof_fees" title="Proof of Fees" desc="€300 payment receipt" 
                status={hasProofOfFees || checks['proof_fees'] ? "checked" : "unchecked"} 
                onClick={() => toggleCheck('proof_fees')} 
              />
            </div>
          </div>

          {/* Map Location */}
          <div className="flex flex-col gap-4 mt-2">
            <h2 className="text-xl font-bold text-[#2D6A4F]">Onde ir: Burgh Quay</h2>
            <div className="rounded-[24px] overflow-hidden bg-white shadow-[0px_4px_24px_-8px_rgba(45,106,79,0.1)] border border-[#2D6A4F]/5 pb-4">
              <div className="h-40 w-full bg-black/5 relative">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1619468129361-605ebea04b44?auto=format&fit=crop&w=400&h=200&q=80" 
                  alt="Map" 
                  className="w-full h-full object-cover opacity-80 mix-blend-multiply" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent" />
              </div>
              <div className="px-5 -mt-6 relative z-10 flex justify-between items-center bg-white rounded-2xl mx-4 py-4 shadow-lg shadow-[#2D6A4F]/5">
                <div>
                  <p className="text-[10px] font-bold text-[#2D6A4F] tracking-widest">REGISTRATION OFFICE</p>
                  <p className="font-bold text-[#1C1C1E]">Burgh Quay, Dublin 2</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#2D6A4F] flex items-center justify-center text-white">
                  <Map className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "pre" && (
        <div className="flex flex-col gap-8 animate-in fade-in duration-300">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-[#2D6A4F]">Tarefas Críticas</h2>
              <div className="bg-[#C15537]/10 text-[#C15537] px-3 py-1 rounded-full text-sm font-bold">1/2</div>
            </div>
            <div className="flex flex-col gap-3">
              <ChecklistItem 
                id="visa_app" title="Aplicação do Visto" desc="Em andamento • Prazo: 15 dias" 
                status={checks['visa_app'] ? "checked" : "unchecked"} 
                onClick={() => toggleCheck('visa_app')} 
              />
              <ChecklistItem 
                id="tuition" title="Tuition Fee Payment" desc="COMPLETO" 
                status={checks['tuition'] ? "checked" : "unchecked"} 
                onClick={() => toggleCheck('tuition')} 
              />
            </div>
          </div>
        </div>
      )}

      {activeTab === "docs" && (
        <div className="flex flex-col gap-8 animate-in fade-in duration-300">
          <div className="grid grid-cols-2 gap-4">
            <DocCard 
              title="Health Insurance" 
              type={hasHealthInsurance ? "success" : "warning"} 
              url={docs.find(d => d.type === 'health_insurance')?.url} 
            />
            <DocCard 
              title="Proof of Fees" 
              type={hasProofOfFees ? "success" : "action"} 
              url={docs.find(d => d.type === 'proof_of_fees')?.url} 
            />
            {docs.filter(d => d.type !== 'health_insurance' && d.type !== 'proof_of_fees').map((doc, i) => (
              <DocCard key={i} title={doc.name.substring(0, 15) + '...'} type="success" url={doc.url} />
            ))}
          </div>

          <div className="bg-white rounded-[24px] p-8 border border-[#2D6A4F]/10 shadow-[0px_4px_32px_-8px_rgba(45,106,79,0.08)] flex flex-col items-center text-center gap-6 relative overflow-hidden mt-2">
            <div className="absolute inset-0 border-2 border-dashed border-[#2D6A4F]/20 rounded-[24px] m-4 pointer-events-none" />
            
            <div className="w-16 h-16 rounded-full bg-[#FAF7F2] flex items-center justify-center text-[#2D6A4F] shadow-sm z-10">
              {uploading ? <Loader2 className="w-8 h-8 animate-spin" /> : <CloudUpload className="w-8 h-8" />}
            </div>

            <div className="flex flex-col gap-2 z-10">
              <h3 className="text-xl font-bold text-[#1C1C1E]">{uploading ? 'Enviando...' : 'Enviar Documento'}</h3>
              <p className="text-[#6B6B6B] text-sm leading-relaxed px-4">
                Selecione qualquer comprovante adicional para salvar no Vault.
              </p>
            </div>

            <input 
              type="file" 
              id="doc-upload" 
              className="hidden" 
              onChange={handleUpload}
              accept=".pdf,.jpg,.jpeg,.png"
            />
            
            <button 
              onClick={() => document.getElementById('doc-upload')?.click()}
              disabled={uploading}
              className="bg-[#2D6A4F] text-white px-8 py-3.5 rounded-xl font-bold flex items-center gap-3 shadow-lg shadow-[#2D6A4F]/20 active:scale-95 transition-transform z-10 mt-2 disabled:opacity-70"
            >
              <FileUp className="w-5 h-5" />
              {uploading ? 'Aguarde...' : 'Select File'}
            </button>
          </div>

          <div className="bg-[#F4A261]/10 rounded-[24px] p-6 relative overflow-hidden flex flex-col gap-4 mt-2">
            <CircleHelp className="absolute -right-8 -bottom-8 w-40 h-40 text-[#F4A261]/10 pointer-events-none" />
            
            <div className="flex flex-col gap-2 relative z-10 pr-8">
              <h4 className="text-xl font-bold text-[#C15537]">Precisa de ajuda?</h4>
              <p className="text-[#C15537]/80 text-sm leading-relaxed">
                Se você não tem certeza de qual documento enviar, nosso assistente pode ajudar.
              </p>
            </div>
            
            <button className="text-[#C15537] font-bold text-sm text-left flex items-center gap-1 underline decoration-[#C15537] decoration-2 underline-offset-4 mt-2 w-fit">
              Falar com suporte <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}