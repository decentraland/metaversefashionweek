import { FaDiscord, FaInstagram, FaXTwitter } from "react-icons/fa6"
import { styled } from "styled-components"
import decentralandLogo from "../../img/faq/logo.png"
import logo from "../../img/misc/logo.png"

const Navbar = () => {
  return (
    <NavbarContainer>
      <div className="navbar-inner">
        <div className="navbar-left">
          <img src={decentralandLogo} alt="decentraland-logo" />
          <div className="navbar-navigation">
            <span>
              <a href="#schedule">Schedule</a>
            </span>
            <span>
              <a href="#talks">Talks</a>
            </span>
            <span>
              <a href="#runways">Runways</a>
            </span>
            <span>
              <a href="#faq">FAQ</a>
            </span>
          </div>
        </div>
        <div className="navbar-right">
          <a
            href="https://decentraland.org/?utm_org=dcl&utm_source=mvfwlanding&utm_medium=organic&utm_campaign=mvfw&utm_term=header
"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={logo} className="navbar-logo" alt="logo" />
          </a>
          <div className="navbar-social-icons">
            <SocialIcon
              href="https://www.instagram.com/decentraland_foundation/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </SocialIcon>
            <SocialIcon
              href="https://x.com/decentraland
"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter />
            </SocialIcon>
            <SocialIcon
              href="https://decentraland.org/discord/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDiscord />
            </SocialIcon>
          </div>
        </div>
      </div>
    </NavbarContainer>
  )
}

const NavbarContainer = styled.div`
  color: #ebecfa;
  position: relative;
  width: 100%;
  height: 100%;
  padding-inline: 24px;

  .navbar-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1240px;
    height: 100%;
    margin: 0 auto;
    // border-bottom: 1px solid #ebecfa;
    padding-block: 8px;

    @media screen and (max-width: 568px) {
      padding-inline: 0;
    }

    .navbar-left {
      width: fill-available;
      height: 100%;
      display: flex;
      align-items: center;
      gap: 12px;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        max-height: 40px;
        margin-top: 2px;
      }

      @media screen and (max-width: 568px) {
        display: none;
      }

      .navbar-navigation {
        display: flex;
        align-items: center;
        gap: 24px;
        margin-left: 24px;

        @media screen and (max-width: 768px) {
          display: none;
        }

        span {
          a {
            text-decoration: none;
            color: #ebecfa;
            letter-spacing: 0.08em;
            text-transform: uppercase;
          }
        }
      }
    }

    .navbar-right {
      display: flex;
      align-items: center;
      gap: 10px;

      @media screen and (max-width: 568px) {
        margin-left: auto;
        padding-top: 10px;
      }

      .navbar-logo {
        height: 100%;
        max-height: 39px;
        margin-top: 3px;

        > img {
          height: 100%;
        }
      }

      .navbar-social-icons {
        display: flex;
        align-items: center;
        gap: 10px;
      }
    }
  }
`

const SocialIcon = styled.a`
  background-color: #ebecfa;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;

  svg {
    width: 20px;
    height: 20px;
    fill: #0f1417;
  }
`

export { Navbar }
