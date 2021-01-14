import React, { useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form } from 'react-formio';
import uswds from '@formio/uswds';
import { Formio } from 'formiojs';

export const Confirmation = () => {
    return (
        <div id="home">
        <ul className="usa-card-group" style={{ paddingLeft: '0px' }}>
          <li className="usa--card">
            <div className="usa-card__container">
              <header className="usa-card__header">
                <h3 className="usa-card__heading">Confirmation Page</h3>
              </header>
              <div className="usa-card__body">
                <p>
                  Add detail here
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
};
export default Confirmation;
