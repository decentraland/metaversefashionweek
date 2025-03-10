import { FaInstagram, FaXTwitter } from "react-icons/fa6"
import { styled } from "styled-components"
import logo from "../../img/misc/logo.png"
import iconsHeaderLeft from "../../img/vectors/iconos-header-left.svg?url"
const Navbar = () => {
  return (
    <NavbarContainer>
      <div className="navbar-inner">
        <div className="navbar-left">
          <img src={iconsHeaderLeft} alt="icons-header-left" />
        </div>
        <div className="navbar-right">
          <img src={logo} className="navbar-logo" alt="logo" />
          <div className="navbar-social-icons">
            <SocialIcon
              href="https://www.instagram.com/decentralandfashionfestival/"
              target="_blank"
            >
              <FaInstagram />
            </SocialIcon>
            <SocialIcon
              href="https://www.instagram.com/decentralandfashionfestival/"
              target="_blank"
            >
              <FaXTwitter />
            </SocialIcon>
          </div>
        </div>
      </div>
    </NavbarContainer>
  )
}

const NavbarContainer = styled.div`
  color: #fff;
  position: relative;
  width: 100%;
  height: 100%;

  .navbar-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1240px;
    height: 100%;
    margin: 0 auto;
    border-bottom: 1px solid #fff;
    padding: 5px 0;

    .navbar-left {
      width: 200px;
      height: 100%;

      @media screen and (max-width: 568px) {
        display: none;
      }
    }

    .navbar-right {
      display: flex;
      align-items: center;
      gap: 10px;

      @media screen and (max-width: 568px) {
        margin-left: auto;
        padding-right: 12px;
      }

      .navbar-logo {
        height: 40px;
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
  width: 20px;
  height: 20px;
  background-color: #ececec;
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
