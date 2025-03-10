// Styled Components
import { styled } from "styled-components"
// Components
import { Hero } from "./components/Hero/Hero"
import { Navbar } from "./components/Navbar/Navbar"
// CSS
import "./css/global.css"
// Images
import bgImage from "./img/misc/background.webp"
import LeftNavbarIconSrc from "./img/vectors/iconos-header-left.svg?url"

const App = () => {
  return (
    <>
      <Navbar />
      <AppContainer>
        <Hero />
        <div className="mobile-icons">
          <img src={LeftNavbarIconSrc} alt="Decentraland Fashion Festival" />
        </div>
      </AppContainer>
    </>
  )
}

const AppContainer = styled.div`
  background-color: #0f1417;
  color: #fff;
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
  background-image: url(${bgImage});
  background-position: 62% 12%;
  background-size: 360%;

  @media (min-width: 568px) {
    padding-top: 100px;
    background-position: 20%;
    background-size: 150%;
    padding-top: 100px;
  }

  .mobile-icons {
    position: relative;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-block: auto 5rem;

    img {
      width: 100%;
      height: 100%;
      max-width: 200px;
      object-fit: contain;
    }

    @media (min-width: 568px) {
      display: none;
    }
  }
`

export { App }
