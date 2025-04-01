import { useCallback, useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { styled } from "styled-components"
const videoDesktopNoText = "src/videos/teaser-desktop-no-text.mp4"
const videoMobile = "src/videos/teaser-mobile.mp4"

const VideoSection = () => {
  const [videoElement, setVideoElement] = useState<HTMLVideoElement | null>(
    null
  )
  const [isMobile, setIsMobile] = useState(false)
  // const [videoSource, setVideoSource] = useState(
  //   isMobile ? videoMobile : videoDesktopNoText
  // )
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
      // setVideoSource(mobileWidth ? videoMobile : videoDesktopNoText)
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  useEffect(() => {
    if (!videoElement) return

    if (inView) {
      console.log("inView and videoElement", videoElement)
      videoElement.muted = false
      videoElement.play().catch((error) => {
        console.error("Error al reproducir el video:", error)
        if (error.name === "NotAllowedError") {
          videoElement.muted = true
          videoElement.play().catch((e) => {
            console.error("Error al reproducir el video silenciado:", e)
          })
        }
      })
    } else {
      videoElement.muted = false
      videoElement.pause()
    }
  }, [inView, videoElement, window.innerWidth])

  return (
    <VideoSectionContainer>
      <VideoContainer>
        <video
          ref={setRefs}
          loop
          playsInline
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

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export { VideoSection }
