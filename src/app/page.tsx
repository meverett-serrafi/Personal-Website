import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 pt-16">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
