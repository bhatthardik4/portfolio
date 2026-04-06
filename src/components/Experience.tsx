const EXPERIENCES = [
    {
        company: "TEKSCAPE INC.",
        role: "AI Automation Intern",
        duration: "June 2025 \u2014 Oct 2025",
        description: [
            "Owned and maintained production integrations and workflow automations across Sales, HR, and Operations systems using Python, Power Automate, SharePoint, SQL Server, Azure AI services, REST APIs, and SQL reducing manual effort by ~40% and improving turnaround time by ~20%.",
            "Designed, built, and deployed AI agents and copilots using LLM APIs, RAG pipelines, and orchestration frameworks to automate workflows.",
            "Built Copilot AI agents integrating OpenAI APIs with enterprise data sources for context-aware responses & task automation.",
            "Implemented multi-step agent workflows combining retrieval, reasoning, and tool execution to complete tasks autonomously.",
            "Built adoption and impact dashboards tracking usage, accuracy, cycle time, and automation ROI."
        ],
    },
    {
        company: "HUDL (Wyscout)",
        role: "Data Quality & Operations Manager",
        duration: "Sep 2017 \u2014 Dec 2023",
        description: [
            "Led a large-scale global data operation of 11 Team Leads, 9 QA Specialists, and 300+ Data Analysts, delivering high-accuracy events and tagging data over 600 major international leagues.",
            "Improved SLA compliance by ~18% through workflow redesign, shift optimization, and predictive scheduling for high-volume match weeks.",
            "Built and maintained SQL-based dashboards tracking analyst throughput, TAT, error categories, and quality KPIs.",
            "Used Python for exploratory data analysis (EDA) on production datasets to identify tagging bottlenecks, outliers, and team-level performance trends.",
            "Integrated internal performance APIs into reporting workflows to automatically pull analyst statistics, match metadata, and quality scores."
        ],
    },
    {
        company: "JUST ENGINEERS",
        role: "IT Workspace Administrator",
        duration: "Jun 2014 \u2014 Jul 2017",
        description: [
            "Troubleshooted network hardware & software issues for employees, performing software installations & updating systems to maintain network security while managing system access & tracking hardware inventory."
        ]
    }
];

export function Experience() {
    return (
        <section id="experience" className="w-full border-b border-[var(--grid-border)]">
            <div className="border-b border-[var(--grid-border)] px-8 py-8 md:px-16 bg-neutral-50/50">
                <h2 className="font-serif text-3xl md:text-4xl text-[var(--foreground)] tracking-wide">Experience</h2>
            </div>
            <div className="flex flex-col">
                {EXPERIENCES.map((exp, i) => (
                    <div key={i} className="grid grid-cols-1 md:grid-cols-4 border-b border-[var(--grid-border)] last:border-b-0">
                        <div className="col-span-1 p-8 md:px-16 md:py-12 border-b md:border-b-0 md:border-r border-[var(--grid-border)] bg-neutral-50/30">
                            <span className="text-xs font-semibold text-[var(--muted)] tabular-nums tracking-widest uppercase">{exp.duration}</span>
                            <h3 className="font-serif text-2xl text-[var(--foreground)] mt-4">{exp.company}</h3>
                            <p className="text-[var(--accent)] text-xs font-semibold mt-2 uppercase tracking-wide">{exp.role}</p>
                        </div>
                        <div className="col-span-3 p-8 md:px-16 md:py-12 flex flex-col justify-center">
                            <div className="flex flex-col gap-3">
                                {Array.isArray(exp.description) ? (
                                    <ul className="text-[var(--muted)] leading-relaxed text-sm md:text-base space-y-4 font-normal">
                                        {exp.description.map((desc, j) => (
                                            <li key={j} className="flex gap-4">
                                                <div className="w-1.5 h-1.5 bg-[var(--muted)] rounded-full mt-2 flex-shrink-0 opacity-50" />
                                                <span>{desc}</span>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-[var(--muted)] leading-relaxed text-sm md:text-base font-normal">
                                        {exp.description}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
