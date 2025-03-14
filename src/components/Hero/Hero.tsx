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
  MOBILE_REDIRECT = "https://decentraland.org/download/",
}

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [downloadLink, setDownloadLink] = useState("")
  const [isMac, setIsMac] = useState(false)
  const [isWindows, setIsWindows] = useState(false)
  const [isKnownMacArch, setIsKnownMacArch] = useState(true)
  const [isLoadingUserAgentData, userAgentData] = useAdvancedUserAgentData()

  useEffect(() => {
    const handleResize = () => {
      const mobileWidth = window.innerWidth <= 568
      setIsMobile(mobileWidth)
    }

    window.addEventListener("resize", handleResize)

    handleResize()
    getUserAgentData()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  useEffect(() => {
    if (userAgentData) {
      getUserAgentData()
    }
  }, [userAgentData])

  /**
   * Determines if the current device is mobile based on screen size and user agent
   */
  const isMobileDevice = () => {
    if (isMobile) return true
    if (!userAgentData) return false
    return userAgentData.mobile
  }

  /**
   * Determines the user's operating system and sets the appropriate download links.
   * Uses user agent data to identify if the user is on macOS or Windows,
   * and configures the download link according to the CPU architecture.
   * For mobile devices, sets a redirect to the Decentraland download page.
   */
  const getUserAgentData = () => {
    if (!userAgentData) return

    const isMacOS = userAgentData?.os.name?.includes("macOS") ?? false
    const isWin = userAgentData?.os.name?.includes("Windows") ?? false
    const mobileDevice = isMobileDevice()

    setIsMac(isMacOS)
    setIsWindows(isWin)

    // For mobile devices, set the download link to the Decentraland download page
    if (mobileDevice) {
      setDownloadLink(DownloadLinks.MOBILE_REDIRECT)
      return
    }

    if (isMacOS) {
      // Verify if we can determine the architecture
      if (!userAgentData.cpu.architecture) {
        // We don't know which architecture
        setIsKnownMacArch(false)
        setDownloadLink(DownloadLinks.MAC_ARM64) // Default to Apple Silicon
      } else if (userAgentData.cpu.architecture.includes("arm")) {
        // It's an ARM device (Apple Silicon)
        setDownloadLink(DownloadLinks.MAC_ARM64)
        setIsKnownMacArch(true)
      } else {
        // If it's not ARM, we assume it's Intel
        setDownloadLink(DownloadLinks.MAC_X64)
        setIsKnownMacArch(true)
      }
    } else if (isWin) {
      setDownloadLink(DownloadLinks.WIN_X64)
    } else {
      setDownloadLink(DownloadLinks.UNKNOWN)
    }
  }

  /**
   * Handles the download link click event.
   * Tracks the download event in analytics if available and if not on mobile,
   * or opens the link in a new tab if an error occurs.
   *
   * @param e - Mouse click event on the download link
   */
  const handleDownloadLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
    try {
      const mobileDevice = isMobileDevice()

      // Only track download events if not on mobile
      if (typeof analytics !== "undefined" && !mobileDevice) {
        analytics.track("Download", {
          href: e.currentTarget.href,
          section: "MVFW Hero",
        })
      }
    } catch (error) {
      window.open(e.currentTarget.href, "_blank")
    }
  }

  /**
   * Renders the appropriate download button based on device type and OS
   */
  const renderDownloadButton = () => {
    const mobileDevice = isMobileDevice()

    // For mobile devices, show a generic download button that redirects to the download page
    if (mobileDevice) {
      return (
        <HeroBtn
          href={DownloadLinks.MOBILE_REDIRECT}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleDownloadLink}
        >
          DOWNLOAD DECENTRALAND
        </HeroBtn>
      )
    }

    // For Mac with unknown architecture, show both options
    if (isMac && !isKnownMacArch) {
      return (
        <div className="mac-buttons-container">
          <HeroBtn
            href={DownloadLinks.MAC_ARM64}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleDownloadLink}
          >
            DOWNLOAD FOR MAC (APPLE SILICON)
            <FaApple />
          </HeroBtn>
          <HeroBtn
            href={DownloadLinks.MAC_X64}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleDownloadLink}
          >
            DOWNLOAD FOR MAC (INTEL)
            <FaApple />
          </HeroBtn>
        </div>
      )
    }

    // For desktop OS (Mac or Windows), show the appropriate button
    if (userAgentData && (isMac || isWindows)) {
      return (
        <HeroBtn
          href={downloadLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleDownloadLink}
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
      )
    }

    return null
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
            {renderDownloadButton()}

            {/* Only show alternative download option for desktop devices and when architecture is known */}
            {!isMobile && (isMac || isWindows) && isKnownMacArch && (
              <a
                className="hero-bottom-available-on-text"
                href={isMac ? DownloadLinks.WIN_X64 : DownloadLinks.MAC_ARM64}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleDownloadLink}
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
