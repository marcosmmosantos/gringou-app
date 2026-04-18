import React, { useState } from "react";
import { LifeBuoy, Send, MessageSquare, Check, X } from "lucide-react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { Link } from "react-router";

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

export function Help() {
  const [topic, setTopic] = useState("visto");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setMessage("");
    }, 3000);
  };

  return (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-10">
      <section className="flex flex-col gap-2">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-2xl bg-[#2D6A4F] flex items-center justify-center text-white shadow-lg shadow-[#2D6A4F]/20">
            <LifeBuoy className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold text-[#1C1C1E] tracking-tight">Ajuda & Suporte</h1>
            <p className="text-[#6B6B6B] text-sm">Fale com o time do Gringou</p>
          </div>
        </div>
        <p className="text-[#6B6B6B] text-base leading-relaxed mt-2">
          Seu problema é muito específico para o assistente virtual? Mande uma mensagem e nossa equipe analisará o seu caso.
        </p>
      </section>

      <div className="bg-white rounded-[24px] p-6 shadow-[0px_4px_24px_-8px_rgba(45,106,79,0.12)] border border-[#2D6A4F]/5">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-[#6B6B6B] tracking-widest uppercase">Assunto</label>
            <div className="relative">
              <select 
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full appearance-none bg-[#FAF7F2] text-[#1C1C1E] rounded-xl px-4 py-3 border border-black/5 focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]/20 font-bold"
              >
                <option value="visto">Dúvida sobre Visto (Stamp 2)</option>
                <option value="documentos">Problema com Documentos</option>
                <option value="app">Erro no Aplicativo</option>
                <option value="outro">Outro Assunto</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-[#6B6B6B] tracking-widest uppercase">Sua Mensagem</label>
            <textarea 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Descreva seu problema com o máximo de detalhes possível..."
              className="w-full h-40 bg-[#FAF7F2] text-[#1C1C1E] rounded-xl px-4 py-4 border border-black/5 focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]/20 transition-all placeholder:text-[#6B6B6B]/60 resize-none text-sm leading-relaxed"
            />
          </div>

          <button 
            type="submit"
            disabled={!message.trim() || sent}
            className="w-full bg-[#2D6A4F] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[#2D6A4F]/20 active:scale-[0.98] transition-transform disabled:opacity-50 disabled:bg-[#D8EEE4] disabled:text-[#6B6B6B] disabled:shadow-none"
          >
            {sent ? (
              <>
                <Check className="w-5 h-5" />
                Mensagem Enviada!
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Enviar Pedido de Ajuda
              </>
            )}
          </button>

        </form>
      </div>

      <div className="bg-[#F4A261]/10 border border-[#F4A261]/20 rounded-[24px] p-6 flex gap-4">
        <div className="w-12 h-12 shrink-0 rounded-full bg-[#F4A261] text-white flex items-center justify-center shadow-lg shadow-[#F4A261]/30">
          <MessageSquare className="w-6 h-6" />
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="font-bold text-[#8E4E14] text-lg">Dica Rápida</h4>
          <p className="text-[#8E4E14]/80 text-sm leading-relaxed">
            Nosso assistente de IA na aba "Assistant" foi treinado com manuais de imigração irlandesa. Muitas dúvidas são resolvidas instantaneamente lá.
          </p>
          <Link to="/assistant" className="text-[#8E4E14] font-bold text-sm text-left underline decoration-[#F4A261] decoration-2 underline-offset-4 mt-1">
            Falar com Assistente
          </Link>
        </div>
      </div>
    </div>
  );
}