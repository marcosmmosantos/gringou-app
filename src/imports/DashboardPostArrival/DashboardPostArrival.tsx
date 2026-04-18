import svgPaths from "./svg-dggxrlohtb";
import imgUserProfile from "./d49878915d800a7f21bb4ba230c1ef0d50de907f.png";
import imgMapOfBurghQuayRegistrationOffice from "./d80e98240d9e180b6abd7302b822115968843bff.png";

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
    <div className="bg-[#e5e2dd] content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[9999px] shrink-0 size-[40px]" data-name="Background">
      <UserProfile />
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
    <div className="absolute backdrop-blur-[12px] bg-[rgba(250,247,242,0.8)] content-stretch flex h-[64px] items-center justify-between left-0 px-[24px] top-0 w-[390px]" data-name="Header - TopAppBar">
      <Container />
      <Button />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Extra_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0f5238] text-[30px] tracking-[-0.75px] w-full">
        <p className="leading-[37.5px] mb-0">Já chegou! Agora é hora</p>
        <p className="leading-[37.5px] mb-0">de cuidar do IRP</p>
        <p className="leading-[37.5px]">number.</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#404943] text-[18px] w-full">
        <p className="leading-[29.25px] mb-0">Relaxa, a gente te mostra como faz. O</p>
        <p className="leading-[29.25px] mb-0">processo é simples quando estamos</p>
        <p className="leading-[29.25px]">juntos.</p>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start pt-[15px] relative shrink-0 w-[342px]" data-name="Hero Section">
      <Heading />
      <Container3 />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.pc679c40} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#0f5238] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[56px]" data-name="Background">
      <div className="-translate-x-1/2 absolute bg-[rgba(255,255,255,0)] left-1/2 rounded-[9999px] shadow-[0px_0px_0px_4px_#b1f0ce,0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[56px] top-0" data-name="Overlay+Shadow" />
      <Container4 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f5238] text-[10px] tracking-[1px] uppercase w-[29.48px]">
        <p className="leading-[15px]">Prep</p>
      </div>
    </div>
  );
}

function Step1Active() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="Step 1: Active">
      <Background1 />
      <Container5 />
    </div>
  );
}

function Margin() {
  return (
    <div className="flex-[1_0_0] h-[4px] min-h-px min-w-px relative" data-name="Margin">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <div className="bg-[#b1f0ce] h-[4px] rounded-[9999px] shrink-0 w-full" data-name="Background" />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
        <g id="Container">
          <path d={svgPaths.pd0beb00} fill="var(--fill-0, #404943)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#e5e2dd] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[48px]" data-name="Background">
      <Container6 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#707973] text-[10px] tracking-[1px] uppercase w-[53.55px]">
        <p className="leading-[15px]">Booking</p>
      </div>
    </div>
  );
}

function Step() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="Step 2">
      <Background2 />
      <Container7 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="flex-[1_0_0] h-[4px] min-h-px min-w-px relative" data-name="Margin">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <div className="bg-[#e5e2dd] h-[4px] rounded-[9999px] shrink-0 w-full" data-name="Background" />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p1adba580} fill="var(--fill-0, #404943)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#e5e2dd] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[48px]" data-name="Background">
      <Container8 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#707973] text-[10px] tracking-[1px] uppercase w-[46.11px]">
        <p className="leading-[15px]">Attend</p>
      </div>
    </div>
  );
}

function Step1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="Step 3">
      <Background3 />
      <Container9 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="flex-[1_0_0] h-[4px] min-h-px min-w-px relative" data-name="Margin">
      <div className="content-stretch flex flex-col items-start px-[8px] relative size-full">
        <div className="bg-[#e5e2dd] h-[4px] rounded-[9999px] shrink-0 w-full" data-name="Background" />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[16px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
        <g id="Container">
          <path d={svgPaths.p13e73800} fill="var(--fill-0, #404943)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#e5e2dd] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[48px]" data-name="Background">
      <Container10 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#707973] text-[10px] tracking-[1px] uppercase w-[53.2px]">
        <p className="leading-[15px]">Collect</p>
      </div>
    </div>
  );
}

