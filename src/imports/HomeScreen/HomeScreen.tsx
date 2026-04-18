import svgPaths from "./svg-we4snlagjo";
import imgUserProfile from "./d49878915d800a7f21bb4ba230c1ef0d50de907f.png";

function UserProfile() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="User Profile">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgUserProfile} />
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#e5e2dd] relative rounded-[9999px] shrink-0 size-[36px]" data-name="Background">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <UserProfile />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#d8eee4] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[32px] justify-center leading-[0] relative shrink-0 text-[#0f5238] text-[24px] tracking-[-0.6px] w-[89.98px]">
        <p className="leading-[32px]">Gringou</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Background />
      <Container1 />
    </div>
  );
}

function Container2() {
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

function Button() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
      <Container2 />
    </div>
  );
}

function HeaderTopAppBar() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(252,249,244,0.8)] content-stretch flex h-[64px] items-center justify-between left-0 px-[24px] top-0 w-[390px]" data-name="Header - TopAppBar">
      <Container />
      <Button />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Extra_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0f5238] text-[36px] tracking-[-0.9px] w-full">
        <p className="leading-[40px]">Olá, Gabriel!</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#404943] text-[18px] w-full">
        <p className="leading-[28px]">Tudo pronto para o seu próximo passo?</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Container4 />
    </div>
  );
}

function Container5() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[16px] w-full">
          <p className="leading-[normal]">Busca</p>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pl-[49px] pr-[17px] py-[19px] relative w-full">
          <Container5 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(191,201,193,0.15)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute bottom-[29.31%] content-stretch flex flex-col items-start left-[16px] top-[29.31%]" data-name="Container">
      <div className="relative shrink-0 size-[18px]" data-name="Icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <path d={svgPaths.p8a35e00} fill="var(--fill-0, #BFC9C1)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function SubtleSearchBar() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[672px] relative shrink-0 w-full" data-name="Subtle Search Bar">
      <Input />
      <Container6 />
    </div>
  );
}

function WelcomeSectionSearch() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[24px] top-[100px] w-[342px]" data-name="Welcome Section & Search">
      <Container3 />
      <SubtleSearchBar />
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 size-[20.05px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.05 20.05">
        <g id="Container">
          <path d={svgPaths.p4768a80} fill="var(--fill-0, #FFCFC3)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#ffcfc3] text-[12px] tracking-[0.6px] uppercase w-[119.27px]">
        <p className="leading-[16px]">urgente</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative w-full">
        <Container8 />
        <Heading2 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#ffcfc3] text-[24px] w-full">
        <p className="leading-[30px]">Registro do GNIB</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-90 relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#ffcfc3] text-[16px] w-full">
        <p className="leading-[24px] mb-0">Sua entrevista é em 12 dias. Não</p>
        <p className="leading-[24px]">esqueça dos documentos!</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative w-full">
        <Container10 />
        <Container11 />
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#ffcfc3] content-stretch flex items-start px-[12px] py-[3.5px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#83280e] text-[12px] w-[107.72px]">
        <p className="leading-[16px]">MAR 14, 09:30 AM</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] relative w-full">
        <Background1 />
      </div>
    </div>
  );
}

function GnibRegistrationPriorityWarning() {
  return (
    <div className="absolute bg-[#a33f23] content-stretch flex flex-col gap-[16px] items-start left-0 pb-[22px] pt-[25px] px-[25px] right-0 rounded-[24px] top-0" data-name="GNIB Registration (Priority Warning)">
      <div aria-hidden="true" className="absolute border border-[rgba(131,40,14,0.2)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Container7 />
      <Container9 />
      <Container12 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1c1c19] text-[20px] w-full">
        <p className="leading-[28px]">Planeje seus próximos passos!</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.625px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#404943] text-[14px] w-full">
        <p className="leading-[22.75px]">{`Pensando em ficar mais tempo? Vamos encontrar opções para a sua renovação. `}</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6.875px] items-start relative w-full">
        <Heading3 />
        <Container14 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#faf7f2] text-[15px] text-center w-[122.64px]">
        <p className="leading-[24px]">Explorar opções</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path d={svgPaths.p1a406200} fill="var(--fill-0, #FCF9F4)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#2d6a4f] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24px] py-[16px] relative w-full">
          <Container15 />
          <Container16 />
        </div>
      </div>
    </div>
  );
}

function ButtonMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] relative w-full">
        <Button1 />
      </div>
    </div>
  );
}

