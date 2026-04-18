import React, { useState } from "react";
import { User, Mail, Globe, FileText, Download, Trash2, X, ChevronRight, Check } from "lucide-react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

const InfoRow = ({ icon: Icon, label, value, color }: { icon: any, label: string, value: string, color: "green" | "saffron" | "terracotta" | "dark" }) => {
  const iconColors = {
    green: "bg-[#2D6A4F]/10 text-[#2D6A4F]",
    saffron: "bg-[#F4A261]/10 text-[#8E4E14]",
    terracotta: "bg-[#C15537]/10 text-[#C15537]",
    dark: "bg-[#1A3A2A]/10 text-[#1A3A2A]",
  };

  return (
    <div className="flex items-center gap-4 py-3 border-b border-black/5 last:border-0">
      <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center shrink-0", iconColors[color])}>
        <Icon className="w-5 h-5" />
      </div>
      <div className="flex flex-col">
        <span className="text-[10px] font-bold text-[#6B6B6B] tracking-widest uppercase">{label}</span>
        <span className="font-bold text-[#1C1C1E]">{value}</span>
      </div>
    </div>
  );
};

export function Profile() {
  const [activeModal, setActiveModal] = useState<"export" | "delete" | "success" | null>(null);

  const handleAction = () => {
    setActiveModal("success");
    setTimeout(() => setActiveModal(null), 2000);
  };

  return (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-10">
      <section className="flex flex-col gap-2">
        <h1 className="text-3xl font-extrabold text-[#2D6A4F] tracking-tight leading-snug">
          Seu Perfil
        </h1>
        <p className="text-[#6B6B6B] text-base leading-relaxed">
          Gerencie suas informações e dados da conta.
        </p>
      </section>

      {/* User Info */}
      <div className="bg-white rounded-[24px] p-6 shadow-[0px_4px_24px_-8px_rgba(45,106,79,0.12)] border border-[#2D6A4F]/5">
        <div className="flex flex-col">
          <InfoRow icon={User} label="Nome Completo" value="Gabriel Silva" color="green" />
          <InfoRow icon={Mail} label="E-mail" value="gabriel@example.com" color="saffron" />
          <InfoRow icon={Globe} label="Nacionalidade" value="Brasileiro" color="terracotta" />
          <InfoRow icon={FileText} label="Visto Atual" value="Stamp 2 (Estudante)" color="dark" />
        </div>
      </div>

      {/* Data Management */}
      <div className="flex flex-col gap-4">
        <h2 className="text-sm font-bold tracking-widest text-[#6B6B6B] uppercase px-1">Gerenciamento de Dados</h2>
        
        <div className="bg-white rounded-[24px] p-4 shadow-[0px_4px_24px_-8px_rgba(45,106,79,0.08)] border border-[#2D6A4F]/5 flex flex-col gap-2">
          
          <button 
            onClick={() => setActiveModal("export")}
            className="flex items-center justify-between p-4 rounded-xl hover:bg-black/5 transition-colors text-left"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#2D6A4F]/10 text-[#2D6A4F] flex items-center justify-center shrink-0">
                <Download className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-[#1C1C1E]">Exportar meus dados</span>
                <span className="text-xs text-[#6B6B6B]">Baixe uma cópia de suas informações</span>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-[#6B6B6B]" />
          </button>

          <div className="h-[1px] w-full bg-black/5" />

          <button 
            onClick={() => setActiveModal("delete")}
            className="flex items-center justify-between p-4 rounded-xl hover:bg-[#C15537]/5 transition-colors text-left group"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#C15537]/10 text-[#C15537] flex items-center justify-center shrink-0 group-hover:bg-[#C15537] group-hover:text-white transition-colors">
                <Trash2 className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-[#C15537]">Excluir Conta</span>
                <span className="text-xs text-[#C15537]/70">Esta ação é irreversível</span>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-[#C15537]/50" />
          </button>
        </div>
      </div>

      {/* Confirmation Modals */}
      {(activeModal === "export" || activeModal === "delete") && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-black/40 backdrop-blur-sm p-0 sm:p-4" onClick={() => setActiveModal(null)}>
          <div 
            className="bg-white w-full max-w-sm sm:rounded-[32px] rounded-t-[32px] overflow-hidden flex flex-col animate-in slide-in-from-bottom-12 duration-300 p-6 sm:p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-black/10 rounded-full sm:hidden" />
            <button 
              onClick={() => setActiveModal(null)} 
              className="absolute right-4 top-4 p-2 rounded-full bg-black/5 hover:bg-black/10 text-black/60 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col items-center text-center mt-6 gap-4">
              <div className={cn(
                "w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg",
                activeModal === "export" ? "bg-[#2D6A4F] text-white shadow-[#2D6A4F]/20" : "bg-[#C15537] text-white shadow-[#C15537]/20"
              )}>
                {activeModal === "export" ? <Download className="w-8 h-8" /> : <Trash2 className="w-8 h-8" />}
              </div>

              <h2 className="text-2xl font-bold text-[#1C1C1E]">
                {activeModal === "export" ? "Exportar Dados?" : "Excluir Conta?"}
              </h2>
              
              <p className="text-[#6B6B6B] text-sm leading-relaxed mb-4">
                {activeModal === "export" 
                  ? "Um link com o download de todas as suas informações e documentos do Vault será enviado para o seu e-mail cadastrado."
                  : "Atenção! Esta ação é permanente. Todos os seus dados, documentos no Vault e progresso no Checklist serão apagados."}
              </p>

              <div className="flex flex-col gap-3 w-full">
                <button 
                  onClick={handleAction}
                  className={cn(
                    "w-full font-bold py-4 rounded-xl shadow-lg active:scale-[0.98] transition-transform",
                    activeModal === "export" ? "bg-[#2D6A4F] text-white shadow-[#2D6A4F]/20" : "bg-[#C15537] text-white shadow-[#C15537]/20"
                  )}
                >
                  {activeModal === "export" ? "Sim, enviar e-mail" : "Sim, excluir minha conta"}
                </button>
                <button 
                  onClick={() => setActiveModal(null)}
                  className="w-full font-bold py-4 rounded-xl bg-black/5 text-[#6B6B6B] hover:bg-black/10 transition-colors"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Success Toast / Modal */}
      {activeModal === "success" && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-8 flex flex-col items-center gap-4 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-[#D8EEE4] text-[#2D6A4F] flex items-center justify-center">
              <Check className="w-8 h-8" />
            </div>
            <h2 className="text-xl font-bold text-[#1C1C1E]">Ação Concluída!</h2>
          </div>
        </div>
      )}
    </div>
  );
}