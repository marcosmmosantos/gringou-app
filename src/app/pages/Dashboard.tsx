import { useState } from "react";
import {
  CreditCard, BookOpen, UserCircle, Bike, CalendarDays,
  Briefcase, FileText, FileCheck, ChevronRight, X
} from "lucide-react";
import { Link } from "react-router";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

const INFO_MODALS = {
  "leap-card": {
    title: "Leap Card (Student)",
    icon: CreditCard,
    color: "green" as const,
    content: "O Student Leap Card é o cartão de transporte público para estudantes na Irlanda. Ele oferece descontos de até 50% em ônibus (Dublin Bus), trens (DART) e bondes (Luas).",
    steps: [
      "1. Acesse o site do Student Leap Card",
      "2. Preencha o formulário online",
      "3. Agende a visita em um centro de emissão (ex: Trinity College)",
      "4. Pague a taxa de €10 (cartão ou dinheiro no local)"
    ]
  },
  "tfi-bikes": {
    title: "TFI Bikes",
    icon: Bike,
    color: "green" as const,
    content: "Sistema de aluguel de bicicletas públicas em Dublin, Cork, Galway e Limerick. Ótima opção para se locomover pela cidade de forma barata.",
    steps: [
      "1. Assinatura anual de apenas €35",
      "2. Os primeiros 30 minutos de cada viagem são gratuitos",
      "3. Baixe o app TFI Bikes para ver as estações próximas",
      "4. Funciona 24h, 7 dias por semana"
    ]
  },
  "library": {
    title: "Library Card",
    icon: BookOpen,
    color: "saffron" as const,
    content: "As bibliotecas públicas na Irlanda são gratuitas e oferecem um acervo incrível, além de internet grátis e espaços de estudo silenciosos.",
    steps: [
      "1. Acesse librariesireland.ie",
      "2. Cadastre-se online gratuitamente",
      "3. Vá à biblioteca mais próxima com um comprovante de residência e documento com foto",
      "4. Retire seu cartão na hora!"
    ]
  },
  "student-card": {
    title: "Student Card (GNIB/IRP)",
    icon: UserCircle,
    color: "saffron" as const,
    content: "O Irish Residence Permit (IRP) é o seu documento de identidade como estudante não-europeu na Irlanda. Você deve carregá-old sempre.",
    steps: [
      "1. Agende horário no Burgh Quay (Dublin)",
      "2. Leve passaporte, TCD Letter e comprovante financeiro",
      "3. Taxa de registro: €300",
      "4. O cartão chega pelo correio em cerca de 10-15 dias úteis"
    ]
  },
  "working": {
    title: "Working Rules",
    icon: Briefcase,
    color: "terracotta" as const,
    content: "Estudantes internacionais (Stamp 2) têm permissão de trabalho na Irlanda, mas com algumas regras estritas que devem ser seguidas.",
    steps: [
      "1. Máximo de 20 horas/semana durante o período de aulas",
      "2. Máximo de 40 horas/semana durante férias específicas (Jun-Set e 15 Dez-15 Jan)",
      "3. Necessário obter o PPS Number para trabalhar formalmente",
      "4. Salário mínimo atual: €12.70 por hora"
    ]
  },
  "holidays": {
    title: "Bank Holidays",
    icon: CalendarDays,
    color: "terracotta" as const,
    content: "Feriados nacionais na Irlanda (Bank Holidays) onde a maioria das escolas, escritórios e bancos não funcionam.",
    steps: [
      "1. St. Patrick's Day (17 Mar)",
      "2. Easter Monday",
      "3. May, June, and August Bank Holidays (1ª segunda-feira)",
      "4. Halloween Day (Final de Outubro)",
      "5. Christmas Day (25 Dez) e St. Stephen's Day (26 Dez)"
    ]
  },
  "visas": {
    title: "Types of Visa",
    icon: FileText,
    color: "dark" as const,
    content: "Entenda os diferentes selos (Stamps) no seu passaporte ao imigrar para a Irlanda.",
    steps: [
      "1. Stamp 2: Estudante com permissão de trabalho (seu caso!)",
      "2. Stamp 2A: Estudante sem permissão de trabalho",
      "3. Stamp 1G: Graduate Visa (após terminar curso superior)",
      "4. Stamp 4: Visto de trabalho patrocinado (Critical Skills)"
    ]
  },
  "first-visa": {
    title: "First Visa Steps",
    icon: FileCheck,
    color: "dark" as const,
    content: "Passo a passo para garantir a aprovação do seu primeiro visto Stamp 2 logo após chegar.",
    steps: [
      "1. Abra conta em banco irlandês (se exigido)",
      "2. Reúna os €3.000 ou €4.500 exigidos como prova financeira",
      "3. Agende no site da imigração",
      "4. Garanta que o seu seguro de saúde está ativo"
    ]
  }
};

