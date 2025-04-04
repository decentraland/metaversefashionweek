import { useCallback, useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { IoVolumeHigh, IoVolumeMute } from "react-icons/io5"
import { styled } from "styled-components"

// Rutas de los videos usando la carpeta public
const videoDesktopNoText = "/videos/teaser-desktop-no-text.mp4"
const videoMobile = "/videos/teaser-mobile.mp4"

const VideoSection = () => {
  const [videoElement, setVideoElement] = useState<HTMLVideoElement | null>(
    null
  )
  const [isMobile, setIsMobile] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const { ref: inViewRef, inView } = useInView({
    threshold: 0,
  })

  const setRefs = useCallback(
    (node: HTMLVideoElement | null) => {
      setVideoElement(node)
      inViewRef(node)
    },
    [inViewRef]
  )

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

  useEffect(() => {
    if (!videoElement) return
    videoElement.muted = isMuted
  }, [isMuted, videoElement])

  useEffect(() => {
    if (!videoElement) return

    if (inView) {
      videoElement.play().catch((error) => {
        console.error("Error al reproducir el video:", error)
        if (error.name === "NotAllowedError") {
          videoElement.play().catch((e) => {
            console.error("Error al reproducir el video silenciado:", e)
          })
        }
      })
    } else {
      videoElement.muted = true
      videoElement.pause()
    }
  }, [inView, videoElement])

  return (
    <VideoSectionContainer>
      <VideoContainer>
        <button className="mute-button" onClick={() => setIsMuted(!isMuted)}>
          {isMuted ? <IoVolumeMute /> : <IoVolumeHigh />}
        </button>
        <video
          ref={setRefs}
          loop
          playsInline
          muted={isMuted}
          src={isMobile ? videoMobile : videoDesktopNoText}
        />
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
  overflow: hidden;
  position: relative;

  .mute-button {
    position: absolute;
    bottom: 24px;
    right: 24px;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 12px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    color: white;
    font-size: 24px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
    transition: all 0.3s ease;

    &:hover {
      background-color: rgba(0, 0, 0, 0.7);
    }
  }

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export { VideoSection }
