import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
    {
        title: "Sales Commission Agent",
        description: (
            <div className="space-y-3 mt-4 text-sm md:text-base text-[var(--muted)] font-normal leading-relaxed">
                <div>
                    <strong className="text-[var(--foreground)] uppercase tracking-wide text-xs">Problem:</strong><br />
                    Sales team relied on manual Excel-based commission tracking.
                </div>
                <div>
                    <strong className="text-[var(--foreground)] uppercase tracking-wide text-xs">Solution:</strong><br />
                    Built AI-powered agent integrated with ConnectWise + QBO.
                </div>
                <div>
                    <strong className="text-[var(--foreground)] uppercase tracking-wide text-xs">Impact:</strong><br />
                    • Reduced calculation time from hours &rarr; seconds.<br />
                    • Improved transparency for multiple reps.
                </div>
            </div>
        ),
        tags: ["Azure AI", "Power Automate", "Python", "SQL", "Copilot Studio"],
    },
    {
        title: "SOW Agent",
        description: "A generative AI agent that seamlessly drafts, reviews, and refines Statements of Work (SOW) based on technical project requirements and historical enterprise data.",
        tags: ["OpenAI API", "LangChain", "RAG"],
    },
    {
        title: "Global Misinformation Tracker (GMT)",
        description: "Built Python-based ETL pipelines with embeddings, vector search, and LLM APIs for automated text analysis. Designed retrieval + reasoning workflows and dashboards to evaluate system accuracy. Demonstrated agentic automation patterns applicable to internal decision-support tools.",
        tags: ["Python", "ETL", "NLP", "LLM APIs", "Vector Search"]
    }
];

export function Projects() {
    return (
        <section id="projects" className="w-full border-b border-[var(--grid-border)]">
            <div className="border-b border-[var(--grid-border)] px-8 py-8 md:px-16 bg-neutral-50/50">
                <h2 className="font-serif text-3xl md:text-4xl text-[var(--foreground)] tracking-wide">What I&apos;ve built</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
                {PROJECTS.map((proj, i) => (
                    <div key={i} className={`p-8 md:p-12 border-b border-[var(--grid-border)] ${i % 2 === 0 ? 'md:border-r' : ''} group hover:bg-neutral-50/50 transition-colors flex flex-col justify-between min-h-[320px]`}>
                        <div>
                            <h3 className="font-serif text-2xl text-[var(--foreground)] flex items-center justify-between mb-4">
                                {proj.title}
                                <ArrowUpRight className="w-5 h-5 text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors" />
                            </h3>
                            {typeof proj.description === "string" ? (
                                <p className="text-[var(--muted)] mt-4 leading-relaxed font-normal text-sm md:text-base">
                                    {proj.description}
                                </p>
                            ) : (
                                proj.description
                            )}
                        </div>
                        <div className="flex flex-wrap gap-2 mt-8">
                            {proj.tags.map((tag) => (
                                <span key={tag} className="px-3 py-1 border border-neutral-200 text-[var(--muted)] text-[10px] md:text-xs font-semibold tracking-wider uppercase bg-white">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
