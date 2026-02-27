import React from 'react'
import {Handle, Position} from "reactflow";
import type {NodeProps} from "reactflow"
const ActionNode = ({data}: NodeProps) => {
  return (
   <div className="w-64 bg-white rounded-md shadow-md border border-slate-200 overflow-hidden">

    <Handle
    
    type='target'
    position={Position.Left}
    className="w-3 h-3 bg-emerald-500 border-2 border-white"
    />
    <div className="bg-emerald-500 px-4 py-2 flex items-center gap-2">
        <span className="font-bold text-white text-sm">✉️ Action Node</span>
    </div>
    <div className="p-4 bg-white">
        <p className="text-xs text-slate-500 mb-2">
          When this event happens, the action begins.
        </p>
        <div className="font-medium text-slate-800 text-sm border-t pt-2 mt-2">
          {data?.label}
        </div>
      
    </div>
    <Handle
    type='source'
    position={Position.Right}
    className="w-3 h-3 bg-emerald-500 border-2 border-white"
    />
   </div>
  )
}

export default ActionNode