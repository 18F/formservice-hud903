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
            <h3 className="usa-card__heading">
              <strong>Should I file a discrimination complaint?</strong>
            </h3>
          </header>
          <div className="usa-card__body bodyfont skinnier mt-4">
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
                <p>
                  <strong>1. Race</strong>
                </p>
                <p>
                  Race refers to categories people are grouped into based on
                  their shared physical qualities. The{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="usa-link usa-link--external"
                    href="https://www.census.gov/topics/population/race/about.html"
                  >
                    U.S. Census Bureau
                  </a>{" "}
                  defines these racial categories in the U.S.:
                </p>
                <ul>
                  <li>White</li>
                  <li>Black or African American</li>
                  <li>Asian</li>
                  <li>American Indian or Alaska Native</li>
                  <li>Native Hawaiian or Other Pacific Islander</li>
                  <li>a mixture of two or more of these groups</li>
                </ul>
                <p>
                  <strong>2. Color</strong>
                </p>
                <p>
                  Color refers to your skin color or tone. While race and color
                  overlap, they are <strong>not the same</strong>. Within a
                  single race, skin color can vary.
                </p>
                <p>
                  You can experience discrimination based on your skin color
                  even if the person discriminating against you is of the same
                  race.
                </p>
                <p>
                  <strong>3. Religion</strong>
                </p>
                <p>
                  Religion refers to your practice (or non-practice) of a
                  specific religion. Examples: Hinduism, Judaism, Islam,
                  Christianity, Buddhism.
                </p>
                <p>
                  <strong>4. Sex </strong>
                </p>
                <p>
                  Sex refers to your gender. It also includes sexual harassment.
                </p>
                <p>
                  <u>Sexual orientation and gender identity</u>
                </p>
                <p>
                  We encourage you to file a complaint if you experienced
                  housing discrimination because of your sexual orientation or
                  gender identity.
                </p>
                <p>
                  The federal Fair Housing Act does <strong>not </strong>
                  currently include protections for sexual orientation or gender
                  identity. However, many states ban discrimination based on
                  sexual orientation and gender identity.
                </p>
                <p>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="usa-link usa-link--external"
                    href="https://www.hud.gov/program_offices/fair_housing_equal_opp/housing_discrimination_and_persons_identifying_lgbtq"
                  >
                    Learn more about housing discrimination if you identify as
                    LGBTQ+.
                  </a>
                </p>
                <p>
                  <strong>5. National origin (ancestry or ethnicity)</strong>
                </p>
                <p>
                  National origin refers to your birthplace, ethnicity,
                  ancestry, culture, and language.
                </p>
                <p>
                  If you experienced discrimination because you speak with an
                  accent or you speak a language other than English, it is
                  discrimination based on national origin.
                </p>
                <p>
                  NOTE: The federal Fair Housing Act protects all U.S.
                  residents, regardless of immigration or citizenship status. We
                  will not ask about your immigration status, and we will not
                  disclose any information about you to immigration authorities.
                </p>
                <p>
                  <strong>6. Disability</strong>
                </p>
                <p>
                  Disability refers to a mental or physical impairment that
                  substantially limits one or more of your major life
                  activities. Major life activities include actions like seeing,
                  hearing, speaking, walking, breathing, performing manual
                  tasks, caring for one’s self, or working.
                </p>
                <p>
                  <strong>
                    7. Familial status (or status as a family with children
                    under 18 years old)
                  </strong>
                </p>
                <p>
                  Familial status refers to having a child under 18 years old as
                  a member of your household. It also includes women who are
                  pregnant and families in the process of adopting children.
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
                  Who can help if I have a different housing issue that does NOT
                  involve discrimination? (examples: housing voucher issues,
                  maintenance issues)
                </button>
              </h2>
              <div id="a3" className="usa-accordion__content usa-prose" hidden={hidden}>
                <p>
                  If you have an issue that does not involve discrimination, you
                  should not file a complaint here.
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
                    For help with maintenance or management issues with your
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
              <h2 className="usa-accordion__heading mt-3">
                <button
                  className="usa-accordion__button bodyfont"
                  aria-expanded="false"
                  aria-controls="a4"
                  id="a4header"
                >
                  I’m homeless or at risk of becoming homeless. Who can help?
                </button>
              </h2>
              <div id="a4" className="usa-accordion__content usa-prose" hidden={hidden}>
                <p>
                  We investigate housing discrimination, and unfortunately we
                  can’t help you quickly find temporary housing.
                </p>
                <p>To get immediate help:</p>
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
                  I’m in danger due to retaliation, sexual harassment, or
                  another reason. What should I do?
                </button>
              </h2>
              <div id="a5" className="usa-accordion__content usa-prose" hidden={hidden}>
                <p>
                  File a housing discrimination complaint here and{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="usa-link usa-link--external"
                    href="https://www.hud.gov/program_offices/fair_housing_equal_opp/contact_fheo#c4"
                  >
                    {" "}
                    call your nearest HUD fair housing office
                  </a>{" "}
                  to let us know that you are in an emergency.
                </p>
                <p>
                  <strong>Tips for staying safe</strong>
                </p>
                <ol>
                  <li>
                    Stay away from your home, if possible. Stay with a family
                    member or friend, or{" "}
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
                    If you are experiencing a life-threatening emergency, call
                    911 or your local police department.
                  </li>
                </ol>

                <p>
                  <button className="usa-button usa-button--outline" onClick={() => handleAccordionClick('a5header', 'a5')}>
                    Close expanded section
                  </button>
                </p>
              </div>
            </div>

            <h1 className="mt-5">
              <strong>What will I need to provide?</strong>
            </h1>
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

            <h1 className="mt-5">
              <strong>How long will it take?</strong>
            </h1>
            <p>
              <strong>15-20 minutes.</strong> You won&apos;t lose your work
              unless you close your Internet browser.
            </p>
          </div>
          <div className="usa-card__footer mt-5">
            <button className="usa-button" onClick={handleFheoRoute}>
              Start my complaint
            </button>
            <p className="mt-4"></p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