function NextStepCta() {
  return (
    <div className="absolute bg-[#ebe8e3] content-stretch flex flex-col items-start justify-between left-0 p-[25px] right-0 rounded-[24px] top-[275px]" data-name="Next Step CTA">
      <div aria-hidden="true" className="absolute border border-[rgba(191,201,193,0.1)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Container13 />
      <ButtonMargin />
    </div>
  );
}

function DeadlinesCriticalTasksSideGrid() {
  return (
    <div className="absolute h-[447.55px] left-0 right-0 top-[474px]" data-name="Deadlines & Critical Tasks (Side Grid)">
      <GnibRegistrationPriorityWarning />
      <NextStepCta />
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[24px]" data-name="Heading 2">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[108px] justify-center leading-[0] relative shrink-0 text-[#1c1c19] text-[30px] w-[151.39px]">
        <p className="leading-[36px] mb-0">English for</p>
        <p className="leading-[36px] mb-0">Academic</p>
        <p className="leading-[36px]">Purposes</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[136px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#404943] text-[16px] w-[180.3px]">
        <p className="leading-[24px]">Erin College, Cork</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[160px] relative shrink-0 w-[222px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] left-0 not-italic text-[#0f5238] text-[12px] top-[8px] tracking-[1.2px] uppercase w-[127.25px]">
        <p className="leading-[16px]">CUrso atual</p>
      </div>
      <Heading1 />
      <Container20 />
    </div>
  );
}

function Overlay() {
  return (
    <div className="h-[46.5px] relative shrink-0 w-[51.5px]" data-name="Overlay">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 51.5 46.5">
        <g id="Overlay">
          <rect fill="var(--fill-0, #2D6A4F)" fillOpacity="0.1" height="46.5" rx="16" width="51.5" />
          <path d={svgPaths.p2c4b8210} fill="var(--fill-0, #0F5238)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container19 />
      <Overlay />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[227px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[32px] justify-center leading-[0] not-italic relative shrink-0 text-[#404943] text-[14px] w-[202px]">
        <p className="leading-[24px]">Progressão: Semana 14 de 25</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f5238] text-[20px] w-[45.14px]">
        <p className="leading-[28px]">56%</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Container22 />
      <Container23 />
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#ebe8e3] h-[12px] overflow-clip relative rounded-[9999px] shrink-0 w-full" data-name="Background">
      <div className="absolute bg-gradient-to-r from-[#0f5238] inset-[0_44%_0_0] rounded-[9999px] to-[#2d6a4f]" data-name="Gradient" />
    </div>
  );
}

function ProgressStepper() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Progress Stepper">
      <Container21 />
      <Background2 />
    </div>
  );
}

function ProgressStepperMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[48px] relative shrink-0 w-full" data-name="Progress Stepper:margin">
      <ProgressStepper />
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#e5e2dd] h-[46px] relative rounded-[12px] shrink-0 w-[289px]" data-name="Button">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[48px] justify-center leading-[0] left-[32px] not-italic right-[32px] text-[#2d6a4f] text-[16px] text-center top-1/2">
        <p className="leading-[24px]">Detalhes do Curso</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[289.22px]" data-name="Container">
      <Button2 />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[40px] relative shrink-0 w-full" data-name="Margin">
      <Container24 />
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-between relative w-full">
        <Container18 />
        <ProgressStepperMargin />
        <Margin />
      </div>
    </div>
  );
}

