import { useEffect, useState } from "react"
import { FaApple, FaWindows } from "react-icons/fa6"
import { styled } from "styled-components"
import { useAdvancedUserAgentData } from "../../hooks/useAdvancedUserAgentData"
import valuePropCentral from "../../img/misc/value-prop-central.png"
import heroTop from "../../img/vectors/logo-central.svg?url"

enum DownloadLinks {
  MAC_ARM64 = "https://explorer-artifacts.decentraland.org/launcher/dcl/Decentraland%20Launcher-mac-arm64.dmg",
  MAC_X64 = "https://explorer-artifacts.decentraland.org/launcher/dcl/Decentraland%20Launcher-mac-x64.dmg",
  WIN_X64 = "https://explorer-artifacts.decentraland.org/launcher/dcl/Decentraland%20Launcher-win-x64.exe",
  UNKNOWN = "",
}

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [downloadLink, setDownloadLink] = useState("")
  const [isMac, setIsMac] = useState(false)
  const [isWindows, setIsWindows] = useState(false)
  const [isKnownMacArch, setIsKnownMacArch] = useState(true)
  const [isLoadingUserAgentData, userAgentData] = useAdvancedUserAgentData()

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 568)

    window.addEventListener("resize", handleResize)

    handleResize()
    handleDownloadLink()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])
  /**
   * Determines and sets the appropriate download link based on the user's operating system
   * and device architecture.
   *
   * - For macOS:
   *   - If architecture is arm64 (Apple Silicon), sets the link for Mac ARM64
   *   - If architecture is x86_64 (Intel), sets the link for Mac x64
   *   - If architecture cannot be determined, marks the architecture as unknown
   * - For Windows, sets the link for Windows x64
   * - For other operating systems, sets an empty link
   */
  const handleDownloadLink = () => {
    setIsMac(userAgentData?.os.name?.includes("macOS") ?? false)
    setIsWindows(userAgentData?.os.name?.includes("Windows") ?? false)

    // Verificar si podemos determinar la arquitectura de Mac
    if (isMac) {
      if (userAgentData?.cpu.architecture?.includes("arm64")) {
        setDownloadLink(DownloadLinks.MAC_ARM64)
        setIsKnownMacArch(true)
      } else if (userAgentData?.cpu.architecture?.includes("x86_64")) {
        setDownloadLink(DownloadLinks.MAC_X64)
        setIsKnownMacArch(true)
      } else {
        setIsKnownMacArch(false)
      }
    } else if (isWindows) {
      setDownloadLink(DownloadLinks.WIN_X64)
    } else {
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
      {isLoadingUserAgentData || !userAgentData ? null : (
        <div>
          <div className="hero-bottom">
            {/* Mostrar ambos botones para Mac cuando no se conoce la arquitectura */}
            {isMac && !isKnownMacArch ? (
              <div className="mac-buttons-container">
                <HeroBtn
                  href={DownloadLinks.MAC_ARM64}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DOWNLOAD FOR MAC (APPLE SILICON)
                  <FaApple />
                </HeroBtn>
                <HeroBtn
                  href={DownloadLinks.MAC_X64}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DOWNLOAD FOR MAC (INTEL)
                  <FaApple />
                </HeroBtn>
              </div>
            ) : userAgentData && (isMac || isWindows) ? (
              <>
                <HeroBtn
                  href={downloadLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {isMac && !isWindows ? (
                    <>
                      DOWNLOAD FOR MACOS
                      <FaApple />
                    </>
                  ) : null}
                  {isWindows ? (
                    <>
                      DOWNLOAD FOR WINDOWS
                      <FaWindows />
                    </>
                  ) : null}
                </HeroBtn>
              </>
            ) : null}

            {/* Mostrar el enlace alternativo solo si conocemos la plataforma y no estamos mostrando ambos botones de Mac */}
            {(isMac || isWindows) && isKnownMacArch && (
              <a
                className="hero-bottom-available-on-text"
                href={isMac ? DownloadLinks.WIN_X64 : DownloadLinks.MAC_ARM64}
                target="_blank"
                rel="noopener noreferrer"
              >
                Also available on {isMac ? <FaWindows /> : <FaApple />}
              </a>
            )}
          </div>
        </div>
      )}
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
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 12px;

    .mac-buttons-container {
      display: flex;
      flex-direction: column;
      gap: 16px;
      width: 100%;
    }

    .hero-bottom-available-on-text {
      font-size: 16px;
      color: #ebecfa;
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      margin-top: 8px;
    }
  }
`

const HeroBtn = styled.a`
  font-size: 32px;
  font-weight: 400;
  color: #ebecfa;
  background-color: #0f1417;
  text-decoration: none;
  border: 1px solid #ebecfa;
  border-radius: 40px;
  padding: 25px 48px;
  will-change: background-color, color;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;

  @media screen and (max-width: 568px) {
    font-size: 21px;
    padding: 20px 32px;
  }

  &:hover {
    color: #0f1417;
    background-color: #ebecfa;

    svg {
      path {
        fill: #0f1417;
      }
    }
  }

  svg {
    height: 32px;
    width: 32px;
  }
`
export { Hero }
