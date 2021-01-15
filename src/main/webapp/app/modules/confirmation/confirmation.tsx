import '../home/home.scss';
import React, { useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form } from 'react-formio';
import uswds from '@formio/uswds';
import { Formio } from 'formiojs';

/* eslint @typescript-eslint/no-var-requires: "off" */
const iconForwardArrow = require('../../../content/images/arrow_forward.svg');

export const Confirmation = () => {
    return (
      <div id="confirmation">
        <ul className="usa-card-group" style={{ paddingLeft: '0px' }}>
          <li className="usa--card">
            <div className="usa-card__container mt-4">
              <div className="usa-alert usa-alert--success">
                <div className="usa-alert__body">
                  <h3 className="usa-alert__heading">Your complaint was successfully submitted</h3>
                  <p className="usa-alert__text">We will review it as soon as possible, and contact you if we need more information.</p>
                </div>
              </div>
            </div>
            <div className="usa-card__container mt-5">
              <header className="usa-card__header">
                <h3 className="usa-card__heading">Frequently Asked Questions (FAQs)</h3>
              </header>
              <div className="usa-card__body">
                <div className="usa-accordion">
                  <h2 className="usa-accordion__heading">
                    <button className="usa-accordion__button" aria-expanded="false" aria-controls="a1">
                      When will I hear back from HUD about my complaint?
                    </button>
                  </h2>
                  <div id="a1" className="usa-accordion__content usa-prose">
                    <p>
                      Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or
                      abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the
                      Government for a redress of grievances.
                    </p>
                  </div>
                  <h2 className="usa-accordion__heading">
                    <button className="usa-accordion__button" aria-expanded="false" aria-controls="a2">
                      How can I check the status of my complaint?
                    </button>
                  </h2>
                  <div id="a2" className="usa-accordion__content usa-prose">
                    <p>
                      Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or
                      abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the
                      Government for a redress of grievances.
                    </p>
                  </div>
                  <h2 className="usa-accordion__heading">
                    <button className="usa-accordion__button" aria-expanded="false" aria-controls="a3">
                      What are the next steps in this process?
                    </button>
                  </h2>
                  <div id="a3" className="usa-accordion__content usa-prose">
                    <p>
                      Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or
                      abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the
                      Government for a redress of grievances.
                    </p>
                  </div>
                  <h2 className="usa-accordion__heading">
                    <button className="usa-accordion__button" aria-expanded="false" aria-controls="a4">
                      Why may HUD reject my request?
                    </button>
                  </h2>
                  <div id="a4" className="usa-accordion__content usa-prose">
                    <p>
                      Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or
                      abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the
                      Government for a redress of grievances.
                    </p>
                  </div>
                </div>
                <div className="usa-card__container mt-5">
                  <header className="usa-card__header">
                    <h5 className="usa-card__heading" >
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.google.com"
                      >
                        Read more about our complaint and investigation process <img src={iconForwardArrow} alt="forward arrow" />
                      </a>
                    </h5>
                  </header>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
};
export default Confirmation;
