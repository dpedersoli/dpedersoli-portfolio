import { Projects } from './projectStyle'

interface Props {
  projectName: string;
  projectDescription: string;
  projectLinkInvite?: string;
  projectLink: string;
  projectImage?: string;
  projectImageAlt?: string;
  textNotImage?: string;
}

export function Project({ projectName, projectDescription, projectLinkInvite, projectLink, projectImage, projectImageAlt, textNotImage }: Props){
  return(
    <Projects>
        <div className="project">
          <div className="project-description">
            <h3>{projectName}</h3>
            <h4>Descrição do Projeto:</h4>
            <p>{projectDescription}</p>
            <p className="strong">{projectLinkInvite}</p>
          </div>
          <div className="project-link">
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