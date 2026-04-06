import { ArrowRight, Download } from "lucide-react";

export function Hero() {
    return (
        <section className="border-b border-[var(--grid-border)] w-full flex flex-col justify-center min-h-[70vh] px-8 md:px-16 pt-24 pb-16 relative bg-gradient-to-b from-white to-[#FAFAFA]">
            <h1 className="font-serif text-7xl md:text-9xl tracking-tight text-[var(--foreground)] mb-4 max-w-4xl leading-[1]">
                Hardik Bhatt
            </h1>
            <h2 className="text-2xl md:text-3xl font-light text-[var(--accent)] tracking-wide mb-6">
                AI & Automation Engineer
            </h2>
            <p className="max-w-3xl text-lg md:text-xl text-[var(--muted)] mt-4 leading-relaxed font-sans font-light">
                I have experience building enterprise-grade AI assistants, intelligent workflows, and system integrations using Microsoft Power Platform, Copilot Studio, Azure AI, and REST APIs. Strong background in Python, SQL, and cloud-native DevOps with hands-on experience integrating LLMs, RAG pipelines, and AI copilots into production business systems.
            </p>

            <div className="mt-14 flex flex-wrap gap-4 items-center">
                <a href="/resume.txt" download className="inline-flex items-center gap-2 bg-[var(--accent)] text-white px-8 py-4 font-medium hover:bg-blue-800 transition-colors text-xs uppercase tracking-widest shadow-sm">
                    Download Resume <Download className="w-4 h-4 ml-1" />
                </a>
                <a href="#contact" className="inline-flex items-center gap-2 text-[var(--foreground)] border border-[var(--grid-border)] bg-white px-8 py-4 font-medium hover:bg-neutral-50 transition-colors text-xs uppercase tracking-widest shadow-sm">
                    Get in touch <ArrowRight className="w-4 h-4 ml-1" />
                </a>
                <div className="flex gap-6 md:ml-6 mt-4 md:mt-0 text-sm uppercase tracking-widest font-medium">
                    <a href="https://github.com/bhatthardik4" target="_blank" rel="noreferrer" className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-[var(--accent)] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left pb-1">
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/hardik-bhatt-8704bb21/" target="_blank" rel="noreferrer" className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-[var(--accent)] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left pb-1">
                        LinkedIn
                    </a>
                </div>
            </div>
        </section>
    );
}
