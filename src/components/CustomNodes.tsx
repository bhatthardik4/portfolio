"use client";
import { Handle, Position } from "@xyflow/react";
import { Globe, Link, Briefcase, Code2, Rocket, CloudLightning, MessageSquare, Zap, Cpu, Database, GraduationCap, FolderGit2 } from "lucide-react";

// Reusable Node Shell - LIGHT MODE with cursor-pointer
const NodeShell = ({ title, icon: Icon, status, glowing = false, children, width = "w-[380px]" }: any) => (
    <div className={`${width} max-w-[85vw] sm:max-w-none rounded-xl border bg-white/95 backdrop-blur-xl overflow-hidden relative shadow-lg transition-all hover:border-blue-300 hover:shadow-xl hover:-translate-y-0.5 cursor-pointer ${glowing ? 'border-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.15)]' : 'border-neutral-200'}`}>
        <div className={`px-4 py-3 border-b flex justify-between items-center ${glowing ? 'border-blue-100 bg-blue-50/50' : 'border-neutral-200 bg-neutral-50/50'}`}>
            <div className="flex items-center gap-2">
                <Icon className={`w-4 h-4 ${glowing ? 'text-blue-500' : 'text-neutral-500'}`} />
                <span className="font-mono text-xs font-semibold text-neutral-700 tracking-wider">
                    {title}
                </span>
            </div>
            <div className="flex items-center gap-1.5 bg-white px-2 py-1 rounded border border-neutral-200 shadow-sm">
                <div className={`w-1.5 h-1.5 rounded-full ${status === 'Active' ? 'bg-green-500' : (status === 'Trigger' ? 'bg-blue-500' : 'bg-neutral-400')} ${status !== 'Inactive' ? 'animate-pulse' : ''}`} />
                <span className="text-[9px] text-neutral-500 font-mono uppercase">{status}</span>
            </div>
        </div>
        <div className="p-5 font-sans nodrag text-neutral-600">
            {children}
        </div>
    </div>
);

// Global Handle styling
const HandleTop = () => <Handle type="target" position={Position.Top} className="!w-3 !h-3 !bg-blue-500 !border-2 !border-white" />;
const HandleBottom = () => <Handle type="source" position={Position.Bottom} className="!w-3 !h-3 !bg-blue-500 !border-2 !border-white" />;

export const TriggerNode = () => (
    <>
        <NodeShell title="Webhook Trigger" icon={Zap} status="Trigger" glowing={true} width="w-[300px]">
            <div className="text-center font-mono">
                <div className="text-xs text-neutral-500 mb-1">EVENT</div>
                <div className="text-sm text-blue-600 font-semibold mb-3">ON_SITE_VISIT</div>
                <div className="text-[10px] text-neutral-600 border border-neutral-200 bg-neutral-50 py-1 px-2 rounded">
                    Last Execution: NOW
                </div>
            </div>
        </NodeShell>
        <HandleBottom />
    </>
);

export const AboutNode = () => (
    <>
        <HandleTop />
        <NodeShell title="Action Node // ABOUT_ME" icon={Cpu} status="Active" width="w-[380px]">
            <div className="flex items-start gap-4 mb-4 pb-4 border-b border-neutral-100">
                <div className="w-12 h-12 bg-blue-600 flex items-center justify-center font-serif text-white text-xl flex-shrink-0">
                    HB
                </div>
                <div>
                    <h2 className="text-xl font-serif text-neutral-900 leading-tight mb-1">Hardik Bhatt</h2>
                    <p className="text-blue-600 font-mono text-xs uppercase tracking-wider">AI & Automation Engineer</p>
                </div>
            </div>
            <p className="text-xs italic leading-relaxed text-neutral-500 mb-3 font-serif">
                &quot;My journey from operations &rarr; data &rarr; AI automation shaped how I build systems: practical, scalable, and business-focused.&quot;
            </p>
            <p className="text-xs leading-relaxed text-neutral-500 mb-4">
                I design and deploy AI agents that automate business workflows, reduce manual operations, and scale decision-making across teams.
            </p>
            <div className="flex gap-4 text-xs font-mono">
                <div className="flex items-center gap-1.5 text-neutral-600 hover:text-blue-600 transition-colors"><Code2 className="w-3.5 h-3.5" /> GitHub</div>
                <div className="flex items-center gap-1.5 text-neutral-600 hover:text-blue-600 transition-colors"><Link className="w-3.5 h-3.5" /> LinkedIn</div>
            </div>
        </NodeShell>
        <HandleBottom />
    </>
);

export const ExperienceNode = () => (
    <>
        <HandleTop />
        <NodeShell title="Action Node // WORK_EXPERIENCE" icon={Briefcase} status="Active" width="w-[380px]">
            <div className="space-y-4">
                <div>
                    <div className="flex justify-between items-start mb-1">
                        <h3 className="text-sm font-semibold text-neutral-800">Tekscape - AI Automation Intern</h3>
                        <span className="text-[10px] font-mono text-neutral-400">2025</span>
                    </div>
                    <p className="text-[11px] text-neutral-500 leading-relaxed font-mono">
                        &gt; Reduced manual effort by ~40%<br />
                        &gt; Improved turnaround time by ~20%<br />
                        &gt; Built agentic workflows using Azure AI
                    </p>
                </div>
                <div className="pt-3 border-t border-neutral-100">
                    <div className="flex justify-between items-start mb-1">
                        <h3 className="text-sm font-semibold text-neutral-800">Hudl - Data Quality & Ops Mgr</h3>
                        <span className="text-[10px] font-mono text-neutral-400">2017-2023</span>
                    </div>
                    <p className="text-[11px] text-neutral-500 leading-relaxed font-mono">
                        &gt; Managed 300+ Data Analysts globally<br />
                        &gt; Improved SLA compliance by ~18%<br />
                        &gt; Built SQL dashboards & Python ETLs
                    </p>
                </div>
            </div>
        </NodeShell>
        <HandleBottom />
    </>
);

