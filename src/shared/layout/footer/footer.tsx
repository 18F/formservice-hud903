import './footer.scss';
import React from 'react';
import faasLogo from "../../../content/images/formsgov.png";
import { config } from '../../../config/constants';
export const Footer = () => {
  return (
    <footer className="usa-footer" >
      <div className="usa-footer__secondary-section footer">
        <div className="grid-container">
          <div className="grid-row grid-gap">
            <div className="usa-footer__logo grid-row mobile-lg:grid-col-6 mobile-lg:grid-gap-1">
              <div className="mobile-lg:grid-col-auto">
                <p className="usa-text-small">Powered by</p>
              </div>
              <div className="mobile-lg:grid-col-auto">
                <img src={faasLogo} alt="footer logo" style={{ marginTop: '-20px' }} width="150" height="20" />
              </div>
              <div className="mobile-lg:grid-col-auto">
              <p className="usa-text-small"> | Release {config.VERSION}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
