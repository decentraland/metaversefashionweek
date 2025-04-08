import { styled } from "styled-components"
import scheduleBg from "../../img/misc/schedule.png"
import { JumpInBtn } from "../JumpInBtn/JumpInBtn"
import { ScheduleTabs } from "../ScheduleTabs/ScheduleTabs"
const ScheduleSection = () => {
  return (
    <ScheduleSectionContainer id="schedule">
      <div className="schedule-container">
        <h2>
          <span>Enter</span> <span>Decentraland</span> <span>APRIL 9 - 12</span>
        </h2>
        <ul className="schedule-list">
          <li>
            Experience <b>4</b> days of exclusive fashion and 8 live VIP talks
          </li>
          <li>
            Be front row for <b>6</b> iconic runway shows
          </li>
          <li>
            Explore <b>16</b> designer showrooms
          </li>
          <li>
            Claim <b>22+</b> free digital fashion collectibles
          </li>
        </ul>
      </div>
      <div className="schedule-tabs-section-container">
        <div className="schedule-tabs-section-left">
          <h3>Schedule</h3>
          <span className="download-btn-container">
            <JumpInBtn />
          </span>
        </div>
        <div className="schedule-tabs-container">
          <ScheduleTabs />
        </div>
      </div>
      <div className="download-btn-container">
        <JumpInBtn />
      </div>
    </ScheduleSectionContainer>
  )
}

const ScheduleSectionContainer = styled.section`
  width: 100%;
  height: 100%;
  background-image: url(${scheduleBg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding-block: 48px;
  padding-inline: 24px;
  background-size: cover;

  @media (min-width: 1268px) {
    background-position: -200px -100px;
  }

  > div.schedule-container {
    display: flex;
    align-items: center;
    justify-content: center;

    h2 {
      font-size: 40px;
      font-weight: 400;
      color: #ebecfa;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: flex-end;
      padding-right: 24px;
      padding-bottom: 24px;
      font-weight: 700;
      text-align: right;
      letter-spacing: 0.05em;

      span {
        &:first-child {
          font-size: 32px;
          text-align: right;
          font-weight: 600;
        }
      }

      @media (max-width: 568px) {
        display: none;
      }

      // @media (min-width: 1024px) {
      //   width: 270px;
      // }
    }

    > ul {
      padding: 4px 52px;
      margin: 0;
      display: flex;
      flex-direction: column;
      margin-bottom: 24px;
      border-left: 2px solid #ebecfa;
      max-width: 678px;

      li {
        font-size: 22px;
        font-weight: 500;
        letter-spacing: 0.08em;
        color: #ebecfa;
        margin-bottom: 8px;

        b {
          font-weight: 900;
        }
      }

      @media (max-width: 568px) {
        margin-inline: auto;
      }
    }
  }

  > div.schedule-tabs-section-container {
    margin-top: 24px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    max-width: 1200px;
    margin-inline: auto;
    gap: 24px;
    position: relative;

    > div.schedule-tabs-container {
      // padding-left: 24px;
      // border-left: 2px solid #ebecfa;

      @media (max-width: 1024px) {
        padding-left: 0;
        border-left: none;
      }
    }
  }

  div.schedule-tabs-section-left {
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    flex-direction: column;
    max-width: 300px;
    width: 100%;
    height: 100%;
    border-right: 2px solid #ebecfa;
    padding-right: 24px;
    h3 {
      font-size: 32px;
      font-weight: 900;
      color: #ebecfa;
      letter-spacing: 0.05em;
    }

    .download-btn-container {
      margin-top: auto !important;
    }

    @media (max-width: 1024px) {
      display: none;
    }
  }

  > div.download-btn-container {
    margin-top: 24px;
    max-width: 400px;
    margin-inline: auto;

    @media (min-width: 568px) {
      display: none;
    }
  }
`

export { ScheduleSection }
