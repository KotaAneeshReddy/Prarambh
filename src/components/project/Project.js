import React from 'react'
import './Project.css'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'

export const Project = ({id,imageSrc,projectName,projectDes}) => {

    console.log(imageSrc);
    
    // const projectId = useSelector(state=>state.id)
    const dispatch = useDispatch();

    function handleProjectId(id){
        dispatch({type:"PASS_PRODUCT_ID",payload:{id:id}})
    }

  return (
    <div className='project'>
        <div className='project-overview'>
            <img className='overview-image' src={imageSrc}/>
        </div>
        <div className='project-details'>
            <h2 className='secondary-heading'>{projectName}</h2>
            <p className='about-description'>{projectDes}</p>
            <button className='primary-button' onClick={()=>handleProjectId(id)}>Live Link</button>
        </div>
    </div>
  )
}
