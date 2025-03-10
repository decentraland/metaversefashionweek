import { styled } from "styled-components"
import valuePropCentral from "../../img/misc/value-prop-central.png"
import heroTop from "../../img/vectors/logo-central.svg?url"
const Hero = () => {
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
          Decentraland is a social virtual world and the home of the Metaverse
          Fashion Week.
        </h2>
      </div>
      <div className="hero-bottom">
        <HeroBtn
          href="https://decentraland.org/download"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download To Get Ready
        </HeroBtn>
      </div>
    </HeroContainer>
  )
}

const HeroContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px 24px;
  max-width: 1240px;
  margin: 0 auto;
  color: #ececec;

  .hero-top {
    width: 100%;
    height: 100%;
    max-width: 750px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    .hero-top-middle-img {
      margin-block: 10px;
    }
  }

  .hero-middle {
    h2 {
      font-size: 20px;
      margin-left: 12px;
    }
  }

  .hero-bottom {
    margin-top: 40px;
    padding-left: 12px;
  }
`

const HeroBtn = styled.a`
  font-size: 40px;
  font-weight: 600;
  color: #ececec;
  text-decoration: none;
  border: 1px solid #ececec;
  border-radius: 26px;
  padding: 10px 20px;
  will-change: background-color, color;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;

  @media screen and (max-width: 568px) {
    font-size: 20px;
  }

  &:hover {
    background-color: #ececec;
    color: #0f1417;
  }
`
export { Hero }
