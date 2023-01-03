import WhiteLogo from '/src/images/white-logo-Daniel-Pedersoli.png'
import DanielImage from '/src/images/Daniel_Pedersoli_foto_perfil.png'
import UpMoneyLogo from '/src/images/UpMoney-Logo.png'

import { Header, TopImage, About, Technologies, Projects, Footer } from './Styles/Style-app'
import { Project } from './pages/Project'

function App() {

  return (
    <div>
      <Header role="banner">
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <img className="logo" src={WhiteLogo} alt="logo-Daniel-Pedersoli" role="menulogo" />
        </nav>
      </Header>

      <main role="main">
        <TopImage>
          <h1 className="titulo"><strong>PORTIFÓLIO</strong> <span> Daniel Pedersoli</span></h1>
          <img className="foto-daniel-pedersoli" src={DanielImage} alt="foto Daniel Pedersoli" title="Daniel Pedersoli" aria-labelledby="description-danielpedersoli" />
        </TopImage>

        <About>
          <div className="about-description">
            <h2>Sobre mim</h2>
            <p id="description-danielpedersoli">Sou desenvolvedor front-end, com foco em React JS e TS. Busco sempre aprender e me aprimorar mais. Vejo a necessidade de desenvolver projetos que exigem pequenas entregas constantes. Algo que me chama a atenção é a questão da grande necessidade de gerar acessibilidade nas plataformas para o público PCD e para o público no geral que possui qualquer outro fator incapacitante, em desenvolver algo que gere acesso facilitado a todos os públicos, da melhor forma possível. Isso é algo que me encoraja e anima a aprender a ir me aprimorando. Profissional e pessoalmente eu me encontro sendo útil onde sou requisitado, já fui necessário como na área de comunicação, desenvolvimento e testes. Acredito muito nos meus valores, e levo isso em conta quando me é proposto algo. Hoje estudo para aprender as novas tecnologias que o mercado exige e procuro tornar meu código cada vez mais simples de entender e de reutilizar pelos meus colegas, para assim podermos ganhar mais agilidade durante a caminhada dos projetos tendo em vista que o contrário disso poderia tornar pesaroso o trabalho.
            </p>
          </div>
        </About>

        <Technologies>
          <div className="technologies">
            <img alt="HTML icon" height="50" width="60" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" />
            <img alt="CSS icon" height="50" width="60" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" />
            <img alt="React icon" height="50" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
            <img alt="Javascript icon" height="50" width="60" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" />
            <img alt="Typescript icon" height="50" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg" />
          </div>
        </Technologies>

        <Projects>
          <h2>Projetos</h2><br />
          <Project
            projectName="UpMoney"
            projectDescription="PWA (Progressive Web App) funcional e instalável de uma aplicação de educação financeira voltado para usuários de Mobile. A aplicação foi desenvolvida por mim (front-end) e outro colega (back-end). O Front-end foi desenvolvido utilizando React, Vite, Typescript, Axios, Tailwind e React-Router-Dom . A aplicação consiste no uso recursivo de API's com Cadastro, Login, Recuperação de Senha e um design funcional e interativo. Abra o projeto clicando no ícone ao lado"
            projectLink="https://github.com/dpedersoli/desafio-chefao"
            projectImage={UpMoneyLogo}
            projectImageAlt="upmoney-daniel-pedersoli"
          />

          <Project
            projectName="RocketHelp"
            projectDescription="App de gestão de chamados/solicitações. Desenvolvido em React Native com uso do Expo, com uso de Native Base, Firebase (authentication + firestore), e Phosphor. A aplicação conta com integração de criação de solicitações, modificação dos mesmos e modos de visualização à depennder do status das solicitações. Abra o projeto clicando no título ao lado."
            projectLink="https://github.com/dpedersoli/ignite-lab"
            textNotImage="RocketHelp"
          />

          <Project
            projectName="Responsive Website"
            projectDescription="Site responsivo com uso de menus dropdown e telas interativas. Desenvolvido com objetivo de me qualificar e desenvolver em diferentes ambientes. Foi utilizado HTML, CSS + SASS, Javascript + Jquery, e Gulp para o desenvolvimento desse projeto. Abra o projeto clicando no título ao lado."
            projectLink="https://github.com/dpedersoli/dot"
            textNotImage="Responsive Website"
          />
        </Projects>
        
      </main>

      <Footer role="contentinfo">
        <img className="logo" src={WhiteLogo} alt="logo-Daniel-Pedersoli" />
        <p>Todos os direitos reservados para <strong>Daniel Pedersoli</strong></p>
        <p>Produzido por Daniel Pedersoli</p>
        <div><br />
          <a href="https://github.com/dpedersoli" target="_blank">
            <i className="devicon-github-original-wordmark"></i>
          </a>
          <a href="https://www.linkedin.com/in/daniel-pedersoli-/" target="_blank">
            <i className="devicon-linkedin-plain"></i>
          </a>
        </div>
      </Footer>
    </div>
  )
}

export default App
