import { useRef, useState } from "react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6"
import styled from "styled-components"
import { experiencesData, runwaysData } from "./data"
import { breakpoints } from "../../utils/theme"

interface RunwaysProps {
  useMode: "runways" | "experiences"
}

const Runways = ({ useMode = "runways" }: RunwaysProps) => {
  const [currentRunway, setCurrentRunway] = useState(0)
  const [currentExperience, setCurrentExperience] = useState(0)
  const runwayRefs = useRef<(HTMLDivElement | null)[]>([])
  const experienceRefs = useRef<(HTMLDivElement | null)[]>([])

  const handleRunwayChange = (index: number) => {
    if (useMode === "runways") {
      setCurrentRunway(index - 1)
      scrollToRunway(index - 1)
    } else {
      setCurrentExperience(index - 1)
      scrollToExperience(index - 1)
    }
  }

  const handleNextRunway = () => {
    if (
      currentRunway <
      (useMode === "runways" ? runwaysData.length : experiencesData.length) - 1
    ) {
      if (useMode === "runways") {
        setCurrentRunway(currentRunway + 1)
        scrollToRunway(currentRunway + 1)
      } else {
        setCurrentExperience(currentExperience + 1)
        scrollToExperience(currentExperience + 1)
      }
    }
  }

  const handlePreviousRunway = () => {
    if (useMode === "runways") {
      if (currentRunway > 0) {
        setCurrentRunway(currentRunway - 1)
        scrollToRunway(currentRunway - 1)
      }
    } else {
      if (currentExperience > 0) {
        setCurrentExperience(currentExperience - 1)
        scrollToExperience(currentExperience - 1)
      }
    }
  }

  const scrollToRunway = (index: number) => {
    const element = runwayRefs.current[index]
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      })
    }
  }

  const scrollToExperience = (index: number) => {
    const element = experienceRefs.current[index]
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      })
    }
  }

  return (
    <Container id="runways">
      <div className="header">
        <div className="header__left">
          <h2>
            {useMode === "runways" ? "6 Runways" : "Interactive Experiences"}
          </h2>
          <span className="actions">
            <button
              className="action-button"
              disabled={
                useMode === "runways"
                  ? currentRunway === 0
                  : currentExperience === 0
              }
              onClick={handlePreviousRunway}
            >
              <FaChevronLeft fill="#000" />
            </button>
            <button
              className="action-button"
              disabled={
                useMode === "runways"
                  ? currentRunway === runwaysData.length - 1
                  : currentExperience === experiencesData.length - 1
              }
              onClick={handleNextRunway}
            >
              <FaChevronRight fill="#000" />
            </button>
          </span>
        </div>
        <div
          className={`header__right ${
            useMode === "runways" ? "runways" : "experiences"
          }`}
        >
          <h2>
            {useMode === "runways"
              ? runwaysData[currentRunway].title
              : experiencesData[currentExperience].title}
          </h2>
          <p>
            {useMode === "runways"
              ? runwaysData[currentRunway].description
              : experiencesData[currentExperience].description}
          </p>
        </div>
      </div>
      {useMode === "runways" ? (
        <RunwaysContainer>
          {runwaysData.map((runway, index) => (
            <div
              ref={(el) => (runwayRefs.current[index] = el)}
              className={`runway__item ${
                currentRunway === runway.id - 1 ? "active" : ""
              }`}
              key={runway.id}
              onClick={() => handleRunwayChange(runway.id)}
            >
              <img src={runway.image} alt={runway.title} />
              <h2>{runway.title}</h2>
              <p>{runway.location}</p>
            </div>
          ))}
        </RunwaysContainer>
      ) : null}
      {useMode === "experiences" ? (
        <ExperiencesContainer>
          {experiencesData.map((experience, index) => (
            <div
              key={experience.id}
              className={`experience__item ${
                currentExperience === experience.id - 1 ? "active" : ""
              }`}
              onClick={() => handleRunwayChange(experience.id)}
              ref={(el) => (experienceRefs.current[index] = el)}
            >
              <img src={experience.image} alt={experience.title} />
              <h2>{experience.title}</h2>
              <p>{experience.location}</p>
            </div>
          ))}
        </ExperiencesContainer>
      ) : null}
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 24px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 66px;
  margin-block: 100px;

  .header {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 24px;
    width: 100%;
    height: 100%;

    .header__left {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 24px;
      width: 100%;
      text-align: right;

      .actions {
        display: flex;
        gap: 12px;
        button {
          border: none;
          cursor: pointer;
          background-color: transparent;
          width: 40px;
          height: 40px;
          border: none;
          outline: none;
          border-radius: 50%;
          background-color: #ebecfa;
          display: flex;
          justify-content: center;
          align-items: center;
          &:disabled {
            opacity: 0.5;
          }
        }
      }

      .action-button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #ebecfa;
      }

      @media (min-width: 568px) {
        min-width: 160px;
      }
    }

    .header__right {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: 12px;
      align-items: flex-start;
      padding-left: 24px;
      border-left: 1px solid white;
      height: 100%;
      min-height: fit-content;

      h2 {
        font-size: 24px;
        font-weight: 400;
        color: #ebecfa;
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }

      p {
        font-size: 14px;
        font-weight: 400;
        color: #ebecfa;
        letter-spacing: 0.07em;
      }

      &.experiences {
        min-height: max-content;
        will-change: transform;
      }

      @media (min-width: ${breakpoints.md}) {
        max-width: 700px;
      }
    }

    @media (min-width: ${breakpoints.md}) {
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;

      .header__left {
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;
        max-width: 200px;
      }
    }
  }
`

const RunwaysContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 12px;
  width: 100%;
  height: 100%;
  overflow-x: auto;
  padding-block: 24px;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  transition: transform 0.3s ease-in-out;
  will-change: transform;
  -ms-overflow-style: none;
  scrollbar-width: none;

  .runway__item {
    width: 100%;
    height: 100%;
    cursor: pointer;
    min-width: 220px;
    opacity: 0.6;
    transition: opacity 0.3s ease-in-out;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    h2 {
      margin-top: 12px;
      font-size: 16px;
      font-weight: 400;
      color: #ebecfa;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    p {
      font-size: 14px;
      color: #ebecfa;
      font-weight: 400;
      margin-top: 6px;
    }

    &.active {
      opacity: 1;
      transform: translateY(-10px);
      transition: transform 0.3s ease-in-out;
    }

    @media (min-width: 1024px) {
      min-width: unset;
    }
  }

  @media (min-width: 768px) {
    flex-wrap: nowrap;
  }
`

const ExperiencesContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 12px;
  width: 100%;
  height: 100%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  padding-block: 24px;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  @media (min-width: ${breakpoints.md}) {
    justify-content: center;
  }

  .experience__item {
    width: 100%;
    height: 100%;
    cursor: pointer;
    opacity: 0.6;
    transition: opacity 0.3s ease-in-out;
    min-width: 180px;

    @media (min-width: ${breakpoints.md}) {
      min-width: 220px;
      max-width: 220px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    h2 {
      margin-top: 12px;
      font-size: 12px;
      font-weight: 400;
      color: #ebecfa;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    p {
      font-size: 14px;
      color: #ebecfa;
      font-weight: 400;
      margin-top: 6px;
    }

    &.active {
      opacity: 1;
      transform: translateY(-10px);
      transition: transform 0.3s ease-in-out;
    }

    @media (min-width: 1024px) {
      min-width: unset;
    }
  }
`
export { Runways }
