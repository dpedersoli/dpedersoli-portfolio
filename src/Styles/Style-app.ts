import styled from "styled-components";

export const Header = styled.header`
  padding: 1rem;
  display: flex;
  align-items: center;
  background: purple;
  height: 5vh;

    .logo{
      width: 3.2rem;
      height: auto;
    }
`

export const TopImage = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding-left: 1rem;
    h1 {
      display: inline-flex;
      flex-direction: column;
      font-family: 'Press Start 2P', cursive;
      font-size: 2rem;
      color: rgb(175, 41, 175);
      width: 20rem;
    }
      h1 strong{
        color: black;
        background: rgb(175, 41, 175);
        padding: 5px;
        margin-bottom: 5px;
        min-width: 100%;
      }
        .foto-daniel-pedersoli{
          width: 25%;
          max-width: 70%;
          height: auto;
        }

@media screen and (max-width: 400px){
  flex-direction: column-reverse;
  padding: 2rem 0;

  h1{
    font-size: 1.5rem;
    width: 15rem;
  }

  .foto-daniel-pedersoli{
    width: 70%;
    max-width: 70%;
    margin-bottom: 1rem;
    margin-right: 2rem;
  }
}
`

export const About = styled.section`
  display: flex;
  align-items: center;
  padding: 50px 10px;
  background: white;

    .about-description{
      padding: 0 4.5rem;
      font-size: 1.3rem;
      color: black;
      background: white;
    }
      h2{
        font-size: 1.8rem;
        font-weight: bold;
        padding-bottom: 10px;
        color: rgb(175, 41, 175);
      }

@media screen and (max-width: 720px){
  .about-description{
      text-align: center;
    }

    h2{
      margin-bottom: 1rem;
    }
}

@media screen and (max-width: 400px){
  .about-description{
      text-align: center;
      padding: 0 1rem;
      font-size: 1.1rem;
      line-height: 1.5rem;
    }

    h2{
      margin-bottom: 1rem;
    }
}
`

export const Technologies = styled.section`
  .technologies{
      background-color: white;
      display: flex;
      justify-content: center;
      padding-bottom: 2rem;
    }

@media screen and (max-width: 400px){
   img{
    width: 3.5rem;
    height: 3rem;
  }
}
`

export const Projects = styled.section`
margin: 1rem;

  h2{
    font-size: 2.5rem;
    color: rgb(175, 41, 175);
    text-align: center;
    }

@media screen and (max-width: 400px){
  h2{
    font-size: 2rem;
    }
}
`

export const Footer = styled.footer`
  padding-top: 0.5rem;
  padding-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: purple;
  font-size: 1rem;
  color: white;
  text-align: center;
      
    a {
      margin: 0.3rem;
      text-decoration: none;
      font-size: 2.3rem;
      color: white;
    }

      a:hover {
        text-decoration:none;
        color: white;
      }

        img{
          margin-bottom: 0.5rem;
        }

          .logo{
            width: 3rem;
            height: auto;
          }

@media screen and (max-width: 400px){
  p{
    font-size: 0.9rem;
    }
}
`
