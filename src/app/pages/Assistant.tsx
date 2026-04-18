import { useState } from "react";
import { Send, Bot, User, Sparkles, ShieldAlert, ArrowRight } from "lucide-react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

type Message = {
  id: number;
  role: "user" | "assistant";
  content: string;
};

export function Assistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: "assistant",
      content: "Oi Gabriel! Aqui é seu assistente Gringou. Como posso ajudar com sua documentação ou mudança para a Irlanda hoje?"
    }
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages([...messages, { id: Date.now(), role: "user", content: input }]);
    setInput("");
    
    // Simulate response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        role: "assistant",
        content: "Para registrar o IRP, você vai precisar do passaporte válido, a carta da escola (TCD Letter), comprovante do seguro saúde e recibo de pagamento das taxas. Quer que eu te ajude a organizar esses documentos no Vault?"
      }]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-140px)] animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
      <section className="flex flex-col gap-2 shrink-0 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-[#F4A261] flex items-center justify-center text-white shadow-lg shadow-[#F4A261]/20">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold text-[#2D6A4F] tracking-tight">Assistente</h1>
            <p className="text-[#6B6B6B] text-sm">Tire dúvidas sobre vistos e burocracia</p>
          </div>
        </div>
      </section>

      {/* Trust warning */}
      <div className="bg-[#FAF7F2] border border-[#C15537]/20 rounded-xl p-3 flex gap-3 shrink-0 mb-6 shadow-sm">
        <ShieldAlert className="w-5 h-5 text-[#C15537] shrink-0 mt-0.5" />
        <p className="text-xs text-[#6B6B6B] leading-relaxed">
          As respostas são baseadas em fontes oficiais irlandesas, mas não substituem aconselhamento legal. Em casos complexos, conectamos você a um especialista.
        </p>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto flex flex-col gap-6 no-scrollbar pb-6">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={cn(
              "flex gap-3 max-w-[85%]",
              msg.role === "user" ? "self-end flex-row-reverse" : "self-start"
            )}
          >
            <div className={cn(
              "w-8 h-8 rounded-full shrink-0 flex items-center justify-center shadow-sm",
              msg.role === "user" ? "bg-[#2D6A4F] text-white" : "bg-white text-[#F4A261] border border-black/5"
            )}>
              {msg.role === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
            </div>
            
            <div className={cn(
              "px-4 py-3 rounded-[20px] text-sm leading-relaxed shadow-sm",
              msg.role === "user" 
                ? "bg-[#2D6A4F] text-white rounded-tr-sm" 
                : "bg-white text-[#1C1C1E] border border-black/5 rounded-tl-sm"
            )}>
              {msg.content}
            </div>
          </div>
        ))}

        {messages.length > 1 && (
          <div className="self-center mt-2">
             <button className="bg-[#F4A261]/10 text-[#C15537] px-4 py-2 rounded-full text-xs font-bold border border-[#F4A261]/20 flex items-center gap-2 transition-colors hover:bg-[#F4A261]/20">
               Falar com Especialista <ArrowRight className="w-3 h-3" />
             </button>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="shrink-0 pt-4 mt-auto">
        <form onSubmit={handleSend} className="relative group">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Pergunte sobre seu visto..."
            className="w-full bg-white text-[#1C1C1E] rounded-[24px] pl-5 pr-14 py-4 shadow-[0px_4px_16px_-4px_rgba(45,106,79,0.08)] border border-[#2D6A4F]/10 focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]/20 transition-all placeholder:text-[#6B6B6B]/60 text-sm"
          />
          <button 
            type="submit"
            disabled={!input.trim()}
            className="absolute right-2 top-2 bottom-2 aspect-square rounded-full bg-[#2D6A4F] text-white flex items-center justify-center disabled:opacity-50 disabled:bg-[#D8EEE4] disabled:text-[#6B6B6B] transition-all hover:bg-[#1A3A2A]"
          >
            <Send className="w-4 h-4 ml-0.5" />
          </button>
        </form>
      </div>
    </div>
  );
}