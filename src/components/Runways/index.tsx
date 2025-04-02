import { useRef, useState } from "react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6"
import styled from "styled-components"
import { runwaysData } from "./data"

const Runways = () => {
  const [currentRunway, setCurrentRunway] = useState(0)
  const runwayRefs = useRef<(HTMLDivElement | null)[]>([])

  const handleRunwayChange = (index: number) => {
    setCurrentRunway(index - 1)
    scrollToRunway(index - 1)
  }

  const handleNextRunway = () => {
    if (currentRunway < runwaysData.length - 1) {
      setCurrentRunway(currentRunway + 1)
      scrollToRunway(currentRunway + 1)
    }
  }

  const handlePreviousRunway = () => {
    if (currentRunway > 0) {
      setCurrentRunway(currentRunway - 1)
      scrollToRunway(currentRunway - 1)
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

  return (
    <Container>
      <div className="header">
        <div className="header__left">
          <h2>6 Runways</h2>
          <span className="actions">
            <button
              className="action-button"
              disabled={currentRunway === 0}
              onClick={handlePreviousRunway}
            >
              <FaChevronLeft fill="#000" />
            </button>
            <button
              className="action-button"
              disabled={currentRunway === runwaysData.length - 1}
              onClick={handleNextRunway}
            >
              <FaChevronRight fill="#000" />
            </button>
          </span>
        </div>
        <div className="header__right">
          <h2>{runwaysData[currentRunway].title}</h2>
          <p>{runwaysData[currentRunway].description}</p>
        </div>
      </div>
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

  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
    width: 100%;
    height: 100%;
    // max-width: 70%;

    .header__left {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-end;
      gap: 24px;

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

      @media (min-width: 768px) {
        min-width: 200px;
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

  .runway__item {
    width: 100%;
    height: 100%;
    cursor: pointer;
    min-width: 220px;

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

export { Runways }