function Step2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="Step 4">
      <Background4 />
      <Container11 />
    </div>
  );
}

function SectionRelaxaProgressStepper() {
  return (
    <div className="content-stretch flex items-center justify-between min-w-[340px] overflow-clip pl-[8px] pr-[7.99px] relative shrink-0 w-[342px]" data-name="Section - Relaxa Progress Stepper">
      <Step1Active />
      <Margin />
      <Step />
      <Margin1 />
      <Step1 />
      <Margin2 />
      <Step2 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Semi_Bold',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f5238] text-[20px] w-[249.06px]">
        <p className="leading-[28px]">Checklist de Documentos</p>
      </div>
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#ffdcc4] content-stretch flex flex-col items-start px-[12px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#783d01] text-[12px] tracking-[1.2px] uppercase w-[23.63px]">
        <p className="leading-[16px]">2/4</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Background5 />
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[16px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 16">
        <g id="Container">
          <path d={svgPaths.p378800} fill="var(--fill-0, #0F5238)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(177,240,206,0.3)] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]" data-name="Overlay">
      <Container15 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c19] text-[16px] w-[91px]">
        <p className="leading-[24px]">Passaporte</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#404943] text-[12px] w-[91.25px]">
        <p className="leading-[16px]">Original e válido</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[91.25px]" data-name="Container">
      <Container17 />
      <Container18 />
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative">
        <Overlay />
        <Container16 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p7b061c0} fill="var(--fill-0, #0F5238)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Passport() {
  return (
    <div className="bg-white col-1 h-[82px] justify-self-stretch relative rounded-[12px] row-1 shrink-0" data-name="Passport">
      <div aria-hidden="true" className="absolute border border-[rgba(191,201,193,0.15)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[21px] relative size-full">
          <Container14 />
          <Container19 />
        </div>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[18px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 18">
        <g id="Container">
          <path d={svgPaths.pb257040} fill="var(--fill-0, #0F5238)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[rgba(177,240,206,0.3)] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]" data-name="Overlay">
      <Container21 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c19] text-[16px] w-[82.8px]">
        <p className="leading-[24px]">TCD Letter</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#404943] text-[12px] w-[113.42px]">
        <p className="leading-[16px]">Proof of registration</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[113.42px]" data-name="Container">
      <Container23 />
      <Container24 />
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative">
        <Overlay1 />
        <Container22 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p7b061c0} fill="var(--fill-0, #0F5238)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function TcdLetter() {
  return (
    <div className="bg-white col-1 h-[82px] justify-self-stretch relative rounded-[12px] row-2 shrink-0" data-name="TCD Letter">
      <div aria-hidden="true" className="absolute border border-[rgba(191,201,193,0.15)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[21px] relative size-full">
          <Container20 />
          <Container25 />
        </div>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p2cccbbb0} fill="var(--fill-0, #8E4E14)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay2() {
  return (
    <div className="bg-[rgba(255,220,196,0.3)] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]" data-name="Overlay">
      <Container28 />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c19] text-[16px] w-[131.44px]">
        <p className="leading-[24px]">Health Insurance</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#8e4e14] text-[12px] tracking-[-0.6px] uppercase w-[122.53px]">
        <p className="leading-[16px]">Upload Obrigatório</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[131.44px]" data-name="Container">
      <Container30 />
      <Container31 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <Overlay2 />
      <Container29 />
    </div>
  );
}

function Container32() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Container">
          <path d={svgPaths.p3537f500} fill="var(--fill-0, #783D01)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#ffab69] content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative rounded-[12px] shrink-0" data-name="Button">
      <Container32 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#783d01] text-[14px] text-center tracking-[0.7px] uppercase w-[45.16px]">
        <p className="leading-[20px]">Subir</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <Container27 />
        <Button1 />
      </div>
    </div>
  );
}

