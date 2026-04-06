import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY || "dummy-key-to-prevent-sdk-crash",
});

const SYSTEM_PROMPT = `You are Hardik's AI twin. You have a witty, confident, and slightly tech-savvy personality.
For example, you might say: "I'm Hardik's AI twin. He's busy building agents, but I can tell you all about his work!"

Here is the data about Hardik to base your answers on:
Name: Hardik Girish Bhatt
Location: Jersey City, NJ | bhatt.hardik4@gmail.com
Summary: AI & Automation Engineer with experience building enterprise-grade AI assistants, intelligent workflows, and system integrations using Microsoft Power Platform, Copilot Studio, Azure AI, and REST APIs. Strong background in Python, SQL.
Education: MS in Computer Science (Data Science) at Pace University (Dec 2025). BS in IT at Mumbai University.

Experience:
1. AI Automation Intern / Sales Commission Agent @ TEKSCAPE INC. (June 2025 - Oct 2025). Owned and maintained production integrations and workflow automations... Designed AI agents automating Sales Commission workflows, reducing manual effort by ~40%.
2. Automation Builder @ BHA (2024 - 2025). Developed and architected intelligent workflows to streamline internal operations. Integrated diverse API tools...
3. Data Quality & Operations Manager @ HUDL (Wyscout) (Sep 2017 - Dec 2023). Led a global data operation of 300+ Data Analysts... Improved SLA compliance by ~18%.

Projects:
- Sales Commission Agent
- SOW Agent
- Global Misinformation Tracker (GMT)

Skills:
- Python, SQL, TypeScript, JavaScript
- AI/Data: NLP, TensorFlow, LangChain, PyTorch, OpenAI, RAG, FAISS
- Cloud/Tools: AWS, Azure AI, GCP, Docker, GitHub, Power Automate

Keep responses concise, conversational, and direct the user to reach out directly if they have deep technical questions. Do not make up information not provided here.`;

export async function POST(req: Request) {
    try {
        const { messages } = await req.json();

        if (!process.env.OPENAI_API_KEY) {
            // Simulate network delay for realism
            await new Promise(resolve => setTimeout(resolve, 1000));
            const lastMsg = messages[messages.length - 1]?.content?.toLowerCase() || '';
            let mockResponse = "I'm currently running in a local demo mode without an OpenAI API key! Feel free to add one in your `.env.local` file to fully activate my brain. But rest assured, Hardik's automation engineering skills are top tier.";

            if (lastMsg.includes('summary') || lastMsg.includes('profile')) {
                mockResponse = "Hardik is an AI & Automation Engineer with deep expertise in designing intelligent workflows, agentic AI, and system integrations using Python, Azure AI, and Power Automate to eliminate manual bottlenecks.";
            } else if (lastMsg.includes('project') || lastMsg.includes('built')) {
                mockResponse = "One of the standout projects is the Sales Commission Agent. Hardik used Azure AI and Python to completely automate their manual Excel-based tracking, turning hour-long processes into instantaneous calculations!";
            } else if (lastMsg.includes('work') || lastMsg.includes('experience')) {
                mockResponse = "Hardik's experience spans from leading large-scale global operations at Hudl to designing production-grade AI agents at Tekscape, driving massive SLA and turnaround-time improvements.";
            }

            return NextResponse.json({ message: { role: "assistant", content: mockResponse } });
        }

        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                ...messages
            ],
            temperature: 0.8,
            max_tokens: 300,
        });

        return NextResponse.json({ message: response.choices[0].message });
    } catch (error) {
        console.error("OpenAI API Error:", error);
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
}
