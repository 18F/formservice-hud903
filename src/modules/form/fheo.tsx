import "./fheo.scss";
import { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from 'react-formio';
import uswds from '@formio/uswds';
import { Formio, Templates } from 'formiojs';
import LoadingOverlay from 'react-loading-overlay';
import BounceLoader from 'react-spinners/BounceLoader';

Formio.use(uswds);

const wizardNavUpdatedTemplate = require("./wizardNavUpdatedTemplate.ejs");
Templates.current = {
    wizardNav:{
        form: wizardNavUpdatedTemplate.default
    }
};

export const Fheo = () => {
    const [loader, setLoader] = useState(true);
    const history = useHistory();
    const handleConfirmationRoute = useCallback(() => history.push('/confirmation'), [history]);
    const handleRender = () => { setLoader(false) };
    return (
        <LoadingOverlay
            active={loader}
            spinner={<BounceLoader />}
            text='Loading form...'
            className={loader ? 'card' : ''}
        >
            <div className="card">
                <Form 
                    // form={fheoForm}
                    src="https://dev-portal.fs.gsa.gov/review/hud903"
                    onSubmit={handleConfirmationRoute}
                    onRender={handleRender}
                    options={{
                        i18n: {
                            en: {
                                'next': 'CONTINUE',
                                'previous': 'GO BACK',
                                'submit': 'SUBMIT MY COMPLAINT'
                            }
                        },
                        buttonSettings: {
                            showPrevious: true,
                            showNext: true,
                            showCancel: false,
                            showSubmit: true
                        }
                    }}
                />
            </div>
        </LoadingOverlay>

    );
};
export default Fheo;
