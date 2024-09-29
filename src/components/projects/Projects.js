import React, { useEffect,useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import './Projects.css'
import { getProjectData } from '../../actions/SkillActions'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { Project } from '../project/Project'
import { projects } from '../../data/Projects'
export const Projects = () => {
  const dispatch = useDispatch();
  // const projects = useSelector(state=>state.projects)
  // console.log(projects);
  // useEffect(()=>{
  //   getProjectData(dispatch);
  // },[])

  const [currentSlide, setCurrentSlide] = useState(0);
  const length = projects.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
    }, 6000);
    return () => clearInterval(interval);
  }, [currentSlide, length]);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
  };

  if (!Array.isArray(projects) || projects.length <= 0) {
    return null;
  }

  return (
    <section id='projects-section' className='project-carousel container'>
      <h1 className='heading'>Projects</h1>
      <p className='description'>Here you will find some of the personal and clients projects that I created with each project containing its own case study</p>
      <FontAwesomeIcon icon={faArrowLeft} className="project-arrow project-arrow-left" onClick={prevSlide} />
      <FontAwesomeIcon icon={faArrowRight} className="project-arrow project-arrow-right" onClick={nextSlide} />
      {projects.map((project, index) => {
        return (
          <div
            className={index === currentSlide ? 'project-slide' : 'project-slide slide-hidden'}
            key={index}
          >
            {index === currentSlide && (
              <Project
              id={project.id} 
              imageSrc={project.image}
              projectName={project.name}
              projectDes={project.description}
              ></Project>
            )}
          </div>
        );
      })}
      <div className='project-indicators'>
        {projects.map((_, index) => (
          <div
            key={index}
            className={index === currentSlide ? 'indicator' : 'indicator indicator-inactive'}
            onClick={() => setCurrentSlide(index)}
          ></div>
        ))}
      </div>
    </section>
  );





  return (
    <section id='projects' className='projects container'>
        <h1 className='heading'>Projects</h1>
        <p className='description'>Here you will find some of the personal and clients projects that I created with each project containing its own case study</p>
        {/* {projects.map((project)=>{
            return <Project
            id={project.id} 
            imageSrc={`http://localhost:8080/api/images/${project.imageName}`}
            projectName={project.projectName}
            projectDes={project.description}
            ></Project>
        })} */}
        {projects.map((project)=>{
            return <Project
            id={project.id} 
            imageSrc={project.image}
            projectName={project.name}
            projectDes={project.description}
            ></Project>
        })}
    </section>
  )
}
