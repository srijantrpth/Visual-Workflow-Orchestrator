import React from 'react'

const Sidebar = () => {
    const onDragStart = (event: React.DragEvent, nodeType: string) => {
        event.dataTransfer.setData("application/reactflow", nodeType);
        event.dataTransfer.effectAllowed = "move";
    }


    return (
        <aside className='w-64 bg-white border-r border-slate-200 flex flex-col gap-4 shadow-sm z-10 p-5  '>
            <div className='mb-4'>
                <h2 className='text-lg font-bold text-slate-800'>Workflow Nodes</h2>
                <p className='text-sm text-slate-500 '>Drag Items to the Canvas</p>


            </div>
            <div className='flex flex-col gap-2'>
                <div className='p-3 border-2 border-indigo-600 bg-gradient-to-r from-indigo-50 to-indigo-100 text-indigo-900 rounded-lg cursor-grab active:cursor-grabbing hover:from-indigo-100 hover:to-indigo-150 transition-all text-sm font-semibold shadow-md hover:shadow-lg'
                    onDragStart={(event) => onDragStart(event, "trigger")}
                    draggable
                >
                    Webhook Trigger
                </div>
                <div
                    className="p-3 border-2 border-slate-500 bg-gradient-to-r from-slate-50 to-gray-100 text-slate-900 rounded-lg cursor-grab active:cursor-grabbing hover:from-slate-100 hover:to-gray-150 transition-all text-sm font-semibold shadow-md hover:shadow-lg"
                    onDragStart={(event) => onDragStart(event, "action")}
                    draggable
                >   
                    Send Email Action
                </div>

            </div>

        </aside>    
    )
}

export default Sidebar