type ModalKey = keyof typeof INFO_MODALS;

const QuickLinkCard = ({ id, title, icon: Icon, color, onClick }: { id: string, title: string, icon: any, color: "green" | "saffron" | "terracotta" | "dark", onClick: () => void }) => {
  const colorStyles = {
    green: "bg-[#2D6A4F]/10 text-[#2D6A4F] border-[#2D6A4F]/20 hover:border-[#2D6A4F]/40",
    saffron: "bg-[#F4A261]/10 text-[#8E4E14] border-[#F4A261]/20 hover:border-[#F4A261]/40",
    terracotta: "bg-[#C15537]/10 text-[#C15537] border-[#C15537]/20 hover:border-[#C15537]/40",
    dark: "bg-[#1A3A2A]/10 text-[#1A3A2A] border-[#1A3A2A]/20 hover:border-[#1A3A2A]/40",
  };

  const iconColors = {
    green: "bg-[#2D6A4F] text-white",
    saffron: "bg-[#F4A261] text-white",
    terracotta: "bg-[#C15537] text-white",
    dark: "bg-[#1A3A2A] text-white",
  };

  return (
    <button onClick={onClick} className={cn(
      "flex flex-col gap-3 p-4 rounded-[24px] border-2 transition-all cursor-pointer shadow-sm active:scale-95 text-left",
      colorStyles[color]
    )}>
      <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center shadow-md", iconColors[color])}>
        <Icon className="w-6 h-6" />
      </div>
      <div className="flex flex-col gap-1 mt-2">
        <h3 className="font-bold text-sm leading-tight">{title}</h3>
      </div>
    </button>
  );
};

