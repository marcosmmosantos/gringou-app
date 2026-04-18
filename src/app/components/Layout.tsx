import { ReactNode, useState, useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router";
import { Home, LayoutGrid, Sparkles, User, Menu, Plus, FileText, CheckSquare, MessageCircle, X, LifeBuoy, UserPlus, LogOut, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import logoFull from "figma:asset/35690eace43ef99e763198ba27f042b8c7af71bb.png";
import logoIcon from "figma:asset/f85a1ecce9565007e645c99ced9a85b32f8a3bb8.png";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

const FABMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    { id: 1, label: "Novo Documento", icon: FileText },
    { id: 2, label: "Nova Tarefa", icon: CheckSquare },
    { id: 3, label: "Falar com Assistente", icon: MessageCircle },
  ];

  return (
    <div className="absolute bottom-28 right-6 z-40 flex flex-col items-end pointer-events-none">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-3 mb-4 items-end pointer-events-auto"
          >
            {actions.map((action, i) => (
              <motion.button
                key={action.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 + 0.1 }}
                className="flex items-center gap-3"
              >
                <span className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-sm font-medium text-[#1A3A2A] shadow-sm border border-[#2D6A4F]/10">
                  {action.label}
                </span>
                <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-md shadow-sm border border-[#2D6A4F]/10 flex items-center justify-center text-[#2D6A4F]">
                  <action.icon className="w-5 h-5" />
                </div>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg transition-colors z-50 pointer-events-auto",
          isOpen ? "bg-[#C15537]" : "bg-[#8E4E14]"
        )}
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <Plus className="w-6 h-6" />
        </motion.div>
      </button>
    </div>
  );
};

export type ProfileContextType = {
  // Removed profileImage state - no longer needed
};

export function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Removed profile image state management

  const navItems = [
    { path: "/", label: "HOME", icon: Home },
    { path: "/dashboard", label: "DASHBOARD", icon: LayoutGrid },
    { path: "/checklist", label: "CHECKLIST", icon: CheckSquare },
    { path: "/assistant", label: "ASSISTANT", icon: Sparkles },
  ];

  const handleLogout = () => {
    setIsMenuOpen(false);
    navigate("/");
  };

  return (
    <div className="min-h-[100dvh] bg-white sm:bg-gray-100 font-sans text-[#1C1C1E] flex justify-center w-full">
      {/* 
        Changed to h-[100dvh] max-h-[100dvh] to strictly lock the container to the screen size.
        This forces the inner <main> to scroll, keeping the bottom navigation permanently fixed at the bottom.
      */}
      <div className="w-full max-w-md bg-[#FAF7F2] relative h-[100dvh] max-h-[100dvh] border-x border-[#2D6A4F]/10 shadow-2xl flex flex-col overflow-hidden">
        
        {/* Top App Bar */}
        <header className="z-30 bg-[#FAF7F2]/80 backdrop-blur-xl px-6 py-4 flex items-center justify-between border-b border-black/5 shrink-0">
          <Link to="/" className="flex items-center gap-3 active:scale-95 transition-transform">
            <img src={logoFull} alt="Gringou" className="h-10 object-contain" />
          </Link>
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="p-2 rounded-full hover:bg-black/5 transition active:scale-95"
          >
            <Menu className="w-6 h-6 text-[#2D6A4F]" />
          </button>
        </header>

        {/* Content Area - Made strictly scrollable within the fixed parent */}
        <main className="px-6 py-6 pb-32 flex-1 flex flex-col gap-8 overflow-y-auto relative z-10">
          <Outlet context={{} satisfies ProfileContextType} />
        </main>

        {/* FAB */}
        <FABMenu />

        {/* Bottom Nav Bar - Always visible at bottom */}
        <nav className="absolute bottom-0 left-0 w-full bg-[#FAF7F2]/90 backdrop-blur-xl border-t border-[#2D6A4F]/10 rounded-t-3xl px-6 py-4 z-30 pb-6">
          <div className="flex justify-between items-center">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "flex flex-col items-center gap-1 px-4 py-2 rounded-2xl transition-all",
                    isActive ? "bg-[#2D6A4F] text-white shadow-md shadow-[#2D6A4F]/20" : "text-[#6B6B6B] hover:bg-black/5"
                  )}
                >
                  <item.icon className={cn("w-5 h-5", isActive ? "stroke-[2.5px]" : "stroke-2")} />
                  <span className="text-[10px] font-semibold tracking-wide">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Side Drawer Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Overlay */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setIsMenuOpen(false)}
                className="absolute inset-0 bg-black/40 backdrop-blur-sm z-50"
              />

              {/* Drawer */}
              <motion.div 
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="absolute top-0 right-0 bottom-0 w-[80%] bg-white z-50 flex flex-col shadow-2xl rounded-l-[32px] overflow-hidden"
              >
                {/* Header */}
                <div className="px-6 py-6 border-b border-black/5 flex items-center justify-between bg-[#FAF7F2]">
                  <span className="font-extrabold text-[#2D6A4F] text-xl">Menu</span>
                  <button 
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 rounded-full hover:bg-black/5 transition text-[#1C1C1E]"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-6">
                  
                  {/* User Snippet */}
                  <div className="flex items-center gap-4 pb-6 border-b border-black/5">
                    <div className="w-12 h-12 rounded-full bg-[#2D6A4F]/5 border-2 border-[#2D6A4F]/10 shadow-sm flex items-center justify-center shrink-0 p-2">
                      <img src={logoIcon} alt="Gringou" className="w-full h-full object-contain" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-[#1C1C1E] text-lg leading-tight">Gabriel</span>
                      <span className="text-xs text-[#6B6B6B]">gabriel@example.com</span>
                    </div>
                  </div>

                  {/* Menu Links */}
                  <div className="flex flex-col gap-2">
                    <Link 
                      to="/profile" 
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center justify-between p-4 rounded-xl hover:bg-[#FAF7F2] transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <User className="w-5 h-5 text-[#2D6A4F]" />
                        <span className="font-bold text-[#1C1C1E]">Perfil</span>
                      </div>
                      <ChevronRight className="w-5 h-5 text-[#6B6B6B]/50" />
                    </Link>

                    <Link 
                      to="/help" 
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center justify-between p-4 rounded-xl hover:bg-[#FAF7F2] transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <LifeBuoy className="w-5 h-5 text-[#2D6A4F]" />
                        <span className="font-bold text-[#1C1C1E]">Ajuda & Suporte</span>
                      </div>
                      <ChevronRight className="w-5 h-5 text-[#6B6B6B]/50" />
                    </Link>

                    <button 
                      onClick={() => {
                        alert("Em breve: Você poderá convidar seus amigos!");
                        setIsMenuOpen(false);
                      }}
                      className="flex items-center justify-between p-4 rounded-xl hover:bg-[#FAF7F2] transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <UserPlus className="w-5 h-5 text-[#2D6A4F]" />
                        <span className="font-bold text-[#1C1C1E]">Convidar Amigos</span>
                      </div>
                      <ChevronRight className="w-5 h-5 text-[#6B6B6B]/50" />
                    </button>
                  </div>
                </div>

                {/* Footer / Logout */}
                <div className="p-6 border-t border-black/5 bg-[#FAF7F2]">
                  <button 
                    onClick={handleLogout}
                    className="flex items-center gap-3 w-full p-4 rounded-xl text-[#C15537] hover:bg-[#C15537]/10 transition-colors font-bold"
                  >
                    <LogOut className="w-5 h-5" />
                    <span>Sair da conta</span>
                  </button>
                </div>

              </motion.div>
            </>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}