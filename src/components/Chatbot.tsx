"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, User } from "lucide-react";

type Message = { role: "user" | "assistant"; content: string };

export function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: "assistant", content: "Hey there! I'm Hardik's AI twin. He's busy building next-gen agents, but ask me anything about his experience, skills, or projects!" }
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSendText = async (text: string) => {
        if (!text.trim() || isLoading) return;

        const userMessage: Message = { role: "user", content: text.trim() };
        setMessages(prev => [...prev, userMessage]);
        setInput("");
        setIsLoading(true);

        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ messages: [...messages, userMessage].map(m => ({ role: m.role, content: m.content })) }),
            });

            const data = await res.json();
            if (data.message) {
                setMessages(prev => [...prev, { role: "assistant", content: data.message.content }]);
            } else if (data.error) {
                setMessages(prev => [...prev, { role: "assistant", content: `Error: ${data.error}` }]);
            }
        } catch (error) {
            console.error(error);
            setMessages(prev => [...prev, { role: "assistant", content: "Oops, my circuits got tangled. Try again later!" }]);
        } finally {
            setIsLoading(false);
        }
    };

    const sendMessage = async (e?: React.FormEvent) => {
        e?.preventDefault();
        handleSendText(input);
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className={`fixed bottom-6 right-6 md:right-12 p-4 bg-white border border-neutral-300 text-[var(--foreground)] hover:bg-neutral-50 transition-all z-50 shadow-xl ${isOpen ? "scale-0 opacity-0 pointer-events-none" : "scale-100 opacity-100"}`}
            >
                <div className="relative">
                    <MessageSquare className="w-5 h-5" />
                    <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
                    </span>
                </div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed bottom-6 right-6 md:right-12 w-[90vw] max-w-[400px] h-[550px] max-h-[80vh] bg-white border border-[var(--grid-border)] flex flex-col z-50 overflow-hidden shadow-2xl"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-4 border-b border-[var(--grid-border)] bg-neutral-50/80">
                            <div className="flex items-center gap-3">
                                <Bot className="w-5 h-5 text-[var(--accent)]" />
                                <span className="font-serif text-lg text-[var(--foreground)] tracking-wide">Hardik&apos;s AI</span>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-6 bg-white pb-2">
                            {messages.map((msg, i) => (
                                <div key={i} className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                                    <div className={`w-8 h-8 flex items-center justify-center shrink-0 border border-neutral-200 ${msg.role === "assistant" ? "bg-white text-[var(--accent)]" : "bg-neutral-100 text-[var(--muted)]"}`}>
                                        {msg.role === "assistant" ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                                    </div>
                                    <div className={`px-4 py-3 max-w-[85%] text-sm leading-relaxed border border-neutral-200 shadow-sm ${msg.role === "user"
                                        ? "bg-white text-[var(--foreground)] font-medium"
                                        : "bg-white text-[var(--muted)]"
                                        }`}>
                                        {msg.content}
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex gap-3">
                                    <div className="w-8 h-8 bg-white border border-neutral-200 text-[var(--accent)] flex items-center justify-center shrink-0">
                                        <Bot className="w-4 h-4" />
                                    </div>
                                    <div className="px-4 py-4 bg-white border border-neutral-200 shadow-sm flex items-center gap-1.5">
                                        <div className="w-1.5 h-1.5 bg-neutral-300 rounded-none animate-pulse [animation-delay:-0.3s]" />
                                        <div className="w-1.5 h-1.5 bg-neutral-300 rounded-none animate-pulse [animation-delay:-0.15s]" />
                                        <div className="w-1.5 h-1.5 bg-neutral-300 rounded-none animate-pulse" />
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Suggestions */}
                        {messages.length === 1 && !isLoading && (
                            <div className="px-4 pb-4 flex flex-wrap gap-2 bg-white">
                                <button
                                    onClick={() => handleSendText("Ask me about my work")}
                                    className="text-[10px] font-mono tracking-wide bg-neutral-50 border border-neutral-200 px-3 py-1.5 text-neutral-600 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-colors shadow-sm cursor-pointer"
                                    type="button"
                                >
                                    &rarr; Ask me about my work
                                </button>
                                <button
                                    onClick={() => handleSendText("Generate a summary of my profile")}
                                    className="text-[10px] font-mono tracking-wide bg-neutral-50 border border-neutral-200 px-3 py-1.5 text-neutral-600 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-colors shadow-sm cursor-pointer"
                                    type="button"
                                >
                                    &rarr; Generate a summary of my profile
                                </button>
                                <button
                                    onClick={() => handleSendText("Ask about my projects")}
                                    className="text-[10px] font-mono tracking-wide bg-neutral-50 border border-neutral-200 px-3 py-1.5 text-neutral-600 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-colors shadow-sm cursor-pointer"
                                    type="button"
                                >
                                    &rarr; Ask about my projects
                                </button>
                            </div>
                        )}

                        {/* Input */}
                        <div className="p-4 border-t border-[var(--grid-border)] bg-neutral-50/80">
                            <form onSubmit={sendMessage} className="flex gap-3">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Ask me anything..."
                                    className="flex-1 bg-white border border-neutral-200 shadow-sm px-4 py-3 text-sm text-[var(--foreground)] focus:outline-none focus:border-[var(--accent)] transition-colors placeholder:text-neutral-400 font-normal"
                                />
                                <button
                                    type="submit"
                                    disabled={!input.trim() || isLoading}
                                    className="w-12 flex items-center justify-center bg-[var(--foreground)] hover:bg-neutral-800 text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed border-none shadow-sm"
                                >
                                    <span className="sr-only">Send</span>
                                    <Send className="w-4 h-4" />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
