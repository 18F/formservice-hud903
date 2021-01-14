import './header.scss';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
/* eslint @typescript-eslint/no-var-requires: "off" */
const lock = require('../../../../content/images/lock.png');
/* eslint @typescript-eslint/no-var-requires: "off" */
const usFlag = require('../../../../content/images/us_flag_small.png');
/* eslint @typescript-eslint/no-var-requires: "off" */
const iconDot = require('../../../../content/images/icon-dot-gov.svg');
/* eslint @typescript-eslint/no-var-requires: "off" */
const iconHttps = require('../../../../content/images/icon-https.svg');
/* eslint @typescript-eslint/no-var-requires: "off" */
const hudLogo = require('../../../../content/images/hud-logo.png');
const Header = () => {
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
                <p className="usa-banner__header-text" >An official website of the United States government</p>
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
      
      <header className="usa-nav-container" role="banner" >
        <Link to="/">
          <div>
            <img className="header-banner" src={hudLogo} alt="Home" />
          </div>
        </Link>
      </header>
    </div>
  );
};

export default Header;
