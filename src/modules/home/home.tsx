import './home.scss';
import React, { useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
export const Home = () => {
  const history = useHistory();
  const handleFheoRoute = useCallback(() => history.push('/fheo'), [history]);
  return (
    <div id="home">
      <ul className="usa-card-group" style={{ paddingLeft: '0px' }}>
        <li className="usa--card">
          <div className="usa-card__container">
            <header className="usa-card__header">
              <h3 className="usa-card__heading">Should I fill out this form?</h3>
            </header>
            <div className="usa-card__body">
              <p>
                You should complete this form if you experienced <strong>housing discrimination </strong>because of your: <br />
                1) race; 2) color; 3) religion; 4) national origin; 5) sex; 6) disability; or 7) familial status.
                <br />
                <br />
                NOTE: These characteristics are known as <strong>protected classes</strong> under federal law.
                <br />
              </p>

              <div className="usa-accordion">
                <h2 className="usa-accordion__heading">
                  <button className="usa-accordion__button" aria-expanded="false" aria-controls="a1">
                    What is housing discrimination?
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
                    What are the protected classes?
                  </button>
                </h2>
                <div id="a2" className="usa-accordion__content usa-prose">
                  <p>
                    <strong>Race</strong>
                    <br />
                    Racial discrimination means being treated unfairly because you are:
                  </p>
                  <ul className="custom">
                    <li>White;</li>
                    <li>Black or African American;</li>
                    <li>Asian;</li>
                    <li>American Indian or Alaska Native;</li>
                    <li>Native Hawaiian or Other Pacific Islander; or</li>
                    <li>a mixture of two or more of these groups.</li>
                  </ul>
                  <p>
                    Racial discrimination also includes being treated unfairly because of personal characteristics associated with race or
                    because you are married to (or associated with) a person of a specific race.
                    <br />
                    Example: A seller refused to sell you their home because you are Black.
                  </p>

                  <p>
                    <strong>Color</strong>
                    <br />
                    Color discrimination means being treated unfairly because of your skin color. While race and color overlap, they are not
                    the same. People of various races and ethnicities may experience discrimination because of their skin color. This type
                    of discrimination may occur within the same race.
                  </p>

                  <p>
                    <strong>Religion</strong>
                    <br />
                    Religious discrimination means being treated unfairly because of your religious beliefs. This can include both the
                    practice and non-practice of a religion.
                  </p>

                  <p>
                    <strong>Sex</strong>
                    <br />
                    Sex discrimination means being treated unfairly or differently because of your sex. This includes both harassment
                    because of a person’s sex and sexual harassment.
                  </p>

                  <p>
                    <strong>National Origin</strong>
                    <br />
                    National origin discrimination means being treated unfairly because you:
                  </p>
                  <ul className="custom">
                    <li>are from a specific country or part of the world;</li>
                    <li>speak a certain language or have an accent when you speak;</li>
                    <li>are of a certain ethnic background; or</li>
                    <li>appear to be of a certain ethnic background (even if you are not).</li>
                  </ul>

                  <p>
                    National origin discrimination may also include being treated unfairly because you are married to (or associated with) a
                    person of a specific national origin.
                  </p>

                  <p>
                    <strong>Familial Status</strong>
                    <br />
                    Familial status discrimination means being treated unfairly because:
                  </p>
                  <ul className="custom">
                    <li>your family includes at least one child under 18 years old;</li>
                    <li>you are pregnant; or</li>
                    <li>you are in the process of adopting a child.</li>
                  </ul>

                  <p>
                    <strong>Disability</strong>
                    <br />
                    Disability discrimination means being treated unfairly because you:
                  </p>
                  <ul className="custom">
                    <li>have a physical or mental disability which substantially limits any major life activity;</li>
                    <li>have a record of a physical or mental disability; or</li>
                    <li>are viewed as having a physical or mental disability.</li>
                  </ul>
                  <p>
                    The Fair Housing Act also requires certain new multifamily dwellings to be accessible for persons with
                    disabilities.
                  </p>

                  <p>
                    <b>Note:</b> Disability discrimination does not include being treated unfairly because you currently use (or are
                    addicted to) an illegal controlled substance. Controlled substances are defined in&nbsp;
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.govinfo.gov/content/pkg/USCODE-2018-title21/pdf/USCODE-2018-title21-chap4-subchapII-sec102.pdf"
                    >
                      Section 102 of the Controlled Substances Act (21 U.S.C. 802)
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="usa-card__container mt-3">
              <header className="usa-card__header">
                <h3 className="usa-card__heading">What will I need to provide?</h3>
              </header>
              <header className="usa-card__header mt-3">
                <h5 className="usa-card__heading">Contact information</h5>
              </header>
              <div className="usa-card__body">
                <ul className="custom">
                  <li>Your name, address, phone number, and email address</li>
                  <li>A second point of contact (optional)</li>
                </ul>
              </div>
              <header className="usa-card__header  mt-3">
                <h5 className="usa-card__heading">Details about what happened</h5>
              </header>
              <div className="usa-card__body">
                <ul className="custom">
                  <li><strong>Why:</strong> Why you were discriminated against</li>
                  <li><strong>Who:</strong> Who discriminated against you</li>
                  <li><strong>Where:</strong> Where the discrimination happened</li>
                  <li><strong>When:</strong> The date the discrimination happened</li>
                  <li><strong>What:</strong> A written summary of what happened</li>
                </ul>
              </div>
            </div>
            <div className="usa-card__container mt-3">
              <header className="usa-card__header">
                <h3 className="usa-card__heading">How long will it take?</h3>
              </header>
              <div className="usa-card__body">
                <p>
                  It will take you <strong>15-20 minutes</strong> to fill out the form. The form won&apos;t time out until you close your
                  Internet browser.
                </p>
              </div>
            </div>

            <div className="usa-card__footer mt-2">
              <button className="usa-button"
                onClick={handleFheoRoute}>
                Start my complaint</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default Home;
