import { useEffect, useState } from "react"
import { styled } from "styled-components"
import bgImage from "../../img/misc/background.webp"
import valuePropCentral from "../../img/misc/value-prop-central.png"
import LeftNavbarIconSrc from "../../img/vectors/iconos-header-left.svg?url"
import heroTop from "../../img/vectors/logo-central.svg?url"
import { JumpInBtn } from "../JumpInBtn/JumpInBtn"

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      const mobileWidth = window.innerWidth <= 568
      setIsMobile(mobileWidth)
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <HeroContainer>
      <HeroInnerContainer>
        <div className="hero-top">
          <img className="hero-top-img" src={heroTop} alt="hero-top" />
          <img
            className="hero-top-middle-img"
            src={valuePropCentral}
            alt="hero-top"
          />
        </div>
        <div className="hero-middle">
          <h2>
            {isMobile ? (
              <>
                Decentraland is a social virtual world <br /> and the home of
                Metaverse Fashion Week.
              </>
            ) : (
              <>
                Decentraland is a social virtual world and the home of Metaverse
                Fashion Week.
              </>
            )}
          </h2>
        </div>
        <div className="hero-bottom">
          <JumpInBtn />
        </div>
        <div className="mobile-icons">
          <img src={LeftNavbarIconSrc} alt="Decentraland Fashion Festival" />
        </div>
      </HeroInnerContainer>
    </HeroContainer>
  )
}

const HeroContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${bgImage});
  background-position: 62% 12%;
  background-size: 360%;

  @media (min-width: 568px) {
    padding-top: 100px;
    background-position: 8% 69%;
    background-size: 150%;
    padding-top: 100px;
  }
`

const HeroInnerContainer = styled.div`
  width: 100%;
  height: auto;
  max-width: 1240px;
  margin: 0 auto;
  color: #ebecfa;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 8px;
  margin-top: 11px;
  position: relative;

  .mobile-icons {
    position: relative;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-block: auto 2rem;

    img {
      width: 100%;
      height: 100%;
      max-width: 200px;
      object-fit: contain;
    }

    @media (min-width: 568px) {
      display: none;
    }
  }

  @media screen and (max-width: 568px) {
    padding: 0px;
    padding-inline: 14px;
  }

  .hero-top {
    width: 100%;
    height: 100%;
    max-width: 750px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .hero-top-middle-img {
      margin-top: 8px;
    }
  }

  .hero-middle {
    margin-top: 8px;

    h2 {
      font-size: 21px;
      margin-left: 12px;
      color: #ebecfa;
    }

    @media screen and (max-width: 568px) {
      h2 {
        font-size: 16px;
      }
    }
  }

  .hero-bottom {
    margin-top: 10px;
    padding-inline: 14px;
    margin-bottom: 100px;

    .available-on-text {
      padding-top: 0;
    }
  }
`

export { Hero }
