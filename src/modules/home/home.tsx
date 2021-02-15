import "./home.scss";
import { useCallback } from "react";
import { useHistory } from "react-router-dom";
export const Home = () => {
  const history = useHistory();
  const handleFheoRoute = useCallback(() => history.push("/fheo"), [history]);
  const hidden = true;
  const handleAccordionClick = (headerId, contentId) => {
    let accordionTopButton = document.getElementById(headerId);
    let accordionContent = document.getElementById(contentId);
      if(accordionTopButton && accordionContent){
          accordionTopButton.setAttribute("aria-expanded", "false");
          accordionContent.setAttribute("hidden", "true");
      }
  }
  return (
    <div id="home">
      <div className="usa--card">
        <div className="usa-card__container">
          <header className="usa-card__header">
            <h2 className="usa-card__heading">
              <strong>Should I file a discrimination complaint?</strong>
            </h2>
          </header>
          <div className="usa-card__body bodyfont skinnier">
            <p>
              You should complete this form if you experienced{" "}
              <strong>housing discrimination</strong> because of your: 1) race;
              2) color; 3) religion; 4) national origin; 5) sex; 6) disability;
              or 7) familial status. These characteristics are known as{" "}
              <strong>protected classes</strong> under the federal Fair Housing
              Act.
            </p>

            <div className="usa-accordion--bordered mt-4">
              <h2 className="usa-accordion__heading">
                <button
                  className="usa-accordion__button bodyfont"
                  aria-expanded="false"
                  aria-controls="a1"
                  id="a1header"
                >
                  What is housing discrimination?
                </button>
              </h2>
              <div id="a1" className="usa-accordion__content usa-prose" hidden={hidden}
              >
                <p>
                  <strong>Definition: </strong>discrimination
                </p>
                <p>
                  Treating a person or group of people unfairly (compared to
                  others) because of who they are or their characteristics. For
                  example, mistreating someone because of their race.
                </p>
                <p>
                  <strong>Definition: </strong>housing discrimination
                </p>
                <p>
                  An act of discrimination that happens in housing or during a
                  housing-related transaction. For example, a landlord who
                  refuses to rent an apartment to someone because they have two
                  young children.
                </p>
                <p>
                  The act of discrimination must happen because of one of the
                  seven federally protected classes: 1) race, 2) color, 3)
                  religion, 4) national origin, 5) sex, 6) disability, or 7)
                  familial status.
                </p>
                <p>
                  NOTE: Some states and localities have more protected classes,
                  in addition to the seven federally protected classes.
                </p>
                <p>
                  <strong>Examples of housing discrimination</strong>
                </p>
                <ul>
                  <li>
                    A landlord tells you an apartment is not available to rent,
                    but you know it is available. You suspect the landlord
                    refused to show you the apartment because you are Black.
                  </li>
                  <li>
                    A homeowners association (or HOA) denies your request for a
                    reserved parking spot that you need because of your physical
                    disability. This is a denial of a reasonable accommodation
                    request.
                  </li>
                  <li>
                    A maintenance man who works for your apartment complex
                    sexually harasses you in your apartment by making unwanted
                    sexual advances.
                  </li>
                  <li>
                    {" "}
                    A real estate agent makes comments like “you wouldn’t want
                    to live in that neighborhood” and only shows you homes in
                    heavily Hispanic areas because you are Hispanic.
                  </li>
                </ul>

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
                  What are the protected classes?
                </button>
              </h2>
              <div id="a2" className="usa-accordion__content usa-prose" hidden={hidden}>
                <p>
                  The federal Fair Housing Act bans discrimination in housing
                  (and housing-related transactions) based on
                  <strong> seven</strong> characteristics. These are called
                  <strong> protected classes.</strong>
                </p>
                <div className="tab">
                  <p>
                    <strong>1. Race</strong>
                  </p>
                  <div className="tab">
                    <p>
                      The{" "}
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="usa-link usa-link--external"
                        href="https://www.census.gov/topics/population/race/about.html"
                      >
                        U.S. Census Bureau
                      </a>{" "}
                      defines these racial categories in the United States:
                    </p>
                    <ul>
                      <li>White</li>
                      <li>Black or African American</li>
                      <li>Asian</li>
                      <li>American Indian or Alaska Native</li>
                      <li>Native Hawaiian or Other Pacific Islander</li>
                      <li>a mixture of two or more of these groups</li>
                    </ul>
                  </div>
                  <p>
                    <strong>2. Color</strong>
                  </p>
                  <div className="tab">
                    <ul>
                      <li>Color refers to your skin color or tone</li>
                      <li>Within a race, skin color can vary significantly. People of the 
                        same race can discriminate against each other based on color.</li>
                    </ul>
                  </div>
                  <p>
                    <strong>3. Religion</strong>
                  </p>
                  <div className="tab">
                    <ul>
                      <li>Religion refers to your practice (or non-practice) of a
                        religion</li>
                      <li>Examples: Hinduism, Judaism, Islam,
                    Christianity</li>
                    </ul>
                  </div>
                  <p>
                    <strong>4. Sex </strong>
                  </p>
                  <div className="tab">
                    <ul>
                      <li>Sex refers to your gender, gender identity, or sexual orientation</li>
                      <li>It also includes sexual harassment</li>
                    </ul>
                  </div>
                  <p>
                    <strong>5. National origin (ancestry or ethnicity)</strong>
                  </p>
                  <div className="tab">
                    <ul>
                      <li>National origin refers to your birthplace, ethnicity,
                        ancestry, or culture</li>
                      <li>It also includes language, such as speaking with an accent 
                        or speaking a language other than English</li>
                    </ul>
                    <p>
                      NOTE: The federal Fair Housing Act protects all U.S.
                      residents, regardless of citizenship status. We
                      will not ask about your citizenship status, and we will not
                      share any information about you to immigration authorities.
                    </p>
                  </div>
                  <p>
                    <strong>6. Disability</strong>
                  </p>
                  <div className="tab">
                    <ul>
                      <li>Disability refers to a mental or physical impairment that
                      substantially limits one or more of your major life
                      activities</li>
                      <li>Major life activities include actions like seeing,
                      hearing, speaking, walking, breathing, performing manual
                      tasks, caring for one’s self, or working</li>
                    </ul>
                  </div>
                  <p>
                    <strong>
                      7. Familial status (families with children
                      under 18 years old)
                    </strong>
                  </p>
                  <div className="tab">
                    <ul>
                      <li>Familial status refers to having a child under 18 years old as
                      a member of your household</li>
                      <li>It also includes women who are
                      pregnant and families adopting children</li>
                    </ul>
                  </div>
                </div>

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
                  Who can help if I have a housing issue that does 
                  NOT involve discrimination? (homelessness, Section 8 housing choice voucher issues, 
                  or maintenance/health and safety issues)
                </button>
              </h2>
              <div id="a3" className="usa-accordion__content usa-prose" hidden={hidden}>
                <p>
                  If you have an issue that does not involve discrimination, you
                  should not file a discrimination complaint.
                </p>
                <p>
                  <strong>
                    If you are currently homeless or at risk of becoming homeless:
                  </strong>
                </p>
                <ul>
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="usa-link usa-link--external"
                      href="https://www.hudexchange.info/housing-and-homeless-assistance/homeless-help/"
                    >
                      Call your local homeless services organization
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="usa-link usa-link--external"
                      href="http://www.211.org/"
                    >
                      Call your local 2-1-1 hotline
                    </a>
                  </li>
                </ul>
                <p>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="usa-link usa-link--external"
                    href="https://endhomelessness.org/how-to-get-help-experiencing-homelssness/"
                  >
                    Read more about how to get help if you are homeless
                  </a>
                </p>
                <p>
                  <strong>
                    For help with your Section 8 Housing Choice Voucher (HCV) or
                    your public housing authority:
                  </strong>
                </p>
                <ul>
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="usa-link usa-link--external"
                      href="https://www.hud.gov/program_offices/public_indian_housing/about/css"
                    >
                      Call the PIH Customer Service Center
                    </a>{" "}
                    (1-800-955-2232)
                  </li>
                  <li>Hours: Monday-Friday; 9:00am-5:00pm Eastern Time</li>
                </ul>
                <p>
                  <strong>
                    For help with maintenance, management, or health and safety issues with your
                    housing:
                  </strong>
                </p>
                <ul>
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="usa-link usa-link--external"
                      href="https://www.hud.gov/program_offices/housing/mfh/hc/complaint"
                    >
                      Call the Multifamily Housing Complaint Line
                    </a>{" "}
                    (1-800-685-8470)
                  </li>
                  <li>Hours: Monday-Friday; 9:00am-5:00pm Eastern Time</li>
                </ul>
                <p>
                  <button className="usa-button usa-button--outline" onClick={() => handleAccordionClick('a3header', 'a3')}>
                    Close expanded section
                  </button>
                </p>
              </div>
            </div>

            <h2 className="mt-4">
              <strong>What will I need to provide?</strong>
            </h2>
            <h5 className="mt-3">
              <strong>Contact information</strong>
            </h5>

            <ul>
              <li>Your name, address, phone number, and email address</li>
              <li>A second point of contact (optional)</li>
            </ul>
            <h5 className="mt-3">
              <strong>Details about what happened</strong>
            </h5>
            <ul>
              <li>
                <strong>Why:</strong> The reason someone discriminated against
                you
              </li>
              <li>
                <strong>Who:</strong> Who discriminated against you
              </li>
              <li>
                <strong>Where:</strong> Where the discrimination happened
              </li>
              <li>
                <strong>When:</strong> The date the discrimination happened
              </li>
              <li>
                <strong>What:</strong> A short summary of what happened
              </li>
            </ul>

            <h2 className="mt-4">
              <strong>How long will it take?</strong>
            </h2>
            <p>
              <strong>15-20 minutes.</strong> You won&apos;t lose your work
              unless you close your Internet browser.
            </p>
          </div>
          <div className="usa-card__footer mt-5">
            <button className="usa-button" onClick={handleFheoRoute}>
              START MY COMPLAINT
            </button>
            <p className="mt-4"></p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
