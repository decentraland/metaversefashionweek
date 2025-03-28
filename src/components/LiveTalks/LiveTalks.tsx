import { styled } from "styled-components"
import { liveTalksData } from "./data"
// import bgHero2 from "../../img/music-festival/tira-larga-oscura.jpg"
import { useResponsive } from "../../hooks/useResponsive"
import iconsTalks from "../../img/vectors/logos-talks.svg?url"
import { breakpoints } from "../../utils/theme"
import { DownloadBtn } from "../DownloadBtn/DownloadBtn"
// import { Title } from "../Title"

const LiveTalks = () => {
  const { isTablet, isDesktop } = useResponsive()

  console.log("isTablet", isTablet, isDesktop)

  return (
    <LiveTalksContainer id="livetalks">
      <div className="live-talks-header">
        <h2>Insider Career Talks</h2>
        <h5>
          All panels will be live-streamed in Decentraland and on X YouTube and
          LinkedIn
        </h5>
        <div className="header-desktop">
          <p>
            All content will repeat in world starting at Midnight UTC the
            following day
          </p>
          <div className="header-desktop-icons">
            <img src={iconsTalks} alt="LinkedIn" />
          </div>
          <DownloadBtn />
        </div>
      </div>
      <TalksGrid>
        {liveTalksData.map((talk, index) => (
          <TalkCard key={index}>
            <img src={talk.image} alt={talk.title} />
            <h3>{talk.title}:</h3>
            <p>{talk.description}</p>
            <p>{talk.date}</p>
            <TimeInfo>
              <TalkTime>{talk["time-start"]}</TalkTime>
              <TalkTime>{talk["time-end"]}</TalkTime>
              <TalkTime>{talk["time-end"]}</TalkTime>
            </TimeInfo>
          </TalkCard>
        ))}
      </TalksGrid>
    </LiveTalksContainer>
  )
}

const LiveTalksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 24px;
  position: relative;
  max-width: 1200px;

  @media (min-width: ${breakpoints.l}) {
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

  .live-talks-header {
    gap: 10px;
    padding-left: 20px;
    border-left: 1px solid #ebecfa;
    margin-block: 24px;
    height: 100%;
    max-width: 360px;

    h2 {
      font-size: 32px;
      font-weight: 700;
      color: #fff;
      letter-spacing: 0.04em;
      text-align: right;
    }

    h5 {
      font-size: 18px;
      font-weight: 400;
      color: #fff;
      max-width: 350px;
      letter-spacing: 0.06em;
      text-align: right;
      margin-block: 12px;
    }

    @media (min-width: ${breakpoints.l}) {
      margin-block: 0;
      padding-left: 0;
      border-left: none;
      border-right: 1px solid #ebecfa;
      padding-right: 24px;
      height: 100%;
    }

    > div.header-desktop {
      margin-top: 24px;
      width: 100%;
      display: none;

      @media (min-width: 1024px) {
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        text-align: right;
        flex-direction: column;
        display: flex;
      }

      p {
        font-size: 14px;
        font-weight: 400;
        color: #fff;
        max-width: 350px;
        letter-spacing: 0.06em;
        margin-bottom: 24px;
      }

      .header-desktop-icons {
        align-items: flex-end;
        justify-content: flex-end;

        svg {
          width: 240px;
          height: 100%;
          margin-left: auto;
        }
      }

      a {
        margin-top: 24px;
      }
    }
  }
`

const TalksGrid = styled.div`
  display: grid;
  gap: 30px;
  width: 100%;
  max-width: 1240px;
  margin-bottom: 60px;

  @media (max-width: ${breakpoints.s}) {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  @media (min-width: ${breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(240px, 1fr));
    gap: 20px;
  }
`

const TalkCard = styled.div`
  color: #fff;
  padding: 20px;
  text-align: center;
  transition: transform 0.3s ease;

  img {
    width: 100%;
    border: 1px solid;
    object-fit: cover;
    aspect-ratio: 16/9;
    border-radius: 20px;
  }

  h3 {
    margin-top: 15px;
    font-size: 24px;
    font-weight: bold;
    font-family: "Inter", sans-serif !important;
  }

  p {
    font-size: 16px;
    font-weight: 600;
    color: #ffffff;
    line-height: 1.4;
  }

  @media (max-width: ${breakpoints.md}) {
    padding: 15px;

    h3 {
      font-size: 20px;
    }

    p {
      font-size: 14px;
    }

    img {
      height: unset;
    }
  }
`

const TalkTime = styled.p`
  font-weight: 400 !important;
`

const TimeInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  margin-top: 15px;

  p {
    color: rgba(255, 255, 255, 1) !important;
    font-weight: 400 !important;
    margin: 0;
    position: relative;

    &:not(:last-child)::after {
      content: "|";
      position: absolute;
      right: -7px;
    }
  }

  @media (max-width: ${breakpoints.md}) {
    font-size: 12px;
    gap: 8px;
  }
`

export { LiveTalks }
