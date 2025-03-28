// Styled Components
import { styled } from "styled-components"
// Components
import { Faq } from "./components/Faq/Faq"
import { Footer } from "./components/Footer/Footer"
import { Hero } from "./components/Hero/Hero"
import { LiveTalks } from "./components/LiveTalks/LiveTalks"
import { Map } from "./components/Map/Map"
import { Marquee } from "./components/Marquee/Marquee"
import { Navbar } from "./components/Navbar/Navbar"
// CSS
import "./css/global.css"
import { ScheduleSection } from "./components/ScheduleSection/ScheduleSection"
import { VideoSection } from "./components/VideoSection"
// Images
const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <AppContainer>
        <Hero />
        <MarqueeWrapper>
          <Marquee />
        </MarqueeWrapper>
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
        <Map />
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
