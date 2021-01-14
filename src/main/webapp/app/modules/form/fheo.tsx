import React, { useState, useEffect } from 'react';
import { Form } from 'react-formio';
import uswds from '@formio/uswds';
import { Formio } from 'formiojs';

Formio.use(uswds);
export const Fheo = () => {
    return (
        <div className="card">
            <Form
                src="https://dev-portal.fs.gsa.gov/review/hud903"
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