export const EducationNode = () => (
    <>
        <HandleTop />
        <NodeShell title="Action Node // EDUCATION" icon={GraduationCap} status="Active" width="w-[340px]">
            <div className="space-y-4">
                <div>
                    <div className="flex justify-between items-start mb-1">
                        <h3 className="text-sm font-semibold text-neutral-800">MS Computer Science</h3>
                        <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">Dec 2025</span>
                    </div>
                    <p className="text-[11px] text-neutral-500 leading-relaxed font-mono">Pace University, NY • GPA: 3.78/4</p>
                </div>
                <div className="pt-3 border-t border-neutral-100">
                    <div className="flex justify-between items-start mb-1">
                        <h3 className="text-sm font-semibold text-neutral-800">BS Information Tech.</h3>
                        <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">Aug 2022</span>
                    </div>
                    <p className="text-[11px] text-neutral-500 leading-relaxed font-mono">Mumbai University • GPA: 8.72/10</p>
                </div>
            </div>
        </NodeShell>
        <HandleBottom />
    </>
);

export const ProjectsNode = () => (
    <>
        <HandleTop />
        <NodeShell title="Action Node // DEPLOYED_SYSTEMS" icon={FolderGit2} status="Active" width="w-[420px]">
            <div className="space-y-4">
                <div>
                    <h3 className="text-sm font-bold text-blue-600 mb-3 border-b border-blue-100 pb-2">Sales Commission Agent</h3>

                    <div className="space-y-3">
                        <div>
                            <p className="text-[10px] font-mono font-semibold text-neutral-400 uppercase tracking-wide mb-0.5">Problem:</p>
                            <p className="text-xs text-neutral-700 leading-snug">Sales team relied on manual Excel-based commission tracking.</p>
                        </div>

                        <div>
                            <p className="text-[10px] font-mono font-semibold text-neutral-400 uppercase tracking-wide mb-0.5">Solution:</p>
                            <p className="text-xs text-neutral-700 leading-snug">Built AI-powered agent integrated with ConnectWise + QBO.</p>
                        </div>

                        <div>
                            <p className="text-[10px] font-mono font-semibold text-neutral-400 uppercase tracking-wide mb-0.5">Impact:</p>
                            <p className="text-xs text-neutral-700 leading-snug">&bull; Reduced calculation time from hours &rarr; seconds.<br />&bull; Improved transparency for multiple reps.</p>
                        </div>

                        <div>
                            <p className="text-[10px] font-mono font-semibold text-neutral-400 uppercase tracking-wide mb-0.5">Stack:</p>
                            <p className="text-[11px] font-mono text-blue-600 leading-snug">Azure AI, Python, SQL, Power Automate, Copilot Studio</p>
                        </div>
                    </div>
                </div>
            </div>
        </NodeShell>
        <HandleBottom />
    </>
);

export const SkillsNode = () => (
    <>
        <HandleTop />
        <NodeShell title="Action Node // SKILLS_DATA" icon={Code2} status="Active" width="w-[420px]">
            <div className="space-y-3">
                <div className="p-3 bg-neutral-50 rounded border border-neutral-100">
                    <p className="text-[10px] font-mono font-semibold text-neutral-400 uppercase tracking-wide mb-1">Languages</p>
                    <p className="text-xs text-neutral-700 font-mono">Python, SQL, TypeScript, Java</p>
                </div>
                <div className="p-3 bg-neutral-50 rounded border border-neutral-100">
                    <p className="text-[10px] font-mono font-semibold text-neutral-400 uppercase tracking-wide mb-1">Frameworks & AI</p>
                    <p className="text-xs text-neutral-700 font-mono">LangChain, PyTorch, RAG, LLM Agents</p>
                </div>
                <div className="p-3 bg-neutral-50 rounded border border-neutral-100">
                    <p className="text-[10px] font-mono font-semibold text-neutral-400 uppercase tracking-wide mb-1">Tools & Platforms</p>
                    <p className="text-xs text-neutral-700 font-mono">Copilot Studio, Power Automate, Docker, Azure AI</p>
                </div>
                <div className="p-3 bg-neutral-50 rounded border border-neutral-100">
                    <p className="text-[10px] font-mono font-semibold text-neutral-400 uppercase tracking-wide mb-1">Cloud & Databases</p>
                    <p className="text-xs text-neutral-700 font-mono">Snowflake, PostgreSQL, AWS, GCP</p>
                </div>
            </div>
        </NodeShell>
        <HandleBottom />
    </>
);

export const OutputNode = () => (
    <>
        <HandleTop />
        <NodeShell title="End Flow // CONTACT_ME" icon={Rocket} status="Ready" width="w-[300px]">
            <div className="text-center">
                <p className="text-xs text-neutral-500 mb-4">Pipeline execution complete. Need help building something intelligent?</p>
                <div className="inline-block w-full py-2.5 bg-blue-600 hover:bg-blue-700 transition-colors text-white text-xs font-semibold rounded uppercase tracking-wider shadow shadow-blue-500/30 text-center">
                    Execute Contact Flow
                </div>
            </div>
        </NodeShell>
    </>
);
