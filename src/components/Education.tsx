const EDUCATIONS = [
    {
        school: "Pace University",
        degree: "MS in Computer Science (Data Science)",
        duration: "Dec 2025",
        location: "New York, NY",
        gpa: "3.78/4"
    },
    {
        school: "Mumbai University",
        degree: "Bachelor of Science (BS) in Information Technology",
        duration: "Aug 2022",
        location: "Mumbai, India",
        gpa: "8.72/10"
    }
];

export function Education() {
    return (
        <section id="education" className="w-full border-b border-[var(--grid-border)]">
            <div className="border-b border-[var(--grid-border)] px-8 py-8 md:px-16 bg-neutral-50/50">
                <h2 className="font-serif text-3xl md:text-4xl text-[var(--foreground)] tracking-wide">Education</h2>
            </div>
            <div className="flex flex-col">
                {EDUCATIONS.map((edu, i) => (
                    <div key={i} className="grid grid-cols-1 md:grid-cols-4 border-b border-[var(--grid-border)] last:border-b-0">
                        <div className="col-span-1 p-8 md:px-16 md:py-10 border-b md:border-b-0 md:border-r border-[var(--grid-border)] bg-neutral-50/30">
                            <span className="text-xs font-semibold text-[var(--muted)] tabular-nums tracking-widest uppercase">{edu.duration}</span>
                        </div>
                        <div className="col-span-3 p-8 md:px-16 md:py-10 flex flex-col justify-center">
                            <h3 className="font-serif text-2xl text-[var(--foreground)]">{edu.school}</h3>
                            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mt-2">
                                <p className="text-[var(--accent)] font-semibold text-xs tracking-wide uppercase">{edu.degree}</p>
                                <span className="hidden md:inline text-neutral-300">|</span>
                                <p className="text-[var(--muted)] font-semibold text-xs tracking-wide uppercase">GPA: {edu.gpa}</p>
                            </div>
                            <p className="text-[var(--muted)] text-sm mt-3">{edu.location}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
