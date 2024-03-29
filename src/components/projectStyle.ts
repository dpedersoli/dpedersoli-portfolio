import styled from "styled-components";

export const Projects = styled.section`
  border-bottom: 1px solid rgba(175, 41, 175, 0.5);
  margin-bottom: -1.1rem;

  .project{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2.5rem 4rem;
  }

  h3{
      font-size: 1.6rem;
      font-weight: bold;
      color: rgb(175, 41, 175);
    }

      h4{
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
            font-size: 1.7rem;
            color: rgb(175, 41, 175);
            border: 2px solid rgb(175, 41, 175);
            padding: 5px;
            margin-left: 5rem;
          }

            h5:hover{
              color: white;
              transition: all 0.2s;
              opacity: 0.5;
            }

              p{
                font-size: 1rem;
              }

                .strong{
                font-weight: 900;
                margin-top: 0.5rem;
                color: rgb(175, 41, 175);
                }

                  img{
                    margin-left: 5rem;
                    width: 7rem;
                  }

                  img:hover{
                    opacity: 0.6;
                    transition: all 0.2s;
                  }

                    .project-link{
                      display: flex;
                      flex-direction: column;
                      gap: 1rem;
                      cursor: pointer;
                    }

  @media screen and (max-width: 720px){
    .project{
      margin: 2.5rem 1rem;
      flex-direction: column;
    }

      .project-link{
        margin-top: 1rem;
        gap: 1rem;
      }
  }

  @media screen and (max-width: 500px){
    .project{
      flex-direction: column;
      align-items: center;
      margin: 1rem 0.5rem;
    }

      .project-description{
        text-align: center;
      }

        h3{
          font-size: 1.5rem;
        }

          h4{
            font-size: 1.2rem;
          }

            p{
              font-size: 1rem;
            }

              img{
                margin-right: 5rem;
                margin-top: -1rem;
              }

                h5{
                  margin-right: 5rem;
                  margin-top: 2rem;
                  margin-bottom: 2rem;
                }

                .project-link{
                  gap: 0;
                }
    }
`