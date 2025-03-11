import { useEffect, useState } from "react"
import { styled } from "styled-components"
import valuePropCentral from "../../img/misc/value-prop-central.png"
import heroTop from "../../img/vectors/logo-central.svg?url"

enum DownloadLinks {
  MAC_ARM64 = "https://explorer-artifacts.decentraland.org/launcher/dcl/Decentraland%20Launcher-mac-arm64.dmg",
  MAC_X64 = "https://explorer-artifacts.decentraland.org/launcher/dcl/Decentraland%20Launcher-mac-x64.dmg",
  WIN_X64 = "https://explorer-artifacts.decentraland.org/launcher/dcl/Decentraland%20Launcher-win-x64.exe",
}

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [downloadLink, setDownloadLink] = useState("")

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 568)
    }
    window.addEventListener("resize", handleResize)

    handleDownloadLink()
    handleResize()
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const handleDownloadLink = () => {
    const userAgent = window.navigator.userAgent.toLowerCase()
    switch (true) {
      case userAgent.includes("mac") && userAgent.includes("arm64"):
        setDownloadLink(DownloadLinks.MAC_ARM64)
        break
      case userAgent.includes("mac"):
        setDownloadLink(DownloadLinks.MAC_X64)
        break
      case userAgent.includes("win"):
        setDownloadLink(DownloadLinks.WIN_X64)
        break
      default:
        setDownloadLink("")
    }
  }

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
      <div className="hero-bottom">
        <HeroBtn href={downloadLink} target="_blank" rel="noopener noreferrer">
          Download To Get Ready
        </HeroBtn>
      </div>
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
    margin-top: 44px;
  }
`

const HeroBtn = styled.a`
  font-size: 32px;
  font-weight: 600;
  color: #0f1417;
  background-color: #ebecfa;
  text-decoration: none;
  border: 1px solid #ebecfa;
  border-radius: 26px;
  padding: 25px 55px;
  will-change: background-color, color;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;

  @media screen and (max-width: 568px) {
    font-size: 21px;
    padding: 20px 32px;
  }

  &:hover {
    color: #ebecfa;
    background-color: #0f1417;
  }
`
export { Hero }
