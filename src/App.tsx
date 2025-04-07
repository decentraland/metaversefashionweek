// Styled Components
import { useEffect, useRef } from "react"
import Lenis from "lenis"
import { styled } from "styled-components"
// Components
import { ExperiencesSection } from "./components/ExperiencesSection"
import { Faq } from "./components/Faq/Faq"
import { Footer } from "./components/Footer/Footer"
import { Carousel } from "./components/Hero/Carousel"
import { Hero } from "./components/Hero/Hero"
import { LiveTalks } from "./components/LiveTalks/LiveTalks"
// import { Map } from "./components/Map/Map"
import { Marquee } from "./components/Marquee/Marquee"
import { Navbar } from "./components/Navbar/Navbar"
// CSS
import "./css/global.css"
import { ScheduleSection } from "./components/ScheduleSection/ScheduleSection"
import { VideoSection } from "./components/VideoSection"
// Images

const App = () => {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    // Inicializar Lenis para scroll suave
    lenisRef.current = new Lenis({
      duration: 1.8,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    })

    // Función para actualizar Lenis en cada frame
    const raf = (time: number) => {
      lenisRef.current?.raf(time)
      requestAnimationFrame(raf)
    }

    // Iniciar el loop de animación
    requestAnimationFrame(raf)

    // Limpiar al desmontar
    return () => {
      lenisRef.current?.destroy()
    }
  }, [])

  return (
    <div className="app-container">
      <Navbar />
      <AppContainer>
        <Hero />
        <Carousel />
        {/* <MarqueeWrapper>
          <Marquee />
        </MarqueeWrapper> */}
        <ScheduleSection />
        <MarqueeWrapper>
          <Marquee />
        </MarqueeWrapper>
        <VideoSection />
        <MarqueeWrapper>
          <Marquee />
        </MarqueeWrapper>
        <LiveTalks />
        <MarqueeWrapper>
          <Marquee />
        </MarqueeWrapper>
        <ExperiencesSection />
        <MarqueeWrapper>
          <Marquee />
        </MarqueeWrapper>

        <Faq />
        <Footer />
      </AppContainer>
    </div>
  )
}

const AppContainer = styled.div`
  background-color: #0f1417;
  color: #ebecfa;
  position: relative;
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 50px);
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
`

const MarqueeWrapper = styled.div`
  width: 100%;
`

export { App }
