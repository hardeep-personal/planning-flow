import React, { useCallback } from 'react'
import ReactFlow, {
    MiniMap,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    addEdge,
} from 'reactflow';

import 'reactflow/dist/style.css';

const initialNodes = [
    {
        id: "1",
        sourcePosition: 'right',
        data: { label: "Node 1" },
        position: { x: 0, y: 0 },

    },
    {
        id: "2",
        sourcePosition: 'right',
        targetPosition: 'left',
        data: { label: "Research" },
        position: { x: 300, y: -300 },
    },
   

    {
        id: "3",
        sourcePosition: 'right',
        targetPosition: 'left',
        data: { label: "Planning" },
        position: { x: 300, y: -150 }
    },
    {
        id: "4",
        sourcePosition: 'right',
        targetPosition: 'left',
        data: { label: "Designing" },
        position: { x: 300, y: -0 }
    },
    {
        id: "5",
        sourcePosition: 'right',
        targetPosition: 'left',
        data: { label: "Manufacturing" },
        position: { x: 300, y: 200 }
    },
    {
        id: "6",
        sourcePosition: 'right',
        targetPosition: 'left',
        data: { label: "Sales/Marketing" },
        position: { x: 300, y: 400 }
    },

    {
        id: "2-1",
        sourcePosition: 'right',
        targetPosition: 'left',
        data: { label: "External" },
        position: { x: 600, y: -450 },
    },
    {
        id: "2-2",
        sourcePosition: 'right',
        targetPosition: 'left',
        data: { label: "Internal" },
        position: { x: 600, y: -250 }
    },
    {
        id: "3-1",
        sourcePosition: 'right',
        targetPosition: 'left',
        data: { label: "PRD" },
        position: { x: 600, y: -200 },
    },
    {
        id: "3-2",
        sourcePosition: 'right',
        targetPosition: 'left',
        data: { label: "Specs" },
        position: { x: 600, y: -100 }
    },
    {
        id: "4-1",
        sourcePosition: 'right',
        targetPosition: 'left',
        data: { label: "Hardware" },
        position: { x: 600, y: -50 },
    },
    {
        id: "4-2",
        sourcePosition: 'right',
        targetPosition: 'left',
        data: { label: "Software" },
        position: { x: 600, y: 50 }
    },
    {
        id: "5-1",
        sourcePosition: 'right',
        targetPosition: 'left',
        data: { label: "Material" },
        position: { x: 600, y: 150 },
    },
    {
        id: "5-2",
        sourcePosition: 'right',
        targetPosition: 'left',
        data: { label: "Production" },
        position: { x: 600, y: 250 }
    },
    {
        id: "6-1",
        sourcePosition: 'right',
        targetPosition: 'left',
        data: { label: "Online" },
        position: { x: 600, y: 350 },
    },
    {
        id: "6-2",
        sourcePosition: 'right',
        targetPosition: 'left',
        data: { label: "DealerShip" },
        position: { x: 600, y: 450 }
    },
    {
        id: "2-1-1",
        sourcePosition: 'right',
        targetPosition: 'left',
        data: { label: "B2C" },
        position: { x: 1200, y: -600 }
    },
    {
        id: "2-1-2",
        sourcePosition: 'right',
        targetPosition: 'left',
        data: { label: "B2C" },
        position: { x: 1200, y: -300 }
    },
    {
        id: "2-1-1-1",
        sourcePosition: 'right',
        targetPosition: 'left',
        data: { label: "online" },
        position: { x: 1500, y: -100 }
    },
    {
        id: "2-1-1-2",
        sourcePosition: 'right',
        targetPosition: 'left',
        data: { label: "interview" },
        position: { x: 1500, y: -300 }
    },
    {
        id: "2-1-1-3",
        sourcePosition: 'right',
        targetPosition: 'left',
        data: { label: "Public data" },
        position: { x: 1500, y: -500 }
    },
    {
        id: "2-1-1-4",
        sourcePosition: 'right',
        targetPosition: 'left',
        data: { label: "Health" },
        position: { x: 1500, y: -700 }
    },
   
]

const initialEdges = [
    { id: 'e1-2', source: '1', target: '2' },
    { id: 'e1-3', source: '1', target: '3' },
    { id: 'e1-4', source: '1', target: '4' },
    { id: 'e1-5', source: '1', target: '5' },
    { id: 'e1-6', source: '1', target: '6' },
    { id: 'e2-2-1', source: '2', target: '2-1' },
    { id: 'e2-2-2', source: '2', target: '2-2' },
    { id: 'e2-3-1', source: '3', target: '3-1' },
    { id: 'e2-3-2', source: '3', target: '3-2' },
    { id: 'e2-4-1', source: '4', target: '4-1' },
    { id: 'e2-4-2', source: '4', target: '4-2' },
    { id: 'e2-5-1', source: '5', target: '5-1' },
    { id: 'e2-5-2', source: '5', target: '5-2' },
    { id: 'e2-6-1', source: '6', target: '6-1' },
    { id: 'e2-6-2', source: '6', target: '6-2' },
    { id: 'e2-2-1-1', source: '2-1', target: '2-1-1' },
    { id: 'e2-2-1-2', source: '2-1', target: '2-1-2' },
    { id: 'e2-2-1-1-1', source: '2-1-1', target: '2-1-1-1' },
    { id: 'e2-2-1-1-2', source: '2-1-1', target: '2-1-1-2' },
    { id: 'e2-2-1-1-3', source: '2-1-1', target: '2-1-1-3' },
    { id: 'e2-2-1-1-4', source: '2-1-1', target: '2-1-1-4' },




];



const Flow = () => {

    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = useCallback(
        (params) => setEdges((eds) => addEdge(params, eds)),
        [setEdges],
    );




    return (
        <div>
            <div style={{ width: '100vw', height: '100vh' }}>
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                >
                    <Controls />
                    <MiniMap />
                    <Background variant="dots" gap={12} size={1} />
                </ReactFlow>
            </div>
        </div>
    )
}

export default Flow