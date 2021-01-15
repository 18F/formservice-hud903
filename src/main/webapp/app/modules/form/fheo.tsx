import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from 'react-formio';
import uswds from '@formio/uswds';
import { Formio } from 'formiojs';
import LoadingOverlay from 'react-loading-overlay';
import BounceLoader from 'react-spinners/BounceLoader'
Formio.use(uswds);
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
        >
            <div className="card">
                <Form
                    src="https://dev-portal.fs.gsa.gov/review/hud903"
                    onSubmit={handleConfirmationRoute}
                    onRender={handleRender}
                    options={{
                        i18n: {
                            en: {
                                'next': 'Continue',
                                'previous': 'Go Back',
                                'submit': 'Submit my Complaint'
                            }
                        }
                    }}
                />
            </div>
        </LoadingOverlay>

    );
};
export default Fheo;
