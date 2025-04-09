import { useEffect, useState } from "react"
import { FaApple, FaWindows } from "react-icons/fa6"
import { styled } from "styled-components"
import { useAdvancedUserAgentData } from "../../hooks/useAdvancedUserAgentData"

enum DownloadLinks {
  MAC_ARM64 = "https://explorer-artifacts.decentraland.org/launcher/dcl/Decentraland%20Launcher-mac-arm64.dmg",
  MAC_X64 = "https://explorer-artifacts.decentraland.org/launcher/dcl/Decentraland%20Launcher-mac-x64.dmg",
  WIN_X64 = "https://explorer-artifacts.decentraland.org/launcher/dcl/Decentraland%20Launcher-win-x64.exe",
  UNKNOWN = "",
  MOBILE_REDIRECT = "https://decentraland.org/download/",
}

interface DownloadBtnProps {
  className?: string
  showAvailableOnText?: boolean
}

const DownloadBtn = ({
  className,
  showAvailableOnText = true,
}: DownloadBtnProps) => {
  const [downloadLink, setDownloadLink] = useState("")
  const [isMobile, setIsMobile] = useState(false)
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

  const isMobileDevice = () => {
    if (isMobile) return true
    if (!userAgentData) return false
    return userAgentData.mobile
  }

  const getUserAgentData = () => {
    if (!userAgentData) return

    const isMacOS = userAgentData?.os.name?.includes("macOS") ?? false
    const isWin = userAgentData?.os.name?.includes("Windows") ?? false
    const mobileDevice = isMobileDevice()

    setIsMac(isMacOS)
    setIsWindows(isWin)

    if (mobileDevice) {
      setDownloadLink(DownloadLinks.MOBILE_REDIRECT)
      return
    }

    if (isMacOS) {
      if (!userAgentData.cpu.architecture) {
        setIsKnownMacArch(false)
        setDownloadLink(DownloadLinks.MAC_ARM64)
      } else if (userAgentData.cpu.architecture.includes("arm")) {
        setDownloadLink(DownloadLinks.MAC_ARM64)
        setIsKnownMacArch(true)
      } else {
        setDownloadLink(DownloadLinks.MAC_X64)
        setIsKnownMacArch(true)
      }
    } else if (isWin) {
      setDownloadLink(DownloadLinks.WIN_X64)
    } else {
      setDownloadLink(DownloadLinks.UNKNOWN)
    }
  }

  const handleDownloadLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
    try {
      const mobileDevice = isMobileDevice()

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

  const renderDownloadButton = () => {
    const mobileDevice = isMobileDevice()
    if (mobileDevice) {
      return (
        <DownloadButton
          className={className}
          href={DownloadLinks.MOBILE_REDIRECT}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleDownloadLink}
        >
          DOWNLOAD DECENTRALAND
        </DownloadButton>
      )
    }

    if (isMac && !isKnownMacArch) {
      return (
        <div className="mac-buttons-container">
          <DownloadButton
            className={className}
            href={DownloadLinks.MAC_ARM64}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleDownloadLink}
          >
            DOWNLOAD FOR MAC (APPLE SILICON)
            <FaApple />
          </DownloadButton>
          <DownloadButton
            className={className}
            href={DownloadLinks.MAC_X64}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleDownloadLink}
          >
            DOWNLOAD FOR MAC (INTEL)
            <FaApple />
          </DownloadButton>
        </div>
      )
    }

    if (userAgentData && (isMac || isWindows)) {
      return (
        <DownloadButton
          className={className}
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
        </DownloadButton>
      )
    }

    return null
  }

  if (isLoadingUserAgentData || !userAgentData) return null

  return (
    <DownloadButtonsContainer>
      {renderDownloadButton()}
      {!isMobile &&
        (isMac || isWindows) &&
        isKnownMacArch &&
        showAvailableOnText && (
          <a
            className="available-on-text"
            href={isMac ? DownloadLinks.WIN_X64 : DownloadLinks.MAC_ARM64}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleDownloadLink}
          >
            Also available on {isMac ? <FaWindows /> : <FaApple />}
          </a>
        )}
    </DownloadButtonsContainer>
  )
}

const DownloadButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 12px;

  .available-on-text {
    padding-top: 16px;
  }
`

const DownloadButton = styled.a`
  font-size: 16px;
  font-weight: 400;
  color: #ebecfa;
  background-color: #0f1417;
  text-decoration: none;
  border: 2px solid #ebecfa;
  border-radius: 12px;
  padding: 12px 24px;
  will-change: background-color, color;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 12px;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;

  @media screen and (max-width: 568px) {
    font-size: 16px;
    padding: 12px 24px;
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

const StyledDownloadBtn = styled(DownloadBtn)`
  .download-buttons-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 12px;
  }

  .mac-buttons-container {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
  }

  .available-on-text {
    font-size: 16px;
    margin-top: 16px;
    color: #ebecfa;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    border: 1px solid #ebecfa;
  }
`

export { StyledDownloadBtn as DownloadBtn }
