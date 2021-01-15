import './footer.scss';
import React, { useState } from 'react';
/* eslint @typescript-eslint/no-var-requires: "off" */
const faasLogo = require('../../../../content/images/faas-logo.png');
const Footer = () => (
  <footer className="usa-footer" >
    <div className="usa-footer__secondary-section footer">
      <div className="grid-container">
        <div className="grid-row grid-gap">
          <div className="usa-footer__logo grid-row mobile-lg:grid-col-6 mobile-lg:grid-gap-2">
            <div className="mobile-lg:grid-col-auto">
              <p className="usa-text-small">Powered by</p>
            </div>
            <div className="mobile-lg:grid-col-auto">
              <img src={faasLogo} role="img" alt="" style={{ marginTop: '-20px' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
export default Footer;
