import { Projects } from "./projectStyle";

interface Props {
  projectName: string;
  projectDescription: string;
  projectLinkInvite?: string;
  projectLink: string;
  projectWebsite?: string;
  projectImage?: any;
  projectImageAlt?: any;
  textNotImage?: any;
}

export function Project({
  projectName,
  projectDescription,
  projectLinkInvite,
  projectLink,
  projectImage,
  projectWebsite,
  projectImageAlt,
  textNotImage,
}: Props) {
  return (
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
            <h5>Github</h5>
          </a>
          <a href={projectWebsite} target="_blank">
            {projectImage ? (
              <img src={projectImage} alt={projectImageAlt} />
            ) : (
              textNotImage && <h5>{textNotImage}</h5>
            )}
          </a>
        </div>
      </div>
    </Projects>
  );
}
