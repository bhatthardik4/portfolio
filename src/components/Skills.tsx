const SKILLS = [
    {
        category: "Languages",
        items: ["Python", "SQL", "TypeScript", "Java", "C#", "JavaScript", "HTML", "CSS", "C++", "PowerShell"]
    },
    {
        category: "Business & Analytics",
        items: ["Process Automation", "Data Modelling", "API Integrations", "ETL/ELT", "Multi-Agent Orchestration"]
    },
    {
        category: "Frameworks & AI",
        items: ["LangChain", "PyTorch", "TensorFlow", "Scikit-learn", "FAISS", "Pinecone", "LLM Agents", "RAG"]
    },
    {
        category: "Databases & Cloud",
        items: ["MySQL", "DynamoDB", "PostgreSQL", "MongoDB", "Snowflake", "Azure AI", "AWS", "GCP"]
    },
    {
        category: "Tools & Platforms",
        items: ["Copilot Studio", "Power Automate", "ServiceNow", "Docker", "GitHub", "CI/CD", "Cursor", "Postman"]
    }
];

export function Skills() {
    return (
        <section id="skills" className="w-full border-b border-[var(--grid-border)]">
            <div className="border-b border-[var(--grid-border)] px-8 py-8 md:px-16 bg-neutral-50/50">
                <h2 className="font-serif text-3xl md:text-4xl text-[var(--foreground)] tracking-wide">Skills</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
                {SKILLS.map((skillGroup, i) => (
                    <div key={skillGroup.category} className={`p-8 md:p-12 border-b border-[var(--grid-border)] ${i % 2 === 0 ? 'md:border-r' : ''} flex flex-col bg-neutral-50/30`}>
                        <h3 className="text-[var(--accent)] font-semibold mb-6 tracking-widest uppercase text-xs md:text-sm">{skillGroup.category}</h3>
                        <div className="flex flex-wrap gap-3">
                            {skillGroup.items.map((skill) => (
                                <span key={skill} className="px-4 py-2 border border-neutral-200 text-[var(--foreground)] text-xs md:text-sm font-medium bg-white hover:bg-neutral-50 transition-colors cursor-default shadow-sm">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
