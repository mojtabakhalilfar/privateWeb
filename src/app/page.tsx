import Aboutme from "@/pages/Aboutme";
import Contactme from "@/pages/Contactme";
import FirstPage from "@/pages/FirstPage";
import Portfolio from "@/pages/Portfolio";
import Skills from "@/pages/Skills";

export default function Home() {
  return (
    <div>
      <FirstPage />
      <Aboutme />
      <Skills />
      <Portfolio />
      <Contactme />
    </div>

  );
}


// h-[calc(100vh_-_66px)]