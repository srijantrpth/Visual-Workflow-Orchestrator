import { Background, ReactFlow, Controls, useReactFlow } from "reactflow";
import { useWorkflowStore } from "../store/useWorkflowStore";
import "reactflow/dist/style.css";
import { useCallback, useMemo, useRef } from "react";
import type { Node } from "reactflow";
import TriggerNode from "./nodes/TriggerNode";
import ActionNode from "./nodes/ActionNode";
const WorkflowCanvas = () => {
   const nodes = useWorkflowStore((state) => state.nodes) || []
   const edges = useWorkflowStore((state) => state.edges) || []
   const onNodesChange = useWorkflowStore((state) => state.onNodesChange)
   const onEdgesChange = useWorkflowStore((state) => state.onEdgesChange)
   const onConnect = useWorkflowStore((state) => state.onConnect)
   const { screenToFlowPosition } = useReactFlow();
   const onDrop = useCallback((event: React.DragEvent) => {
      event.preventDefault();
      const type = event.dataTransfer.getData("application/reactflow")
      if (!type || typeof type === "undefined") return;
      const position = screenToFlowPosition({
         x: event.clientX,
         y: event.clientY
      })

      const newNodeId = `node_${Date.now()}`
      const newNode: Node = {
         id: newNodeId,
         type,
         position,
         data: {
            label: `${type} node`
         }
      }
      useWorkflowStore.getState().addNode(newNode)

   }, [screenToFlowPosition])


   const nodeTypes = useMemo(()=>({ 
trigger: TriggerNode,
action: ActionNode
   }),[])


   const onDragOver = useCallback((event: React.DragEvent) => {
      event.preventDefault();
      event.dataTransfer.dropEffect = "move"
   }, [])
   return (
      <div className="w-screen h-screen bg-slate-50 relative">
         
         <ReactFlow
            nodes={nodes}
            edges={edges}
            onConnect={onConnect}
            onEdgesChange={onEdgesChange}
            onNodesChange={onNodesChange}
            onDrop={onDrop}
            onDragOver={onDragOver}
            nodeTypes={nodeTypes}
         
            fitView
         >
            <Background />
            <Controls />
         </ReactFlow>

      </div>
   )
}

export default WorkflowCanvas