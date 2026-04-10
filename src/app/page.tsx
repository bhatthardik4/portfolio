import FlowCanvas from "@/components/FlowCanvas";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Chatbot } from "@/components/Chatbot";

export default function Home() {
  return (
    <main className="flex flex-col w-full relative">
      <section className="w-full h-[2500px] md:h-[1900px] border-b border-[var(--grid-border)]">
        <FlowCanvas />
      </section>
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Contact />
      {/* <Chatbot /> */}
    </main>
  );
}
