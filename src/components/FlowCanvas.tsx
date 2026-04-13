"use client";
import { useCallback, useMemo, useEffect, useState } from 'react';
import {
    ReactFlow,
    MiniMap,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    addEdge,
    BackgroundVariant,
    ReactFlowProvider,
    useReactFlow
} from '@xyflow/react';
import { TriggerNode, SkillsNode, ExperienceNode, OutputNode, AboutNode, EducationNode, ProjectsNode } from './CustomNodes';
import { Chatbot } from './Chatbot';

const getNodes = (isMobile: boolean) => {
    if (isMobile) {
        return [
            { id: '1', type: 'trigger', position: { x: 50, y: 0 }, data: { target: null } },
            { id: '2', type: 'about', position: { x: 10, y: 200 }, data: { target: null } },
            { id: '3', type: 'experience', position: { x: 10, y: 600 }, data: { target: 'experience' } },
            { id: '4', type: 'education', position: { x: 30, y: 900 }, data: { target: 'education' } },
            { id: '5', type: 'skills', position: { x: -10, y: 1150 }, data: { target: 'skills' } },
            { id: '6', type: 'projects', position: { x: -10, y: 1550 }, data: { target: 'projects' } },
            { id: '7', type: 'contactNodeType', position: { x: 50, y: 1900 }, data: { target: 'contact' } },
        ];
    }
    return [
        { id: '1', type: 'trigger', position: { x: 350, y: 0 }, data: { target: null } },
        { id: '2', type: 'about', position: { x: 310, y: 220 }, data: { target: null } },
        { id: '3', type: 'experience', position: { x: 60, y: 700 }, data: { target: 'experience' } },
        { id: '4', type: 'education', position: { x: 580, y: 700 }, data: { target: 'education' } },
        { id: '5', type: 'skills', position: { x: 40, y: 1100 }, data: { target: 'skills' } },
        { id: '6', type: 'projects', position: { x: 540, y: 1100 }, data: { target: 'projects' } },
        { id: '7', type: 'contactNodeType', position: { x: 350, y: 1600 }, data: { target: 'contact' } },
    ];
};

const edgeStyle = {
    stroke: '#3b82f6',
    strokeWidth: 2,
};

const initialEdges = [
    { id: 'e1-2', source: '1', target: '2', type: 'smoothstep', animated: true, style: edgeStyle },
    { id: 'e2-3', source: '2', target: '3', type: 'smoothstep', animated: true, style: edgeStyle },
    { id: 'e2-4', source: '2', target: '4', type: 'smoothstep', animated: true, style: edgeStyle },
    { id: 'e3-5', source: '3', target: '5', type: 'smoothstep', animated: true, style: edgeStyle },
    { id: 'e4-6', source: '4', target: '6', type: 'smoothstep', animated: true, style: edgeStyle },
    { id: 'e5-7', source: '5', target: '7', type: 'smoothstep', animated: true, style: edgeStyle },
    { id: 'e6-7', source: '6', target: '7', type: 'smoothstep', animated: true, style: edgeStyle },
];

function FlowEngine() {
    const { fitView } = useReactFlow();
    const [nodes, setNodes, onNodesChange] = useNodesState(getNodes(false));
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const [isMobile, setIsMobile] = useState(false);

    // Initial boundary check + resize listener
    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile((prev) => {
                // Only reset the array completely if they literally swap from Phone to Desktop
                if (prev !== mobile) {
                    setNodes(getNodes(mobile));
                }
                return mobile;
            });
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [setNodes]);

    // Live Auto-Layout Engine for Phones based on dynamic text-wrapped heights!
    useEffect(() => {
        if (!isMobile) return;

        // Ensure all nodes actually know their rendered DOM heights first
        const allMeasured = nodes.every(n => ((n as any).measured?.height ?? (n as any).height));
        if (!allMeasured || nodes.length === 0) return;

        let currentY = 0;
        const padding = 100; // Perfect visual wire length
        const centerX = 200; // Central snapping axis
        let changed = false;

        const alignedNodes = nodes.map((n) => {
            const nodeHeight = (n as any).measured?.height ?? (n as any).height ?? 0;
            const nodeWidth = (n as any).measured?.width ?? (n as any).width ?? 300;

            const newY = currentY;
            const newX = centerX - (nodeWidth / 2);

            if (n.position.y !== newY || n.position.x !== newX) changed = true;

            currentY += nodeHeight + padding;

            return {
                ...n,
                position: { x: newX, y: newY }
            };
        });

        if (changed) {
            setNodes(alignedNodes);
            // Snap camera tracking to flawlessly encompass the re-arranged pipeline
            setTimeout(() => {
                fitView({ padding: 0.05, duration: 400 });
            }, 50);
        }
    }, [nodes, isMobile, setNodes, fitView]);

    const onConnect = useCallback((params: any) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

    const onNodeClick = useCallback((event: React.MouseEvent, node: any) => {
        const targetId = node.data?.target;
        if (targetId) {
            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }, []);

    const nodeTypes = useMemo(() => ({
        trigger: TriggerNode,
        about: AboutNode,
        experience: ExperienceNode,
        education: EducationNode,
        projects: ProjectsNode,
        skills: SkillsNode,
        contactNodeType: OutputNode,
    }), []);

    return (
        <div className="w-full h-full bg-[#FAFAFA] relative touch-pan-y [&_.react-flow__pane]:pointer-events-none">
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                onNodeClick={onNodeClick}
                nodeTypes={nodeTypes}
                fitView
                fitViewOptions={{ padding: 0.05, maxZoom: 1, minZoom: 0.5 }}
                colorMode="light"
                zoomOnScroll={false}
                zoomOnPinch={false}
                zoomOnDoubleClick={false}
                panOnScroll={false}
                panOnDrag={false}
                nodesDraggable={false}
                preventScrolling={false}
            >
                <Background variant={BackgroundVariant.Dots} gap={24} size={2} color="#E5E7EB" />
            </ReactFlow>
        </div>
    );
}

export default function FlowCanvas() {
    return (
        <ReactFlowProvider>
            <FlowEngine />
        </ReactFlowProvider>
    );
}
