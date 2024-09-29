import axios from 'axios'

export const getAllSkills = async (dispatch) => {
    try{
        const response = await axios.get("http://localhost:8080/api/skills")
        dispatch({type:"ADD_SKILLS",payload:{skills:response.data}})
    }catch(error){
        console.log(error);
    }
}

export const getProjectData = async (dispatch) =>{
    try{
        const response = await axios.get("http://localhost:8080/api/projects")
        const data = response.data
        dispatch({type:"ADD_PROJECTS",payload:{projects:data}});
    }catch(error){
        console.log(error);
    }
    
  }