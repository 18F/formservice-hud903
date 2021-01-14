import React, { useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form } from 'react-formio';
import uswds from '@formio/uswds';
import { Formio } from 'formiojs';

Formio.use(uswds);
export const Fheo = () => {
    const history = useHistory();
    const handleConfirmationRoute = useCallback(() => history.push('/confirmation'), [history]);
    return (
        <div className="card">
            <Form
                src="https://dev-portal.fs.gsa.gov/review/hud903"
                onSubmit={handleConfirmationRoute}
                options={{
                    i18n: {en: {
                        'next': 'Continue',
                        'previous': 'Go Back',
                        'submit': 'Submit my Complaint'
                        }}
                }}
            />
        </div>
    );
};
export default Fheo;
