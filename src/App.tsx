import { projects } from "../src/db/index";
import DanielImage from "/src/assets/images/Daniel_Pedersoli_foto_perfil.png";
import WhiteLogo from "/src/assets/images/white-logo-Daniel-Pedersoli.png";

import {
  About,
  Footer,
  Header,
  Projects,
  Technologies,
  TopImage,
} from "./Styles/Style-app";
import { Project } from "./components/Project";

function App() {
  return (
    <div>
      <Header role="banner">
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <img
            className="logo"
            src={WhiteLogo}
            alt="logo-Daniel-Pedersoli"
            role="menulogo"
          />
        </nav>
      </Header>

      <main role="main">
        <TopImage>
          <h1 className="titulo">
            <strong>Portfólio</strong> <span> Daniel Pedersoli</span>
          </h1>
          <img
            className="foto-daniel-pedersoli"
            src={DanielImage}
            alt="foto Daniel Pedersoli"
            title="Daniel Pedersoli"
            aria-labelledby="description-danielpedersoli"
          />
        </TopImage>

        <About>
          <div className="about-description">
            <h2>Sobre mim</h2>
            <p id="description-danielpedersoli">
              Sou desenvolvedor front-end, com foco em React Native, React e
              Typescript. Busco sempre aprender e me aprimorar mais diariamente.
              Vejo a necessidade de desenvolver projetos que exigem pequenas
              entregas constantes. Algo que me chama a atenção é a questão da
              grande necessidade de gerar acessibilidade nas plataformas para o
              público PCD e para o público no geral que possui qualquer outro
              fator incapacitante, em desenvolver algo que gere acesso
              facilitado a todos os públicos, da melhor forma possível. Isso é
              algo que me encoraja e anima a aprender a ir me aprimorando.
              Profissional e pessoalmente eu me encontro sendo útil onde sou
              requisitado, já fui necessário como na área de comunicação,
              desenvolvimento e testes. Acredito muito nos meus valores, e levo
              isso em conta quando me é proposto algo. Hoje estudo para aprender
              as novas tecnologias que o mercado exige e procuro tornar meu
              código cada vez mais simples de entender e de reutilizar pelos
              meus colegas, para assim podermos ganhar mais agilidade durante a
              caminhada dos projetos tendo em vista que o contrário disso
              poderia tornar pesaroso o trabalho.
            </p>
          </div>
        </About>

        <Technologies>
          <div className="technologies">
            <img
              alt="HTML icon"
              height="50"
              width="60"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
            />
            <img
              alt="CSS icon"
              height="50"
              width="60"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
            />
            <img
              alt="React icon"
              height="50"
              width="60"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            />
            <img
              alt="Javascript icon"
              height="50"
              width="60"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"
            />
            <img
              alt="Typescript icon"
              height="50"
              width="60"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg"
            />
          </div>
        </Technologies>

        <Projects>
          <h2>Projetos</h2>
          <div className="project-grid">
            {projects.map((project, index) => {
              return (
                <Project
                  key={index}
                  projectName={project.name}
                  projectDescription={project.description}
                  projectLinkInvite={project.inviteText}
                  projectLink={project.githubUrl}
                  projectImage={project.image}
                  projectWebsite={project.websiteUrl}
                  projectImageAlt={project.altImage}
                  textNotImage={project.noImageText}
                />
              );
            })}
          </div>
        </Projects>
      </main>

      <Footer role="contentinfo">
        <p>
          Todos os direitos reservados para <br />
          <strong>Daniel Pedersoli</strong>
        </p>
        <p>Produzido por Daniel Pedersoli</p>
        <div>
          <br />
          <a href="https://github.com/dpedersoli" target="_blank">
            <i className="devicon-github-original-wordmark"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-pedersoli-/"
            target="_blank"
          >
            <i className="devicon-linkedin-plain"></i>
          </a>
        </div>
      </Footer>
    </div>
  );
}

export default App;