function HealthInsuranceUploadRequired() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[12px] row-3 self-start shrink-0" data-name="Health Insurance (Upload Required)">
      <div aria-hidden="true" className="absolute border-2 border-[#ffab69] border-dashed inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex flex-col items-start p-[22px] relative w-full">
        <Container26 />
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[16px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 16">
        <g id="Container">
          <path d={svgPaths.p26835240} fill="var(--fill-0, #707973)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-[#e5e2dd] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]" data-name="Background">
      <Container34 />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c19] text-[16px] w-[102.66px]">
        <p className="leading-[24px]">Proof of Fees</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#404943] text-[12px] w-[125.95px]">
        <p className="leading-[16px]">€300 payment receipt</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[125.95px]" data-name="Container">
      <Container36 />
      <Container37 />
    </div>
  );
}

function Container33() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative">
        <Background6 />
        <Container35 />
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p1ad7ee00} fill="var(--fill-0, #BFC9C1)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function ProofOfFees() {
  return (
    <div className="bg-[#f6f3ee] col-1 h-[82px] justify-self-stretch opacity-75 relative rounded-[12px] row-4 shrink-0" data-name="Proof of Fees">
      <div aria-hidden="true" className="absolute border border-[rgba(191,201,193,0.15)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[21px] relative size-full">
          <Container33 />
          <Container38 />
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[____82px_82px_88px_82px] relative shrink-0 w-full" data-name="Container">
      <Passport />
      <TcdLetter />
      <HealthInsuranceUploadRequired />
      <ProofOfFees />
    </div>
  );
}

function SectionDocumentChecklistBentoCardStyle() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[342px]" data-name="Section - Document Checklist - Bento Card Style">
      <Container12 />
      <Container13 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0f5238] text-[20px] w-full">
        <p className="leading-[28px]">Onde ir: Burgh Quay</p>
      </div>
    </div>
  );
}

function MapOfBurghQuayRegistrationOffice() {
  return (
    <div className="h-[184.38px] relative shrink-0 w-full" data-name="Map of Burgh Quay Registration Office">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[181.15%] left-0 max-w-none top-[-40.57%] w-full" src={imgMapOfBurghQuayRegistrationOffice} />
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f5238] text-[12px] tracking-[1.2px] uppercase w-[156.73px]">
        <p className="leading-[16px]">Registration Office</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c19] text-[14px] w-[142.06px]">
        <p className="leading-[20px]">Burgh Quay, Dublin 2</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[156.73px]" data-name="Container">
      <Container40 />
      <Container41 />
    </div>
  );
}

function Container42() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p3be96a00} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#0f5238] content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[8px] shrink-0" data-name="Button">
      <Container42 />
    </div>
  );
}

function BackgroundOverlayBlur() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(255,255,255,0.95)] bottom-[20px] left-[20px] right-[20px] rounded-[12px]" data-name="Background+OverlayBlur">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between p-[12px] relative w-full">
        <Container39 />
        <Button2 />
      </div>
    </div>
  );
}

function OverlayBorderShadow() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[16px] shrink-0 w-full" data-name="Overlay+Border+Shadow">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-[4px] relative rounded-[inherit] w-full">
        <MapOfBurghQuayRegistrationOffice />
        <BackgroundOverlayBlur />
      </div>
      <div aria-hidden="true" className="absolute border-4 border-solid border-white inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function SectionInsightsMapContext() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start pt-[8px] relative shrink-0 w-[342px]" data-name="Section - Insights & Map Context">
      <Heading2 />
      <OverlayBorderShadow />
    </div>
  );
}