function EnglishCourseStatusPrimaryCard() {
  return (
    <div className="absolute bg-white h-[416px] left-0 right-0 rounded-[24px] top-0" data-name="English Course Status (Primary Card)">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-[33px] relative rounded-[inherit] size-full">
        <div className="absolute bg-[rgba(15,82,56,0.05)] blur-[32px] right-[-63px] rounded-[9999px] size-[256px] top-[-31px]" data-name="Decorative element" />
        <Container17 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(191,201,193,0.1)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Container25() {
  return (
    <div className="relative shrink-0 size-[27.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.5 27.5">
        <g id="Container">
          <path d={svgPaths.p30f99200} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background3() {
  return (
    <div className="absolute bg-[#f4a261] content-stretch flex items-center justify-center left-[32px] rounded-[16px] size-[64px] top-[32px]" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] left-0 rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(244,162,97,0.3),0px_4px_6px_-4px_rgba(244,162,97,0.3)] size-[64px] top-0" data-name="Overlay+Shadow" />
      <Container25 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#8e4e14] text-[20px] w-[155.64px]">
        <p className="leading-[28px]">Lembrete</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[208px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(142,78,20,0.8)] w-[180.64px]">
        <p className="leading-[26px] mb-0">Vi que você tem GNIB</p>
        <p className="leading-[26px] mb-0">logo mais. O clima em</p>
        <p className="leading-[26px]">Dublin vai estar bem chuvoso na quarta, leve um guarda-chuva reforçado para a fila do escritório da Burgh Quay!</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[120px] top-[32px]" data-name="Container">
      <Heading4 />
      <Container27 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[48px] justify-center leading-[0] not-italic relative shrink-0 text-[#8e4e14] text-[16px] w-[116.56px]">
        <p className="[text-decoration-skip-ink:none] decoration-[#f4a261] decoration-solid leading-[24px] mb-0 underline">Check list de</p>
        <p className="[text-decoration-skip-ink:none] decoration-[#f4a261] decoration-solid leading-[24px] underline">documentos →</p>
      </div>
    </div>
  );
}

function AssistantTooltipWarmFriendVoice() {
  return (
    <div className="absolute bg-[rgba(244,162,97,0.1)] border border-[rgba(244,162,97,0.2)] border-solid h-[374px] left-0 right-0 rounded-[24px] top-[1027px]" data-name="Assistant Tooltip (Warm friend voice)">
      <Background3 />
      <Container26 />
    </div>
  );
}

function MainBentoGrid() {
  return (
    <div className="absolute h-[1401px] left-[24px] top-[336px] w-[342px]" data-name="Main Bento Grid">
      <DeadlinesCriticalTasksSideGrid />
      <EnglishCourseStatusPrimaryCard />
      <AssistantTooltipWarmFriendVoice />
    </div>
  );
}

function Main() {
  return (
    <div className="h-[1737px] max-w-[1280px] relative shrink-0 w-full" data-name="Main">
      <HeaderTopAppBar />
      <WelcomeSectionSearch />
      <MainBentoGrid />
    </div>
  );
}

function Container28() {
  return (
    <div className="relative shrink-0 size-[17.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 17.5">
        <g id="Container">
          <path d={svgPaths.p2f5d9c00} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function FloatingActionButtonFabContextualToHomeDashboard() {
  return (
    <div className="absolute bg-[#8e4e14] bottom-[153px] content-stretch flex items-center justify-center right-[9px] rounded-[9999px] size-[64px]" data-name="Floating Action Button (FAB) - Contextual to Home/Dashboard">
      <div className="absolute bg-[rgba(255,255,255,0)] bottom-0 right-0 rounded-[9999px] shadow-[0px_8px_24px_-2px_rgba(142,78,20,0.3)] size-[64px]" data-name="Floating Action Button (FAB) - Contextual to Home/Dashboard:shadow" />
      <Container28 />
    </div>
  );
}

function Container29() {
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

function Margin1() {
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
      <Container29 />
      <Margin1 />
    </div>
  );
}

function Container30() {
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

function Margin2() {
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
      <Container30 />
      <Margin2 />
    </div>
  );
}

function Container31() {
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

function Margin3() {
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
      <Container31 />
      <Margin3 />
    </div>
  );
}

function Container32() {
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

function Margin4() {
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
      <Container32 />
      <Margin4 />
    </div>
  );
}

function OverlayHorizontalBorderOverlayBlur() {
  return (
    <div className="backdrop-blur-[12px] bg-[rgba(246,243,238,0.8)] h-[122px] max-w-[512px] relative rounded-tl-[32px] rounded-tr-[32px] shrink-0 w-full" data-name="Overlay+HorizontalBorder+OverlayBlur">
      <div aria-hidden="true" className="absolute border-[rgba(191,201,193,0.15)] border-solid border-t inset-0 pointer-events-none rounded-tl-[32px] rounded-tr-[32px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0_0.5px_0] shadow-[0px_-8px_24px_-2px_rgba(28,28,25,0.06)]" data-name="Overlay+Shadow" />
      <LinkHome />
      <div className="-translate-y-1/2 absolute flex h-[68.775px] items-center justify-center left-[79px] top-[calc(50%+13.39px)] w-[125.62px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "36" } as React.CSSProperties}>
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
    <div className="absolute bottom-0 content-stretch flex flex-col h-[122px] items-start left-px w-[389px]" data-name="BottomNavBar">
      <OverlayHorizontalBorderOverlayBlur />
    </div>
  );
}

export default function HomeScreen() {
  return (
    <div className="bg-[#faf7f2] content-stretch flex flex-col items-start pb-[128px] relative size-full" data-name="Home Screen">
      <Main />
      <FloatingActionButtonFabContextualToHomeDashboard />
      <BottomNavBar />
    </div>
  );
}