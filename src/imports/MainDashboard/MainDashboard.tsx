import svgPaths from "./svg-l55a1e7ain";
import imgDublinCity from "./1045a003ec0b95c5e2d92613da0c9c6246ff726c.png";
import imgUserProfile from "./d49878915d800a7f21bb4ba230c1ef0d50de907f.png";

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Extra_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0f5238] text-[36px] tracking-[-0.9px] w-full">
        <p className="leading-[45px] mb-0">Relaxa, a gente</p>
        <p className="leading-[45px] mb-0">explica tudo passo a</p>
        <p className="leading-[45px]">passo.</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#404943] text-[18px] w-full">
        <p className="leading-[29.25px] mb-0">Organizamos sua jornada para a</p>
        <p className="leading-[29.25px] mb-0">Irlanda. Vamos focar no que importa</p>
        <p className="leading-[29.25px]">agora.</p>
      </div>
    </div>
  );
}

function HeroSectionRelaxaVoice() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[24px] right-[24px] top-[96px]" data-name="Hero Section / Relaxa Voice">
      <Heading />
      <Container />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#8e4e14] text-[12px] tracking-[1.2px] uppercase w-[132.95px]">
        <p className="leading-[16px]">Progresso Total</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f5238] text-[14px] w-[31.55px]">
        <p className="leading-[20px]">35%</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Container3 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#0f5238] flex-[1_0_0] h-[8px] min-h-px min-w-px rounded-[9999px]" data-name="Background" />
      <div className="bg-[rgba(15,82,56,0.3)] flex-[1_0_0] h-[8px] min-h-px min-w-px rounded-[9999px]" data-name="Overlay" />
      <div className="bg-[#e5e2dd] flex-[1_0_0] h-[8px] min-h-px min-w-px rounded-[9999px]" data-name="Background" />
      <div className="bg-[#e5e2dd] flex-[1_0_0] h-[8px] min-h-px min-w-px rounded-[9999px]" data-name="Background" />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#404943] text-[12px] w-full">
        <p className="leading-[16px]">Próximo passo: Finalizar aplicação do visto.</p>
      </div>
    </div>
  );
}

function SectionRelaxaProgressStepperCustomComponent() {
  return (
    <div className="absolute bg-[#f6f3ee] content-stretch flex flex-col gap-[16px] items-start left-[24px] p-[24px] right-[24px] rounded-[12px] top-[366.75px]" data-name="Section - Relaxa Progress Stepper (Custom Component)">
      <Container1 />
      <Container4 />
      <Container5 />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#0f5238] content-stretch flex flex-col items-center justify-center left-0 px-[24px] py-[8px] rounded-[9999px] top-[8px]" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[9999px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Button:shadow" />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white uppercase w-[104.17px]">
        <p className="leading-[24px]">Pré Chegada</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#d8eee4] content-stretch flex flex-col items-center justify-center left-[168.17px] px-[24px] py-[8px] rounded-[9999px] top-[8px]" data-name="Button">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[14px] text-center uppercase w-[116.05px]">
        <p className="leading-[24px]">Pós chegada</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-[#e5e2dd] content-stretch flex flex-col items-center justify-center left-[348.22px] px-[24px] py-[8px] rounded-[9999px] top-[8px]" data-name="Button">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#404943] text-[16px] text-center uppercase w-[116.31px]">
        <p className="leading-[24px]">Documentos</p>
      </div>
    </div>
  );
}

function NavCategoryTabs() {
  return (
    <div className="absolute h-[56px] left-[24px] overflow-clip right-[24px] top-[530.75px]" data-name="Nav - Category Tabs">
      <Button />
      <Button1 />
      <Button2 />
    </div>
  );
}

function Overlay() {
  return (
    <div className="absolute h-[44px] left-0 top-0 w-[40px]" data-name="Overlay">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 44">
        <g id="Overlay">
          <rect fill="var(--fill-0, #FFAB69)" fillOpacity="0.2" height="44" rx="8" width="40" />
          <path d={svgPaths.p31171680} fill="var(--fill-0, #8E4E14)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[5px] left-[16px] top-[7px] w-[97px]">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[5px] justify-center leading-[0] left-0 not-italic text-[#ffcfc3] text-[10px] top-[2.5px] tracking-[0.5px] uppercase w-[97px]">
        <p className="leading-[15px]">Alta prioridade</p>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="absolute bg-[#a33f23] h-[20px] left-[173px] rounded-[9999px] top-[12.25px] w-[121px]" data-name="Background">
      <Frame />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Container">
      <Overlay />
      <Background1 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1c1c19] text-[20px] w-full">
        <p className="leading-[28px]">Aplicação do Visto</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#404943] text-[14px] uppercase w-full">
        <p className="leading-[20px] mb-0">Status: Em andamento • Prazo: 15</p>
        <p className="leading-[20px]">dias</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Container8 />
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 size-[9.333px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333">
        <g id="Container">
          <path d={svgPaths.pce77c00} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center py-[12px] relative rounded-[12px] shrink-0 w-full" data-name="Button" style={{ backgroundImage: "linear-gradient(170.727398deg, rgb(15, 82, 56) 0%, rgb(45, 106, 79) 100%)" }}>
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(15,82,56,0.2),0px_4px_6px_-4px_rgba(15,82,56,0.2)]" data-name="Button:shadow" />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white w-[162.25px]">
        <p className="leading-[24px]">Continue Aplicação</p>
      </div>
      <Container9 />
    </div>
  );
}

function ButtonMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Button:margin">
      <Button3 />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Background">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
        <Container6 />
        <Container7 />
        <ButtonMargin />
      </div>
    </div>
  );
}

