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
      width: 27%;
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
`

export const About = styled.section`
  display: flex;
  align-items: center;
  padding: 50px 10px;
  background: white;

    .about-description{
      font-family: 'Roboto Mono', monospace;
      padding: 0 10vw;
      font-size: 1.3rem;
      color: black;
      background: white;
    }
      h2{
        font-size: 1.8rem;
        font-family: 'Roboto Mono', monospace;
        font-weight: bold;
        padding-bottom: 10px;
        color: rgb(175, 41, 175);
      } 
`

export const Technologies = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  font-size: 23px;
  font-family: 'Roboto Mono', monospace;
  font-weight: bold;
  color: rgb(175, 41, 175);

    .technologies{
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: white;
      padding-bottom: 3vh;
      font-size: 5rem;
    }
`

export const Projects = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 40px 10px;

    .project{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 20px 0px;
    }

    h2{
      font-size: 2.5rem;
      font-family: 'Roboto Mono', monospace;
      color: rgb(175, 41, 175);
      }

      .project{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 70%;
      }

        h3{
          font-size: 1.6rem;
          font-family: 'Roboto Mono', monospace;
          font-weight: bold;
          color: rgb(175, 41, 175);
        }

          h4{
            font-family: 'Roboto Mono', monospace;
            font-size: 1.3rem;
            font-weight: normal;
            color: white;
            margin-top: 0.2rem;
            margin-bottom: 0.2rem;
            color: grey;
          }

          a{
            text-decoration: none;
          }

          h5{
            font-family: 'Roboto Mono', monospace;
            font-size: 1.7rem;
            color: rgb(175, 41, 175);
            border: 2px solid rgb(175, 41, 175);
            padding: 5px;
          }

          h5:hover{
            color: white;
          }

            p{
              font-family: 'Roboto Mono', monospace;
              font-size: 1rem;
            }

              img{
                margin-left: 5rem;
                width: 10rem;
              }
`

export const Footer = styled.footer`
  padding-top: 0.5rem;
  padding-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto Mono', monospace;
  background: purple;
  font-size: 1rem;
  color: white;
      
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
`