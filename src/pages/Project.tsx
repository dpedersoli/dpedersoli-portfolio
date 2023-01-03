import { Header, TopImage, About, Technologies, Projects, Footer } from '../Styles/Style-app'

import "../Styles/Style-app"

interface Props {
  projectName: string;
  projectDescription: string;
  projectLink: string;
  projectImage?: string;
  projectImageAlt?: string;
  textNotImage?: string;
}

export function Project({ projectName, projectDescription, projectLink, projectImage, projectImageAlt, textNotImage }: Props){
  return(
    <Projects>
        <div className="project">
          <div className="project-description">
            <h3>{projectName}</h3>
            <h4>Descrição do Projeto:</h4>
            <p>{projectDescription}</p>
          </div>
          <div className="project-image">
            <a href={projectLink} target="_blank">
              { projectImage
              ? <img src={projectImage} alt={projectImageAlt} />
              : <h5>{textNotImage}</h5>
              }
            </a>
          </div>
        </div>
    </Projects>
  )
}