function HighPriorityItemVisa() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="High Priority Item (Visa)">
      <div className="absolute bg-gradient-to-r blur-[4px] from-[#8e4e14] inset-[-2px] opacity-10 rounded-[12px] to-[#2d6a4f]" data-name="Gradient+Blur" />
      <Background />
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 119 20">
        <g id="Container">
          <path d={svgPaths.p7b061c0} fill="var(--fill-0, #0F5238)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative w-full">
        <Container10 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1c1c19] text-[14px] uppercase w-full">
        <p className="leading-[20px] mb-0">Tuition Fee</p>
        <p className="leading-[20px]">Payment</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0f5238] text-[10px] uppercase w-full">
        <p className="leading-[15px]">Completo</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative w-full">
        <Heading2 />
        <Container12 />
      </div>
    </div>
  );
}

function CompletedTask() {
  return (
    <div className="bg-[#f6f3ee] col-1 justify-self-stretch relative rounded-[12px] row-1 self-start shrink-0" data-name="Completed Task">
      <div aria-hidden="true" className="absolute border-[#0f5238] border-l-4 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start justify-between pl-[24px] pr-[20px] py-[20px] relative w-full">
        <Margin />
        <Container11 />
      </div>
    </div>
  );
}

function AsymmetricGridForSmallerTasks() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_139px] relative shrink-0 w-full" data-name="Asymmetric Grid for Smaller Tasks">
      <CompletedTask />
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[22px] relative shrink-0 w-[22.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5 22">
        <g id="Container">
          <path d={svgPaths.p39599280} fill="var(--fill-0, #83280E)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[3.52px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[60px] justify-center leading-[0] not-italic relative shrink-0 text-[#82270d] text-[14px] w-[266.46px]">
        <p className="mb-0">
          <span className="leading-[20px]">DICA DE AMIGO:</span>
          <span className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic">{` Reserve sua`}</span>
        </p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] mb-0">acomodação pelo menos 2 meses antes</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px]">do embarque!</p>
      </div>
    </div>
  );
}

