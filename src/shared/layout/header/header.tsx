import './header.scss';
import React from 'react';
import lock from "../../../content/images/lock.png";

import usFlag from "../../../content/images/us_flag_small.png";

import iconDot from "../../../content/images/icon-dot-gov.svg";

import iconHttps from "../../../content/images/icon-https.svg";

import hudLogo from "../../../content/images/hud-logo.png";

const Header = () =>{
  return (
    <div style={{ background: '#ffffff' }}>
      <section className="usa-banner" aria-label="Official government website">
        <div className="usa-accordion">
          <header className="usa-banner__header">
            <div className="usa-banner__inner">
              <div className="grid-col-auto">
                <img className="usa-banner__header-flag" src={usFlag} alt="U.S. flag" />
              </div>
              <div className="grid-col-fill tablet:grid-col-auto">
                <p className="usa-banner__header-text">An official website of the United States Government</p>
                <p className="usa-banner__header-action" aria-hidden="true">Here’s how you know</p>
              </div>
              <button className="usa-accordion__button usa-banner__button" aria-expanded="false" aria-controls="gov-banner">
                <span className="usa-banner__button-text">Here’s how you know</span>
              </button>
            </div>
          </header>
          <div className="usa-banner__content usa-accordion__content" id="gov-banner" hidden>
            <div className="grid-row grid-gap-lg">
              <div className="usa-banner__guidance tablet:grid-col-6">
                <img className="usa-banner__icon usa-media-block__img" src={iconDot} alt="Dot gov" />
                <div className="usa-media-block__body">
                  <p>
                    <strong>
                      Official websites use .gov
                            </strong>
                    <br />
                        A <strong>.gov</strong> website belongs to an official government organization in the United States.

                        </p>
                </div>
              </div>
              <div className="usa-banner__guidance tablet:grid-col-6">
                <img className="usa-banner__icon usa-media-block__img" src={iconHttps} alt="Https" />
                <div className="usa-media-block__body">
                  <p>
                    <strong>
                      Secure .gov websites use HTTPS
                            </strong>
                    <br />
                        A <strong>lock</strong> (
                            <span />
                    <img src={lock} alt="A locked padlock" />
                            ) or <strong>https://</strong> means you’ve safely connected to the .gov website. Share sensitive information only on official, secure websites.

                        </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
