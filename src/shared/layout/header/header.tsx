import './header.scss';

import lock from "../../../content/images/lock.png";

import usFlag from "../../../content/images/us_flag_small.png";

import iconDot from "../../../content/images/icon-dot-gov.svg";

import iconHttps from "../../../content/images/icon-https.svg";

import hudLogo from "../../../content/images/hud-logo.png";

const Header = () => {
  return (
    <div style={{ background: '#ffffff' }}>
       
      <header className="usa-header usa-header--extended" role="banner" >
        <div className="logo-navbar" style={{ background: '#11294c' }}>
          <div className="grid-row">
            <div className="grid-col-2  usa-logo">
              <img className="hud-logo" src={hudLogo} alt="HUD Logo" />
            </div>
            <div className="grid-col-8  header-txt">
              File a housing discrimination complaint with HUD
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
