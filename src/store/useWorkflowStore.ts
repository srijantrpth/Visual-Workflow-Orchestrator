import { create } from "zustand"
import {
    applyNodeChanges,
    applyEdgeChanges,
    addEdge,
} from "reactflow";
import type {
    Node,
    Edge,
    Connection,
    OnNodesChange,
    OnEdgesChange,
    OnConnect
} from "reactflow";

type WorkflowState = {
    nodes: Node[];
    edges: Edge[];
    onNodesChange: OnNodesChange;
    onEdgesChange: OnEdgesChange;
    onConnect: OnConnect;
}


export const useWorkflowStore = create<WorkflowState>(

    (set, get) => ({
        nodes: [],
        edges: [],
        onNodesChange: (changes) => {
            set({
                nodes: applyNodeChanges(changes, get().nodes)
            })
        },
        onConnect: (connection: Connection) => {
            set({
                edges: addEdge(connection, get().edges)
            })
        },
        onEdgesChange: (changes) => {
            set({
                edges: applyEdgeChanges(changes, get().edges)
            })
        }



    })

)