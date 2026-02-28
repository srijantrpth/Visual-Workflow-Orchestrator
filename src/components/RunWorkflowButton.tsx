import React from 'react'
import { useWorkflowStore } from '@/store/useWorkflowStore'

export default function RunWorkflowButton(){
    const nodes = useWorkflowStore((state) => state.nodes)
    const edges = useWorkflowStore((state) => state.edges)
    const runWorkflow = () => {
        const startingNodes = nodes.filter((node) => !edges.some((edge) => edge.target === node.id))
        if (startingNodes.length === 0) {
            console.log(`Empty Canvas or Infinite Loops`);


        }
        let currentNode = startingNodes[0]
        let stepCounter = 1;
        while (currentNode) {
            console.log(`Step ${stepCounter}: Executing node ${currentNode.id} of type ${currentNode.type}`);
            const outgoingEdge = edges.find((edge) => edge.source === currentNode.id)
            if (outgoingEdge) {
                const nextNode = nodes.find((node) => node.id === outgoingEdge.target);
                currentNode = nextNode || null;
                stepCounter++;
            }
            else {
                currentNode = null;
            }
        }}
        return (
            <div className="absolute top-4 right-4 z-10">

                <button onClick={runWorkflow}
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Run Workflow</button>
            </div>)
    }


