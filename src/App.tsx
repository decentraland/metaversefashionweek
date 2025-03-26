// Styled Components
import { styled } from "styled-components"
// Components
import { Hero } from "./components/Hero/Hero"
import { Navbar } from "./components/Navbar/Navbar"
// CSS
import "./css/global.css"
// Images
// import { VideoSection } from "./components/VideoSection"

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <AppContainer>
        <Hero />
        {/* <VideoSection /> */}
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

export { App }
