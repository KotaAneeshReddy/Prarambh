import { act } from "react"
import { projects } from "../data/Projects"

const initialState = {id:null,skills:[],projects:[]}

export const productReducer = (state=initialState,action)=>{
    switch(action.type){
        case "PASS_PRODUCT_ID":
            return {...state,id:action.payload.id}
        case "ADD_SKILLS":
            return {...state,skills:action.payload.skills}
        case "REMOVE_SKILL":
            return {...state,skills:action.payload}
        case "ADD_PROJECTS":
            return {...state,projects:action.payload.projects}
        case "REMOVE_PROJECT":
            return {...state,projects:action.payload}
        default:
            return {...state}
    }
}