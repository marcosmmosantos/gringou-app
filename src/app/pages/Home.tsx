import { Search, GraduationCap, Clock, TriangleAlert, Sparkles, ChevronRight } from "lucide-react";
import { Link } from "react-router";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

const Card = ({ className, children }: { className?: string, children: React.ReactNode }) => (
  <div className={cn("bg-white rounded-[24px] p-6 shadow-[0px_4px_24px_-8px_rgba(45,106,79,0.12)] border border-[#2D6A4F]/5", className)}>
    {children}
  </div>
);

export function Home() {
  return (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header section */}
      <section className="flex flex-col gap-2">
        <h1 className="text-4xl font-extrabold text-[#2D6A4F] tracking-tight">Olá, Gabriel!</h1>
        <p className="text-[#6B6B6B] text-lg">Tudo pronto para o seu próximo passo?</p>
      </section>

      {/* Search Bar */}
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-[#2D6A4F]/50 group-focus-within:text-[#2D6A4F] transition-colors" />
        </div>
        <input
          type="text"
          placeholder="Busca"
          className="w-full bg-white text-[#1C1C1E] rounded-2xl pl-11 pr-4 py-4 shadow-[0px_4px_16px_-4px_rgba(45,106,79,0.08)] border border-[#2D6A4F]/10 focus:outline-none focus:ring-2 focus:ring-[#F4A261]/50 focus:border-[#F4A261]/50 transition-all placeholder:text-[#6B6B6B]/60 font-medium"
        />
      </div>

      {/* English Course Status */}
      <Card className="relative overflow-hidden flex flex-col gap-6">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-[#2D6A4F]/5 rounded-full blur-2xl pointer-events-none" />
        
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-bold text-[#2D6A4F] tracking-widest uppercase">Curso Atual</span>
            <h2 className="text-2xl font-bold text-[#1C1C1E] leading-tight mt-1">English for<br/>Academic<br/>Purposes</h2>
            <p className="text-[#6B6B6B] mt-1">Erin College, Cork</p>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-[#D8EEE4] flex items-center justify-center text-[#2D6A4F]">
            <GraduationCap className="w-6 h-6" />
          </div>
        </div>

        <div className="flex flex-col gap-3 mt-4">
          <div className="flex justify-between items-end">
            <span className="font-medium text-[#1C1C1E] text-sm">Progressão: Semana 14 de 25</span>
            <span className="font-bold text-xl text-[#2D6A4F]">56%</span>
          </div>
          <div className="w-full bg-[#FAF7F2] rounded-full h-3 overflow-hidden border border-black/5">
            <div className="bg-gradient-to-r from-[#2D6A4F] to-[#1A3A2A] w-[56%] h-full rounded-full" />
          </div>
        </div>

        <button className="w-full mt-2 bg-[#FAF7F2] hover:bg-[#D8EEE4]/50 transition-colors text-[#2D6A4F] font-bold py-3.5 rounded-xl text-center">
          Detalhes do Curso
        </button>
      </Card>

      {/* Urgent Warning - Registro GNIB */}
      <div className="bg-gradient-to-br from-[#C15537] to-[#A33F23] rounded-[24px] p-6 text-white shadow-lg shadow-[#C15537]/20 flex flex-col gap-4">
        <div className="flex items-center gap-2 bg-white/20 w-fit px-3 py-1 rounded-full border border-white/10">
          <TriangleAlert className="w-4 h-4 text-[#FFCFC3]" />
          <span className="text-xs font-bold text-[#FFCFC3] tracking-widest uppercase">Urgente</span>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold text-[#FFCFC3] mb-1">Registro do GNIB</h3>
          <p className="text-[#FFCFC3]/90 leading-relaxed">
            Sua entrevista é em 12 dias. Não esqueça dos documentos!
          </p>
        </div>

        <div className="bg-[#FFCFC3] text-[#A33F23] w-fit px-4 py-2 rounded-full text-xs font-bold mt-2 shadow-sm">
          MAR 14, 09:30 AM
        </div>
      </div>

      {/* Plan your next steps */}
      <Card className="bg-[#FAF7F2] border-0 shadow-none relative">
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold text-[#1C1C1E]">Planeje seus próximos passos!</h3>
          <p className="text-[#6B6B6B] leading-relaxed text-sm">
            Pensando em ficar mais tempo? Vamos encontrar opções para a sua renovação.
          </p>
          <Link to="/dashboard" className="bg-[#2D6A4F] text-white w-full py-4 rounded-xl flex items-center justify-between px-6 font-bold mt-2 shadow-md shadow-[#2D6A4F]/20 active:scale-[0.98] transition-transform">
            Explorar opções
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </Card>

      {/* Assistant Tooltip Reminder */}
      <div className="bg-[#F4A261]/10 border border-[#F4A261]/30 rounded-[24px] p-6 relative flex gap-5">
        <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#F4A261] shadow-lg shadow-[#F4A261]/30 flex items-center justify-center text-white">
          <Sparkles className="w-6 h-6" />
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="text-xl font-bold text-[#8E4E14]">Lembrete</h4>
          <p className="text-[#8E4E14]/80 text-sm leading-relaxed">
            Vi que você tem GNIB logo mais. O clima em Dublin vai estar bem chuvoso na quarta, leve um guarda-chuva reforçado para a fila do escritório da Burgh Quay!
          </p>
          <Link to="/checklist" className="text-[#8E4E14] font-bold text-sm text-left underline decoration-[#F4A261] decoration-2 underline-offset-4 mt-2">
            Check list de documentos →
          </Link>
        </div>
      </div>
    </div>
  );
}