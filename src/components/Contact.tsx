import { Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="w-full border-b border-[var(--grid-border)] bg-white">
            <div className="border-b border-[var(--grid-border)] px-8 py-8 md:px-16 bg-neutral-50/50">
                <h2 className="font-serif text-3xl md:text-4xl text-[var(--foreground)] tracking-wide">Contact</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 md:p-16 border-b md:border-b-0 md:border-r border-[var(--grid-border)] flex flex-col justify-center bg-neutral-50/30">
                    <h3 className="font-serif text-3xl md:text-5xl text-[var(--foreground)] mb-6 leading-tight">
                        Let&apos;s build<br />something <span className="text-[var(--accent)] italic font-light">intelligent</span>.
                    </h3>
                    <p className="text-[var(--muted)] font-normal leading-relaxed max-w-sm">
                        Whether you&apos;re hiring, collaborating on an AI / automation project, or just want to connect — I&apos;d love to hear from you.
                    </p>
                </div>
                <div className="p-8 md:p-16 flex flex-col justify-center font-normal space-y-8 bg-white">
                    <a href="mailto:bhatt.hardik4@gmail.com" className="group flex items-center gap-6 text-[var(--muted)] hover:text-[var(--accent)] transition-colors">
                        <div className="p-4 border border-[var(--grid-border)] bg-neutral-50 group-hover:border-blue-200 transition-colors shadow-sm">
                            <Mail className="w-5 h-5 text-[var(--accent)]" />
                        </div>
                        <span className="text-lg tracking-wide text-[var(--foreground)]">bhatt.hardik4@gmail.com</span>
                    </a>

                    <a href="tel:+18625888744" className="group flex items-center gap-6 text-[var(--muted)] hover:text-[var(--accent)] transition-colors">
                        <div className="p-4 border border-[var(--grid-border)] bg-neutral-50 group-hover:border-blue-200 transition-colors shadow-sm">
                            <Phone className="w-5 h-5 text-[var(--accent)]" />
                        </div>
                        <span className="text-lg tracking-wide text-[var(--foreground)]">+1 (862) 588-8744</span>
                    </a>

                    <a href="https://linkedin.com/in/hardik-bhatt-8704bb21" target="_blank" rel="noreferrer" className="group flex items-center gap-6 text-[var(--muted)] hover:text-[var(--accent)] transition-colors">
                        <div className="p-4 border border-[var(--grid-border)] bg-neutral-50 group-hover:border-blue-200 transition-colors shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[var(--accent)]"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        </div>
                        <span className="text-lg tracking-wide text-[var(--foreground)]">linkedin.com/in/hardik-bhatt</span>
                    </a>

                    <div className="group flex items-center gap-6 text-[var(--muted)]">
                        <div className="p-4 border border-[var(--grid-border)] bg-neutral-50 shadow-sm">
                            <MapPin className="w-5 h-5 text-[var(--muted)]" />
                        </div>
                        <span className="text-lg tracking-wide text-[var(--foreground)]">Jersey City, NJ 07306</span>
                    </div>
                </div>
            </div>

            <div className="border-t border-[var(--grid-border)] px-8 py-6 text-center text-xs text-[var(--muted)] uppercase tracking-widest bg-neutral-100">
                \u00A9 {new Date().getFullYear()} Hardik Bhatt. All rights reserved.
            </div>
        </section>
    );
}
