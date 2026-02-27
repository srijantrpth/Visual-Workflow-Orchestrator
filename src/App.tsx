import React from "react"
import WorkflowCanvas from "./components/WorkflowCanvas"
import ReactFlow, { ReactFlowProvider } from "reactflow"
import Sidebar from "./components/SideBar"
function App() {
  
  return (
   <ReactFlowProvider>
    <div className="flex w-screen h-screen overflow-hidden bg-slate-50 ">
      <Sidebar/>
<div className="flex-1 h-full">
          <WorkflowCanvas />
        </div>
    </div>
    </ReactFlowProvider>

  
  )
}


export default App
