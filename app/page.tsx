import { ProjectsContextProvider } from "@/app/contexts/projects-context";

import {
  Header,
  Main,
  ProjectNav,
  Socials,
  CursorGradient,
  BlurWrapper,
} from "@/app/components";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row justify-center items-center pt-12 pb-4 px-3 md:p-6">
      <CursorGradient />
      <ProjectsContextProvider>
        <BlurWrapper className="relative flex-grow flex flex-col max-w-xl md:max-w-6xl md:flex-row md:justify-between md:gap-4 md:min-h-[540px]">
          <div className="flex-grow md:flex-grow-0 md:w-7/12">
            <Header />
            <Main />
          </div>
          <div className="hidden md:block w-4/12 self-end">
            <ProjectNav />
          </div>
          <div className="absolute right-0 -top-8 md:top-0">
            <Socials />
          </div>
          <div className="flex justify-center md:hidden">
            <Socials />
          </div>
        </BlurWrapper>
      </ProjectsContextProvider>
    </div>
  );
}
