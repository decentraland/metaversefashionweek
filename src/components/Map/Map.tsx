import styled from "styled-components"
import map from "../../img/map.png"
import iconsHeaderLeft from "../../img/vectors/iconos-header-left.svg?url"
import { breakpoints } from "../../utils/theme"

const Map = () => {
  return (
    <MapContainer>
      <div className="inner-container">
        <div className="map-left">
          <h2>MAP</h2>
          <img src={iconsHeaderLeft} alt="map" />
        </div>
        <div className="map-right">
          <h2>MAP</h2>
          <img src={map} alt="map" />
        </div>
      </div>
    </MapContainer>
  )
}

const MapContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #0f1417;
  padding: 0px 24px 24px 24px;

  @media screen and (min-width: ${breakpoints.md}) {
    padding: 24px;
  }

  .inner-container {
    width: 100%;
    height: 100%;
    max-width: 1200px;
    margin-inline: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 42px;

    .map-left {
      height: 100%;
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      flex-direction: column;
      border-right: 1px solid #ebecfa;
      padding-right: 24px;
      height: 600px;

      h2 {
        font-size: 32px;
        font-weight: 700;
        color: #ebecfa;
        letter-spacing: 0.1em;
      }

      img {
        width: 180px;
        object-fit: cover;
      }

      @media screen and (max-width: ${breakpoints.md}) {
        display: none;
      }
    }

    .map-right {
      height: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;

      h2 {
        font-size: 32px;
        font-weight: 700;
        color: #ebecfa;
        letter-spacing: 0.1em;
        margin-left: 24px;
        padding-left: 24px;
        border-left: 1px solid #ebecfa;
        height: 120px;
        display: flex;
        align-items: center;
        justify-content: center;

        @media screen and (min-width: ${breakpoints.md}) {
          display: none;
        }
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        max-height: 600px;
        border-radius: 24px;
        border: 1px solid #ebecfa;
      }
    }
  }
`

export { Map }
