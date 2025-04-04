// React + Next
import { styled } from "styled-components"
// Assets
import showroom1 from "../../img/experiences/showRoom1.png"
import showroom2 from "../../img/experiences/showRoom2.png"
import iconsTalks from "../../img/vectors/iconos-header-left.svg?url"
// Others
import { breakpoints } from "../../utils/theme"

// Assets

const ExperiencesSectionInfo = () => {
  return (
    <ExperiencesSectionInfoContainer id="showrooms">
      <div className="left">
        <h2>Featured Showrooms</h2>
        <div className="icons__container">
          <img src={iconsTalks} alt="icons" />
        </div>
      </div>
      <div className="right">
        <div className="description__container">
          <h3>Sixteen interactive showrooms in two zones:</h3>
          <p>
            Augmented Self focuses on AI, AR, and phygital fashion, showcasing
            innovations in wearable tech and virtual self-expression, while
            Storied Self reveals the use of new fashion technologies for
            personal storytelling and cultural narratives.
          </p>
        </div>

        <div className="showrooms__container">
          <div className="showroom__item">
            <h4>Augmented Self</h4>
            <img src={showroom2} alt="showroom" />
          </div>
          <div className="showroom__item">
            <h4>Storied Self</h4>
            <img src={showroom1} alt="showroom" />
          </div>
        </div>
      </div>
    </ExperiencesSectionInfoContainer>
  )
}

const ExperiencesSectionInfoContainer = styled.div`
  display: flex;
  align-items: center;
  color: #ebecfa;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 24px;
  position: relative;
  max-width: 1200px;
  flex-direction: column;

  @media (min-width: ${breakpoints.md}) {
    flex-direction: row;
    justify-content: center;
    gap: 24px;
    align-items: flex-start;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
  }

  & > * {
    position: relative;
    z-index: 2;
  }

  @media (max-width: ${breakpoints.md}) {
    padding: 30px 15px;
  }

  @media (max-width: ${breakpoints.s}) {
    padding: 20px 10px;
  }

  .left {
    display: none;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    gap: 12px;
    width: 100%;
    max-width: 200px;
    text-align: right;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      max-width: 200px;
    }

    @media (min-width: ${breakpoints.md}) {
      display: flex;
    }
  }

  .right {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding-left: 24px;
    border-left: 1px solid #ebecfa;

    .description__container {
      display: flex;
      flex-direction: column;
      gap: 12px;

      h3 {
        font-size: 18px;
        font-weight: bold;
        color: #ebecfa;
        letter-spacing: 0.05em;
        text-align: left;
      }

      p {
        font-size: 14px;
        color: #ebecfa;
        letter-spacing: 0.08em;
        text-align: left;
      }
    }

    .showrooms__container {
      display: flex;
      flex-direction: column;
      gap: 64px;
      margin-top: 32px;

      .showroom__item {
        display: flex;
        flex-direction: column;
        gap: 12px;

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          max-width: 700px;
          pointer-events: none;
        }

        h4 {
          font-size: 18px;
          font-weight: bold;
          color: #ebecfa;
          letter-spacing: 0.05em;
        }
      }
    }
  }
`

export { ExperiencesSectionInfo }
