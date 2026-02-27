import { Background, ReactFlow, Controls } from "reactflow";
import { useWorkflowStore } from "../store/useWorkflowStore";
import "reactflow/dist/style.css";

const WorkflowCanvas = () => {
  const nodes = useWorkflowStore((state) => state.nodes) || []
   const edges = useWorkflowStore((state) => state.edges) || []
   const onNodesChange = useWorkflowStore((state) => state.onNodesChange)
   const onEdgesChange = useWorkflowStore((state) => state.onEdgesChange)
   const onConnect = useWorkflowStore((state) => state.onConnect)
   return (
    <div className="w-screen h-screen bg-slate-50">
 <ReactFlow
 nodes={nodes}
 edges={edges}
 onConnect={onConnect}
 onEdgesChange={onEdgesChange}
 onNodesChange={onNodesChange}
 fitView 
 >
 <Background/>
 <Controls/>
 </ReactFlow>
 
    </div>
   )
}

export default WorkflowCanvas