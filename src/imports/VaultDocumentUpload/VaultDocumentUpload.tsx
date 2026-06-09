import svgPaths from "./svg-4gmoonz6sa";
import imgUserProfile from "./d49878915d800a7f21bb4ba230c1ef0d50de907f.png";

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0f5238] text-[36px] tracking-[-0.9px] w-full">
        <p className="leading-[40px]">Smart Vault</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#404943] text-[18px] w-full">
        <p className="leading-[29.25px] mb-0">Tudo pronto? Vamos organizar seus</p>
        <p className="leading-[29.25px]">documentos essenciais para a jornada.</p>
      </div>
    </div>
  );
}

function SectionEditorialHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Section - Editorial Header">
      <Heading />
      <Container />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[23.75px] relative shrink-0 w-full" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 294 23.75">
        <g id="Container">
          <path d={svgPaths.p27eaa780} fill="var(--fill-0, #83280E)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c19] text-[18px] w-full">
        <p className="leading-[28px]">Health Insurance</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#404943] text-[14px] w-full">
        <p className="leading-[20px]">Document missing</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <Container3 />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#d8eee4] col-1 h-[160px] justify-self-stretch relative rounded-[12px] row-1 shrink-0" data-name="Background">
      <div aria-hidden="true" className="absolute border-2 border-[#0f5238] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start justify-between p-[24px] relative size-full">
        <Container1 />
        <Container2 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[25px] relative shrink-0 w-full" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 290 25">
        <g id="Container">
          <path d={svgPaths.p252ccc00} fill="var(--fill-0, #0F5238)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c19] text-[18px] w-full">
        <p className="leading-[28px]">Proof of Fees</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0f5238] text-[14px] w-full">
        <p className="leading-[20px]">Action Required</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <Heading3 />
        <Container6 />
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#d8eee4] col-1 h-[160px] justify-self-stretch relative rounded-[12px] row-2 shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border-2 border-[#0f5238] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start justify-between p-[26px] relative size-full">
        <Container4 />
        <Container5 />
      </div>
    </div>
  );
}

function DocumentSelectionStatusBentoGrid() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[__160px_160px] relative shrink-0 w-full" data-name="Document Selection / Status Bento Grid">
      <Background />
      <BackgroundBorder />
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[27.5px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.5 20">
        <g id="Container">
          <path d={svgPaths.p5edf000} fill="var(--fill-0, #0F5238)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#f6f3ee] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[64px]" data-name="Background">
      <Container7 />
    </div>
  );
}

function Margin() {
  return (
    <div className="h-[80px] relative shrink-0 w-[64px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
        <Background1 />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Heading 2">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Semi_Bold',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c19] text-[20px] text-center w-[189.7px]">
        <p className="leading-[28px]">Enviar Proof of Fees</p>
      </div>
    </div>
  );
}

function Heading2Margin() {
  return (
    <div className="relative shrink-0" data-name="Heading 2:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative">
        <Heading1 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[72px] max-w-[320px] relative shrink-0 w-[192px]" data-name="Container">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[72px] justify-center leading-[0] left-[calc(50%-0.01px)] not-italic text-[#404943] text-[16px] text-center top-[36px] w-[184.17px]">
        <p className="leading-[24px] mb-0">Arraste seu arquivo aqui</p>
        <p className="leading-[24px] mb-0">ou use o botão abaixo</p>
        <p className="leading-[24px]">para selecionar.</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="max-w-[320px] relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] pb-[24px] relative">
        <Container8 />
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#ebe8e3] bottom-[31px] content-stretch flex flex-col items-center left-[calc(50%-54.07px)] px-[12px] py-[4px] rounded-[9999px] top-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#404943] text-[10px] text-center tracking-[0.5px] uppercase w-[21.03px]">
        <p className="leading-[15px]">PDF</p>
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#ebe8e3] bottom-[31px] content-stretch flex flex-col items-center left-[calc(50%-0.97px)] px-[12px] py-[4px] rounded-[9999px] top-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#404943] text-[10px] text-center tracking-[0.5px] uppercase w-[21.16px]">
        <p className="leading-[15px]">JPG</p>
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#ebe8e3] bottom-[31px] content-stretch flex flex-col items-center left-[calc(50%+53.1px)] px-[12px] py-[4px] rounded-[9999px] top-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#404943] text-[10px] text-center tracking-[0.5px] uppercase w-[22.97px]">
        <p className="leading-[15px]">PNG</p>
      </div>
    </div>
  );
}

