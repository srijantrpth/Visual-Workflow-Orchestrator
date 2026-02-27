import { Handle, Position } from "reactflow";
import type {NodeProps} from "reactflow";

const TriggerNode = ({data}: NodeProps) => {
  return (
<>

<div className="w-64 bg-white rounded-md shadow-md border border-slate-200 overflow-hidden">
    
        <span className="font-bold text-white text-sm bg-black  ">Webhook Trigger</span>
</div>
<div className="p-4 bg-white">

  <p className="text-xs text-slate-500 mb-2">


    When this event happens, the workflow begins.

  </p>
  <div className="font-medium text-slate-800 text-sm border-t pt-2 mt-2">
    {data?.label}
  </div>
<Handle

type="source"
position={Position.Right}
className="w-3 h-3 bg-blue-500 border-2 border-white"
/>

</div>

</>  )
}

export default TriggerNode