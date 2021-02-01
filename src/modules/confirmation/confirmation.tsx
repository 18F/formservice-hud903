import "./confirmation.scss";
import iconForwardArrow from "../../content/images/arrow_forward.svg";
const hidden = true;
const handleAccordionClick = (headerId, contentId )=>{
  let accordionTopButton = document.getElementById(headerId);
  let accordionContent = document.getElementById(contentId);
  if(accordionTopButton && accordionContent){
    accordionTopButton.setAttribute("aria-expanded", "false");
    accordionContent.setAttribute("hidden", "true");
  }
}

export const Confirmation = () => {
  return (
    <div id="home">
      <div className="usa--card">
        <div className="usa-card__container">
          <header className="usa-card__header skinnier">
            <div className="usa-alert usa-alert--success">
              <div className="usa-alert__body">
                <h3 className="usa-alert__heading">
                  Your complaint was successfully submitted
                </h3>
                <p className="usa-alert__text">
                  We will review it as soon as possible, and contact you if we
                  need more information.
                </p>
              </div>
            </div>
          </header>

          <div className="usa-card__body skinnier bodyfont mt-4">
            <h1 className="mt-5">
              <strong>Frequently Asked Questions (FAQs)</strong>
            </h1>

            <div className="usa-accordion--bordered mt-4">
              <h2 className="usa-accordion__heading mt-3">
                <button
                  className="usa-accordion__button bodyfont"
                  aria-expanded="false"
                  aria-controls="a1"
                  id="a1header"
                >
                  When will I hear back from HUD about my complaint?
                </button>
              </h2>
              <div id="a1" className="usa-accordion__content usa-prose" hidden={hidden}>
                <p>
                  You should hear back from us within <strong>7-14 days</strong>
                  , but it can take us as long as 30 days to process your
                  complaint.
                </p>
                <p>
                  <strong>Emergencies</strong>
                </p>
                <ol>
                  <li>
                    If you are in danger due to retaliation, sexual harassment,
                    or another reason:
                    <ul>
                      <li>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="usa-link usa-link--external"
                          href="https://www.hud.gov/program_offices/fair_housing_equal_opp/contact_fheo#c4"
                        >
                          Call your nearest HUD fair housing office
                        </a>{" "}
                        to let us know that you are in an emergency.
                      </li>
                    </ul>
                    <ul>
                      <li>
                        Stay away from your home, if possible. Stay with a
                        family member or friend, or{" "}
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="usa-link usa-link--external"
                          href="http://www.211.org/"
                        >
                          call your local 211 hotline
                        </a>{" "}
                        for help finding temporary housing.
                      </li>
                      <li>
                        If you are experiencing a life-threatening emergency,
                        call 911 or your local police department.
                      </li>
                    </ul>
                  </li>
                  <li>
                    If you are at risk of losing your housing or becoming
                    homeless,{" "}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="usa-link usa-link--external"
                      href="https://www.hud.gov/program_offices/fair_housing_equal_opp/contact_fheo#c4"
                    >
                      call your nearest HUD fair housing office
                    </a>
                    .
                  </li>
                </ol>
                <p>
                  <button className="usa-button usa-button--outline" onClick={() => handleAccordionClick('a1header', 'a1')}>
                    Close expanded section
                  </button>
                </p>
              </div>
              <h2 className="usa-accordion__heading mt-3">
                <button
                  className="usa-accordion__button bodyfont"
                  aria-expanded="false"
                  aria-controls="a2"
                  id="a2header"
                >
                  What happens next?
                </button>
              </h2>
              <div id="a2" className="usa-accordion__content usa-prose" hidden={hidden}>
                <p>After we review your complaint, we will either:</p>
                <p>
                  <strong>
                    1. Contact you to finalize the details of your complaint{" "}
                  </strong>
                  (via phone or email); or
                </p>
                <p>
                  <strong>2. Refer your complaint</strong> to a state or local
                  fair housing organization; or
                </p>
                <p>
                  <strong>
                    3. Let you know that we can’t investigate your complaint due
                    to lack of jurisdiction.
                  </strong>{" "}
                  We’ll mail you a letter explaining why we can’t investigate
                  your complaint. We may also call or email you.
                </p>
                <p>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="usa-link usa-link--external"
                    href="https://www.hud.gov/program_offices/fair_housing_equal_opp/complaint-process"
                  >
                    Read more about our housing discrimination complaint and
                    investigation process
                  </a>
                </p>
                <p>
                  <button className="usa-button usa-button--outline" onClick={() => handleAccordionClick('a2header', 'a2')}>
                    Close expanded section
                  </button>
                </p>
              </div>
              <h2 className="usa-accordion__heading mt-3">
                <button
                  className="usa-accordion__button bodyfont"
                  aria-expanded="false"
                  aria-controls="a3"
                  id="a3header"
                >
                  How can I check the status of my complaint?
                </button>
              </h2>
              <div id="a3" className="usa-accordion__content usa-prose" hidden={hidden}>
                <p>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="usa-link usa-link--external"
                    href="https://www.hud.gov/program_offices/fair_housing_equal_opp/contact_fheo#c4"
                  >
                    Call your nearest HUD fair housing office
                  </a>
                </p>
                <p>
                  We encourage you to wait to hear from us before calling. It
                  usually takes us 7-14 days to:
                </p>
                <ol>
                  <li>
                    Send your complaint to the appropriate HUD regional fair
                    housing office; and
                  </li>
                  <li>
                    Review your complaint to determine if we have legal
                    authority to investigate it further.
                  </li>
                </ol>
                <p>
                  <button className="usa-button usa-button--outline" onClick={() => handleAccordionClick('a3header', 'a3')}>
                    Close expanded section
                  </button>
                </p>
              </div>
              <h2 className="usa-accordion__heading mt-3">
                <button
                  className="usa-accordion__button bodyfont"
                  aria-expanded="false"
                  aria-controls="a4"
                  id="a4header"
                >
                  Why might HUD reject my complaint?
                </button>
              </h2>
              <div id="a4" className="usa-accordion__content usa-prose" hidden={hidden}>
                <p>
                  We only reject complaints that we do not have jurisdiction (or
                  legal authority) to investigate. We refer to this as{" "}
                  <strong>lack of jurisdiction.</strong>
                </p>
                <p>
                  We receive many complaints from people who feel they were
                  treated “unfairly” in housing. However, many of these
                  complaints do not claim (or allege) discrimination based on
                  the federally protected classes.
                </p>
                <p>
                  For us to investigate, you must claim (or allege) in your
                  complaint that you experienced discrimination in housing
                  because of your: 1) race, 2) color, 3) religion, 4) national
                  origin, 5) sex, 6) disability, or 7) familial status.
                </p>
                <p>
                  <strong>What can I do if HUD rejects my complaint?</strong>
                </p>
                <p>
                  If we reject your complaint, and you believe that you
                  experienced discrimination, call the contact person listed on
                  the letter you received in the mail. You can also{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="usa-link usa-link--external"
                    href="https://www.hud.gov/program_offices/fair_housing_equal_opp/contact_fheo#c4"
                  >
                    call your nearest HUD fair housing office
                  </a>{" "}
                  to talk through your complaint on the phone.
                </p>
                <p>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="usa-link usa-link--external"
                    href="https://www.hud.gov/program_offices/fair_housing_equal_opp/complaint-process"
                  >
                    Read more about our housing discrimination complaint and
                    investigation process
                  </a>
                </p>
                <p>
                  <button className="usa-button usa-button--outline" onClick={() => handleAccordionClick('a4header', 'a4')}>
                    Close expanded section
                  </button>
                </p>
              </div>
              <h2 className="usa-accordion__heading mt-3">
                <button
                  className="usa-accordion__button bodyfont"
                  aria-expanded="false"
                  aria-controls="a5"
                  id="a5header"
                >
                  Why might HUD refer my complaint to a state or local fair
                  housing organization?
                </button>
              </h2>
              <div id="a5" className="usa-accordion__content usa-prose" hidden={hidden}>
                <p>
                  If your fair housing issue is only covered by a state or local
                  law, we may refer your complaint to a state or local fair
                  housing organization.
                </p>
                <p>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="usa-link usa-link--external"
                    href="https://www.hud.gov/program_offices/fair_housing_equal_opp/complaint-process"
                  >
                    Read more about our housing discrimination complaint and
                    investigation process
                  </a>
                </p>
                <p>
                  <button className="usa-button usa-button--outline" onClick={() => handleAccordionClick('a5header', 'a5')}>
                    Close expanded section
                  </button>
                </p>
              </div>
            </div>

            <h5 className="mt-5">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.google.com"
              >
                Read more about our complaint and investigation process{" "}
                <img src={iconForwardArrow} alt="forward arrow" />
              </a>
            </h5>

            <p className="mt-4"></p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Confirmation;