function Background5() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#ebe8e3] bottom-0 content-stretch flex flex-col items-center left-[calc(50%+0.01px)] px-[12px] py-[4px] rounded-[9999px] top-[31px]" data-name="Background">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#404943] text-[10px] text-center tracking-[0.5px] uppercase w-[56.19px]">
        <p className="leading-[15px]">MAX 10MB</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[54px] relative shrink-0 w-[192px]" data-name="Container">
      <Background2 />
      <Background3 />
      <Background4 />
      <Background5 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[32px] relative">
        <Container9 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 size-[16.667px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
        <g id="Container">
          <path d={svgPaths.p2f06d100} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="relative rounded-[12px] shrink-0" data-name="Button" style={{ backgroundImage: "linear-gradient(136.414524deg, rgb(15, 82, 56) 0%, rgb(45, 106, 79) 100%)" }}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[32px] py-[16px] relative">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0.67px_0_0] rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Button:shadow" />
        <Container10 />
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white w-[79.77px]">
          <p className="leading-[24px]">Select File</p>
        </div>
      </div>
    </div>
  );
}

function Border() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="Border">
      <div aria-hidden="true" className="absolute border-2 border-[#bfc9c1] border-dashed inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center p-[42px] relative w-full">
          <Margin />
          <Heading2Margin />
          <Margin1 />
          <Margin2 />
          <Button />
        </div>
      </div>
    </div>
  );
}

function SectionUploadZone() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Section - Upload Zone">
      <div aria-hidden="true" className="absolute border border-[rgba(191,201,193,0.15)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex flex-col items-start pb-[33px] pt-[25px] px-[33px] relative w-full">
        <Border />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute bottom-[-15.52px] right-[-16px] size-[128px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 128 128">
        <g id="Container" opacity="0.2">
          <path d={svgPaths.p38008ec0} fill="var(--fill-0, #83280E)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#3b0900] text-[16px] w-full">
        <p className="leading-[24px]">Precisa de ajuda?</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[9.275px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#82270d] text-[14px] w-full">
        <p className="leading-[22.75px] mb-0">Se você não tem certeza de</p>
        <p className="leading-[22.75px] mb-0">qual documento enviar,</p>
        <p className="leading-[22.75px] mb-0">nosso assistente pode</p>
        <p className="leading-[22.75px]">ajudar.</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col gap-[7.1px] items-start max-w-[239.39999389648438px] relative shrink-0 w-[194.59px]" data-name="Container">
      <Heading4 />
      <Container13 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#83280e] text-[14px] tracking-[-0.35px] w-[116.08px]">
        <p className="[text-decoration-skip-ink:none] decoration-solid leading-[20px] underline">Falar com suporte</p>
      </div>
    </div>
  );
}

function HelpSectionAsymmetricEditorialStyle() {
  return (
    <div className="bg-[#ffdbd1] relative rounded-[12px] shrink-0 w-full" data-name="Help Section (Asymmetric Editorial Style)">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pb-[32px] pt-[24px] px-[32px] relative w-full">
          <Container11 />
          <Container12 />
        </div>
      </div>
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

function Background6() {
  return (
    <div className="bg-[#e5e2dd] content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[9999px] shrink-0 size-[40px]" data-name="Background">
      <UserProfile />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold h-[32px] justify-center leading-[0] relative shrink-0 text-[#0f5238] text-[24px] tracking-[-0.6px] w-[89.98px]">
        <p className="leading-[32px]">Gringou</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Background6 />
      <Container15 />
    </div>
  );
}

function Container16() {
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

function Button1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
      <Container16 />
    </div>
  );
}

function HeaderTopAppBar() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(252,249,244,0.8)] content-stretch flex h-[64px] items-center justify-between left-0 px-[24px] top-0 w-[390px]" data-name="Header - TopAppBar">
      <Container14 />
      <Button1 />
    </div>
  );
}