function Main() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[40px] items-start left-1/2 pb-[48px] px-[24px] top-[64px]" data-name="Main">
      <HeroSection />
      <SectionRelaxaProgressStepper />
      <SectionDocumentChecklistBentoCardStyle />
      <SectionInsightsMapContext />
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[18px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 18">
        <g id="Container">
          <path d={svgPaths.p12a32500} fill="var(--fill-0, #4B4B44)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[#4b4b44] text-[11px] tracking-[0.275px] uppercase w-[34.41px]">
        <p className="leading-[16.5px]">Home</p>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[6px] relative shrink-0" data-name="Home">
      <Container43 />
      <Margin3 />
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[18px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18">
        <g id="Container">
          <path d={svgPaths.p14e1e40} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-white tracking-[0.275px] uppercase w-[64.44px]">
        <p className="leading-[16.5px]">Checklist</p>
      </div>
    </div>
  );
}

function ChecklistActive() {
  return (
    <div className="bg-[#2d6a4f] content-stretch flex flex-col items-center justify-center px-[16px] py-[6px] relative rounded-[16px] shrink-0" data-name="Checklist (Active)">
      <Container44 />
      <Margin4 />
    </div>
  );
}

function Container45() {
  return (
    <div className="h-[16px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 16">
        <g id="Container">
          <path d={svgPaths.p378800} fill="var(--fill-0, #4B4B44)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin5() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[#4b4b44] text-[11px] tracking-[0.275px] uppercase w-[54.3px]">
        <p className="leading-[16.5px]">Journal</p>
      </div>
    </div>
  );
}

function Journal() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[6px] relative shrink-0" data-name="Journal">
      <Container45 />
      <Margin5 />
    </div>
  );
}

function Container46() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Container">
          <path d={svgPaths.p11c2d500} fill="var(--fill-0, #4B4B44)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin6() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[17px] justify-center leading-[0] not-italic relative shrink-0 text-[#4b4b44] text-[11px] tracking-[0.275px] uppercase w-[64.02px]">
        <p className="leading-[16.5px]">Assistant</p>
      </div>
    </div>
  );
}

function Assistant() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[6px] relative shrink-0" data-name="Assistant">
      <Container46 />
      <Margin6 />
    </div>
  );
}

function BottomNavBar() {
  return (
    <div className="absolute bg-[#fcf9f4] content-stretch flex gap-[3.2px] h-[80px] items-center left-0 pl-[17.59px] pr-[17.64px] rounded-tl-[24px] rounded-tr-[24px] shadow-[0px_-4px_24px_0px_rgba(0,0,0,0.04)] top-[1460.38px] w-[390px]" data-name="BottomNavBar">
      <Home />
      <ChecklistActive />
      <Journal />
      <Assistant />
    </div>
  );
}

function Container47() {
  return (
    <div className="h-[25px] relative shrink-0 w-[18.75px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.75 25">
        <g id="Container">
          <path d={svgPaths.pef7800} fill="var(--fill-0, #783D01)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background7() {
  return (
    <div className="bg-[#ffab69] relative rounded-[9999px] shrink-0 size-[64px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container47 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#783d01] text-[18px] w-full">
        <p className="leading-[28px]">Dica de Amigo</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2.875px] items-start relative">
        <Heading3 />
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[137px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(120,61,1,0.8)] w-[175.69px]">
          <p className="leading-[22.75px]">Chegue 15 minutos antes. Eles são bem pontuais e a fila costuma ser organizada por horário de agendamento.</p>
        </div>
      </div>
    </div>
  );
}

function SectionFriendshipTip() {
  return (
    <div className="-translate-x-1/2 absolute bg-[rgba(255,171,105,0.2)] content-stretch flex gap-[24px] items-center left-1/2 p-[33px] rounded-[24px] top-[1201px] w-[342px]" data-name="Section - Friendship Tip">
      <div aria-hidden="true" className="absolute border border-[rgba(255,171,105,0.1)] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Background7 />
      <Container48 />
    </div>
  );
}

export default function DashboardPostArrival() {
  return (
    <div className="bg-[#fcf9f4] relative size-full" data-name="Dashboard post-arrival">
      <HeaderTopAppBar />
      <Main />
      <BottomNavBar />
      <SectionFriendshipTip />
    </div>
  );
}