function FriendshipToastContext() {
  return (
    <div className="bg-[rgba(163,63,35,0.1)] relative rounded-[12px] shrink-0 w-full" data-name="Friendship Toast Context">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[16px] relative w-full">
          <Container13 />
          <Container14 />
        </div>
      </div>
    </div>
  );
}

function DublinCity() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Dublin City">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[178.12%] left-0 max-w-none top-[-39.06%] w-full" src={imgDublinCity} />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(255,255,255,0.7)] tracking-[1px] uppercase w-full">
        <p className="leading-[15px]">Seu destino</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-full" data-name="Margin">
      <Container15 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[24px] text-white w-full">
        <p className="leading-[32px]">Se prepare para Cork</p>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="absolute bg-gradient-to-t content-stretch flex flex-col from-[rgba(15,82,56,0.8)] inset-0 items-start justify-end p-[24px] to-[rgba(15,82,56,0)]" data-name="Background">
      <Margin1 />
      <Heading3 />
    </div>
  );
}

function LargeVisualCard() {
  return (
    <div className="content-stretch flex flex-col h-[192px] items-start justify-center overflow-clip relative rounded-[16px] shrink-0 w-full" data-name="Large Visual Card">
      <DublinCity />
      <Background2 />
    </div>
  );
}

function ChecklistBentoItems() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[24px] right-[24px] top-[618.75px]" data-name="Checklist Bento Items">
      <HighPriorityItemVisa />
      <AsymmetricGridForSmallerTasks />
      <FriendshipToastContext />
      <LargeVisualCard />
    </div>
  );
}

function UserProfile() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="User Profile">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgUserProfile} />
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#e5e2dd] content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[9999px] shrink-0 size-[40px]" data-name="Background">
      <UserProfile />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[32px] justify-center leading-[0] relative shrink-0 text-[#0f5238] text-[24px] tracking-[-0.6px] w-[89.98px]">
        <p className="leading-[32px]">Gringou</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Background3 />
      <Container17 />
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[12px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 12">
        <g id="Container">
          <path d={svgPaths.p2bce57c0} fill="var(--fill-0, #0F5238)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
      <Container18 />
    </div>
  );
}

function HeaderTopAppBar() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(252,249,244,0.8)] content-stretch flex h-[64px] items-center justify-between left-0 px-[24px] top-0 w-[390px]" data-name="Header - TopAppBar">
      <Container16 />
      <Button4 />
    </div>
  );
}

function UserProfile1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="User Profile">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgUserProfile} />
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#e5e2dd] relative rounded-[9999px] shrink-0 size-[36px]" data-name="Background">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <UserProfile1 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#d8eee4] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[32px] justify-center leading-[0] relative shrink-0 text-[#0f5238] text-[24px] tracking-[-0.6px] w-[89.98px]">
        <p className="leading-[32px]">Gringou</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Background4 />
      <Container20 />
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[12px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 12">
        <g id="Container">
          <path d={svgPaths.p2bce57c0} fill="var(--fill-0, #0F5238)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
      <Container21 />
    </div>
  );
}

function HeaderTopAppBar1() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(252,249,244,0.8)] content-stretch flex gap-[527px] h-[64px] items-center left-0 px-[24px] top-0 w-[390px]" data-name="Header - TopAppBar">
      <Container19 />
      <Button5 />
    </div>
  );
}