export function Dashboard() {
  const [activeModal, setActiveModal] = useState<ModalKey | null>(null);

  return (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-10">
      <section className="flex flex-col gap-3">
        <h1 className="text-3xl font-extrabold text-[#2D6A4F] tracking-tight leading-snug">
          Seu Hub de Acessos
        </h1>
        <p className="text-[#6B6B6B] text-base leading-relaxed">
          Tudo o que você precisa para o dia a dia na Irlanda, a um clique de distância.
        </p>
      </section>

      {/* Daily Essentials */}
      <div className="flex flex-col gap-4">
        <h2 className="text-sm font-bold tracking-widest text-[#6B6B6B] uppercase px-1">Dia a Dia</h2>
        <div className="grid grid-cols-2 gap-3">
          <QuickLinkCard id="leap-card" title="Leap Card" icon={CreditCard} color="green" onClick={() => setActiveModal("leap-card")} />
          <QuickLinkCard id="tfi-bikes" title="TFI Bikes" icon={Bike} color="green" onClick={() => setActiveModal("tfi-bikes")} />
          <QuickLinkCard id="library" title="Library Card" icon={BookOpen} color="saffron" onClick={() => setActiveModal("library")} />
          <QuickLinkCard id="student-card" title="Student Card" icon={UserCircle} color="saffron" onClick={() => setActiveModal("student-card")} />
        </div>
      </div>

      {/* Rules & Visas */}
      <div className="flex flex-col gap-4">
        <h2 className="text-sm font-bold tracking-widest text-[#6B6B6B] uppercase px-1">Regras & Vistos</h2>
        <div className="grid grid-cols-2 gap-3">
          <QuickLinkCard id="working" title="Working Rules" icon={Briefcase} color="terracotta" onClick={() => setActiveModal("working")} />
          <QuickLinkCard id="holidays" title="Bank Holidays" icon={CalendarDays} color="terracotta" onClick={() => setActiveModal("holidays")} />
          <QuickLinkCard id="visas" title="Types of Visa" icon={FileText} color="dark" onClick={() => setActiveModal("visas")} />
          <QuickLinkCard id="first-visa" title="First Visa" icon={FileCheck} color="dark" onClick={() => setActiveModal("first-visa")} />
        </div>
      </div>

      {/* Quick Help Banner */}
      <div className="bg-[#FAF7F2] border border-[#2D6A4F]/10 rounded-[24px] p-6 shadow-sm flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold text-[#1C1C1E]">Não encontrou o que procurava?</h3>
          <p className="text-[#6B6B6B] text-sm leading-relaxed">
            Novos acessos serão adicionados em breve. Você também pode perguntar ao nosso assistente.
          </p>
        </div>
        <Link to="/assistant" className="bg-[#2D6A4F] text-white w-full py-3.5 rounded-xl flex items-center justify-center gap-2 font-bold shadow-md shadow-[#2D6A4F]/20 active:scale-[0.98] transition-transform">
          Falar com Assistente
          <ChevronRight className="w-5 h-5" />
        </Link>
      </div>

      {/* Detail Modal */}
      {activeModal && (
        <div 
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-black/40 backdrop-blur-sm p-0 sm:p-4"
          onClick={() => setActiveModal(null)}
        >
          <div 
            className="bg-[#FAF7F2] w-full max-w-md sm:rounded-[32px] rounded-t-[32px] overflow-hidden flex flex-col animate-in slide-in-from-bottom-12 duration-300 max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative p-6 pb-4 border-b border-black/5 bg-white">
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-black/10 rounded-full sm:hidden" />
              <button 
                onClick={() => setActiveModal(null)} 
                className="absolute right-4 top-4 p-2 rounded-full bg-black/5 hover:bg-black/10 text-black/60 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="flex items-center gap-4 mt-4">
                <div className={cn(
                  "w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg",
                  INFO_MODALS[activeModal].color === "green" ? "bg-[#2D6A4F] text-white shadow-[#2D6A4F]/20" :
                  INFO_MODALS[activeModal].color === "saffron" ? "bg-[#F4A261] text-white shadow-[#F4A261]/20" :
                  INFO_MODALS[activeModal].color === "terracotta" ? "bg-[#C15537] text-white shadow-[#C15537]/20" :
                  "bg-[#1A3A2A] text-white shadow-[#1A3A2A]/20"
                )}>
                  {(() => {
                    const Icon = INFO_MODALS[activeModal].icon;
                    return <Icon className="w-7 h-7" />;
                  })()}
                </div>
                <h2 className="text-xl font-extrabold text-[#1C1C1E]">{INFO_MODALS[activeModal].title}</h2>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-6 overflow-y-auto">
              <p className="text-[#6B6B6B] text-base leading-relaxed mb-6">
                {INFO_MODALS[activeModal].content}
              </p>
              
              <div className="flex flex-col gap-3">
                <h3 className="font-bold text-[#1C1C1E] text-sm uppercase tracking-widest mb-1">Como funciona</h3>
                {INFO_MODALS[activeModal].steps.map((step, idx) => (
                  <div key={idx} className="flex gap-3 bg-white p-4 rounded-[20px] border border-black/5 shadow-sm">
                    <div className="w-6 h-6 rounded-full bg-[#D8EEE4] text-[#2D6A4F] flex items-center justify-center shrink-0 font-bold text-xs">
                      {idx + 1}
                    </div>
                    <p className="text-[#1C1C1E] text-sm font-medium pt-0.5 leading-snug">
                      {step.replace(/^\d+\.\s*/, '')}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 pt-4 bg-white border-t border-black/5">
              <button 
                onClick={() => setActiveModal(null)}
                className="w-full bg-[#2D6A4F] text-white font-bold py-4 rounded-xl shadow-lg shadow-[#2D6A4F]/20 active:scale-[0.98] transition-transform"
              >
                Entendi
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}