function Main() {
  return (
    <div className="max-w-[672px] relative shrink-0 w-full" data-name="Main">
      <div className="content-stretch flex flex-col gap-[40px] items-start max-w-[inherit] pt-[96px] px-[24px] relative w-full">
        <SectionEditorialHeader />
        <DocumentSelectionStatusBentoGrid />
        <SectionUploadZone />
        <HelpSectionAsymmetricEditorialStyle />
        <HeaderTopAppBar />
      </div>
    </div>
  );
}

function Margin3() {
  return (
    <div className="h-[22px] relative shrink-0 w-[16px]" data-name="Margin">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 22">
        <g id="Margin">
          <path d={svgPaths.p12a32500} fill="var(--fill-0, #1C1C19)" fillOpacity="0.5" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-[rgba(28,28,25,0.5)] tracking-[0.275px] uppercase w-[34.41px]">
        <p className="leading-[16.5px]">Home</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-[16px] px-[20px] py-[8px] top-[calc(50%-5.5px)]" data-name="Link">
      <Margin3 />
      <Container17 />
    </div>
  );
}

function Margin4() {
  return (
    <div className="h-[22px] relative shrink-0 w-[18px]" data-name="Margin">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 22">
        <g id="Margin">
          <path d={svgPaths.p20793584} fill="var(--fill-0, #1C1C19)" fillOpacity="0.5" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-[rgba(28,28,25,0.5)] tracking-[0.275px] uppercase w-[71.17px]">
        <p className="leading-[16.5px]">Dashboard</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-[90.41px] px-[20px] py-[8px] top-[calc(50%-5.5px)]" data-name="Link">
      <Margin4 />
      <Container18 />
    </div>
  );
}

function Margin5() {
  return (
    <div className="h-[23.5px] relative shrink-0 w-[22px]" data-name="Margin">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 23.5">
        <g id="Margin">
          <path d={svgPaths.p3a06a480} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-white tracking-[0.275px] uppercase w-[54.3px]">
        <p className="leading-[16.5px]">Journal</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="-translate-y-1/2 absolute bg-[#2d6a4f] content-stretch flex flex-col items-center justify-center left-[201.58px] px-[20px] py-[8px] rounded-[16px] top-[calc(50%-5.5px)]" data-name="Link">
      <Margin5 />
      <Container19 />
    </div>
  );
}

function Margin6() {
  return (
    <div className="h-[26px] relative shrink-0 w-[22px]" data-name="Margin">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 26">
        <g id="Margin">
          <path d={svgPaths.p11c2d500} fill="var(--fill-0, #1C1C19)" fillOpacity="0.5" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-[rgba(28,28,25,0.5)] tracking-[0.275px] uppercase w-[64.02px]">
        <p className="leading-[16.5px]">Assistant</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-[295.88px] px-[20px] py-[8px] top-[calc(50%-5.5px)]" data-name="Link">
      <Margin6 />
      <Container20 />
    </div>
  );
}

function BottomNavBar() {
  return (
    <div className="absolute bg-[#fcf9f4] bottom-[0.5px] h-[97.5px] left-[-1px] rounded-tl-[24px] rounded-tr-[24px] w-[390px]" data-name="BottomNavBar">
      <div aria-hidden="true" className="absolute border-[rgba(229,226,221,0.15)] border-solid border-t inset-0 pointer-events-none rounded-tl-[24px] rounded-tr-[24px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] bottom-0 left-0 shadow-[0px_-8px_24px_-2px_rgba(28,28,25,0.06)] top-0 w-[390px]" data-name="BottomNavBar:shadow" />
      <Link />
      <Link1 />
      <Link2 />
      <Link3 />
    </div>
  );
}

export default function VaultDocumentUpload() {
  return (
    <div className="bg-[#fcf9f4] content-stretch flex flex-col items-start pb-[128px] relative size-full" data-name="Vault (Document Upload)">
      <Main />
      <BottomNavBar />
    </div>
  );
}