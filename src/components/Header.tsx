import Link from "next/link";

export function Header() {
    return (
        <header className="sticky top-0 z-40 bg-[var(--background)]/90 backdrop-blur-md border-b border-[var(--grid-border)] w-full">
            <div className="flex items-center justify-between px-6 md:px-12 h-16">
                <Link href="/" className="font-serif text-2xl tracking-wide flex items-baseline text-[var(--foreground)]">
                    Hardik<span className="font-sans text-[var(--accent)] font-semibold ml-1.5 text-xl tracking-normal">Bhatt</span>
                </Link>

                <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[var(--muted)]">
                    <Link href="#skills" className="hover:text-[var(--accent)] transition-colors">Skills</Link>
                    <Link href="#experience" className="hover:text-[var(--accent)] transition-colors">Experience</Link>
                    <Link href="#education" className="hover:text-[var(--accent)] transition-colors">Education</Link>
                    <Link href="#projects" className="hover:text-[var(--accent)] transition-colors">What I&apos;ve built</Link>
                    <Link href="#contact" className="hover:text-[var(--accent)] transition-colors">Contact</Link>
                    <div className="flex items-center gap-2 ml-4 px-3 py-1.5 rounded-full border border-green-200 bg-green-50 text-xs text-green-700 font-semibold shadow-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        Available
                    </div>
                </nav>
            </div>
        </header>
    );
}
