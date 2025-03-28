import { useEffect, useState } from "react"
import { styled } from "styled-components"
// components
const videoSource =
  "https://videos.pexels.com/video-files/30207950/12951574_2560_1440_24fps.mp4"
// assets

/**
 * Componente de sección de video que muestra un video en bucle con un marquee debajo
 * @returns {JSX.Element} Componente de sección de video
 */
const VideoSection = () => {
  const [isMobile, setIsMobile] = useState(false)
  console.log(isMobile)

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
    <VideoSectionContainer>
      <VideoContainer>
        <video autoPlay muted loop playsInline src={videoSource} />
      </VideoContainer>
    </VideoSectionContainer>
  )
}

const VideoSectionContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const VideoContainer = styled.div`
  flex: 1;
  width: 100%;
  margin-block: 12px;
  overflow: hidden;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export { VideoSection }