function Main() {
  return (
    <div className="h-[1369.75px] max-w-[448px] relative shrink-0 w-full" data-name="Main">
      <HeroSectionRelaxaVoice />
      <SectionRelaxaProgressStepperCustomComponent />
      <NavCategoryTabs />
      <ChecklistBentoItems />
      <HeaderTopAppBar />
      <HeaderTopAppBar1 />
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[21px] relative shrink-0 w-[18.667px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.6667 21">
        <g id="Container">
          <path d={svgPaths.p103cff00} fill="var(--fill-0, #1C1C19)" fillOpacity="0.5" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-[rgba(28,28,25,0.5)] tracking-[0.275px] uppercase w-[34.41px]">
        <p className="leading-[16.5px]">Home</p>
      </div>
    </div>
  );
}

function LinkHome() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-0 px-[20px] py-[8px] top-[calc(50%+13px)]" data-name="Link - Home">
      <Container22 />
      <Margin2 />
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0 size-[21px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
        <g id="Container">
          <path d={svgPaths.p1b39080} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[3.31px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-white tracking-[0.275px] uppercase w-[71.638px]">
        <p className="leading-[16.5px]">Dashboard</p>
      </div>
    </div>
  );
}

function LinkDashboardActive() {
  return (
    <div className="bg-[#0f5238] content-stretch flex flex-col gap-[0.19px] items-center justify-center px-[24px] py-[12px] relative rounded-[16px]" data-name="Link - Dashboard (Active)">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_-5.98px_-3.63px_0] rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(15,82,56,0.2),0px_4px_6px_-4px_rgba(15,82,56,0.2)]" data-name="Link - Dashboard (Active):shadow" />
      <Container23 />
      <Margin3 />
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[22.75px] relative shrink-0 w-[25.667px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.6667 22.75">
        <g id="Container">
          <path d={svgPaths.p37e65200} fill="var(--fill-0, #1C1C19)" fillOpacity="0.5" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-[rgba(28,28,25,0.5)] tracking-[0.275px] uppercase w-[54.3px]">
        <p className="leading-[16.5px]">Journal</p>
      </div>
    </div>
  );
}

function LinkJournal() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-[205px] px-[20px] py-[8px] top-[calc(50%+19.88px)]" data-name="Link - Journal">
      <Container24 />
      <Margin4 />
    </div>
  );
}

function Container25() {
  return (
    <div className="relative shrink-0 size-[25.667px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.6667 25.6667">
        <g id="Container">
          <path d={svgPaths.p31782080} fill="var(--fill-0, #1C1C19)" fillOpacity="0.5" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin5() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-[rgba(28,28,25,0.5)] tracking-[0.275px] uppercase w-[64.02px]">
        <p className="leading-[16.5px]">Assistant</p>
      </div>
    </div>
  );
}

function LinkAssistant() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-[286px] px-[20px] py-[8px] top-[calc(50%+20.33px)]" data-name="Link - Assistant">
      <Container25 />
      <Margin5 />
    </div>
  );
}

function OverlayHorizontalBorderOverlayBlur() {
  return (
    <div className="backdrop-blur-[12px] bg-[rgba(246,243,238,0.8)] h-[122px] max-w-[512px] relative rounded-tl-[32px] rounded-tr-[32px] shrink-0 w-full" data-name="Overlay+HorizontalBorder+OverlayBlur">
      <div aria-hidden="true" className="absolute border-[rgba(191,201,193,0.15)] border-solid border-t inset-0 pointer-events-none rounded-tl-[32px] rounded-tr-[32px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0_0.5px_0] shadow-[0px_-8px_24px_-2px_rgba(28,28,25,0.06)]" data-name="Overlay+Shadow" />
      <LinkHome />
      <div className="-translate-y-1/2 absolute flex h-[68.775px] items-center justify-center left-[79px] top-[calc(50%+13.39px)] w-[125.62px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "1221" } as React.CSSProperties}>
        <div className="flex-none scale-x-105 scale-y-105">
          <LinkDashboardActive />
        </div>
      </div>
      <LinkJournal />
      <LinkAssistant />
    </div>
  );
}

function BottomNavBar() {
  return (
    <div className="content-stretch flex flex-col h-[122px] items-start relative shrink-0 w-[389px]" data-name="BottomNavBar">
      <OverlayHorizontalBorderOverlayBlur />
    </div>
  );
}

export default function MainDashboard() {
  return (
    <div className="bg-[#faf7f2] content-stretch flex flex-col items-start pb-[134.25px] relative size-full" data-name="Main Dashboard">
      <Main />
      <BottomNavBar />
    </div>
  );
}