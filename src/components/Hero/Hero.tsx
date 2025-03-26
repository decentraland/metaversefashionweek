import { useEffect, useState } from "react"
import { styled } from "styled-components"
import valuePropCentral from "../../img/misc/value-prop-central.png"
import heroTop from "../../img/vectors/logo-central.svg?url"
// import { DownloadBtn } from "../DownloadBtn/DownloadBtn"

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
              Decentraland is a social virtual world <br /> and the home of the
              Metaverse Fashion Week.
            </>
          ) : (
            <>
              Decentraland is a social virtual world and the home of the
              Metaverse Fashion Week.
            </>
          )}
        </h2>
      </div>
      {/* <div className="hero-bottom">
        <DownloadBtn />
      </div> */}
    </HeroContainer>
  )
}

const HeroContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1240px;
  margin: 0 auto;
  color: #ebecfa;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 8px;
  margin-top: 11px;

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
    padding-left: 12px;
    height: 100%;
    margin-top: 30px;
  }
`

export { Hero }
