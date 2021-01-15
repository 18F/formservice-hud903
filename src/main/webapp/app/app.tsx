import 'react-toastify/dist/ReactToastify.css';
import './app.scss';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { hot } from 'react-hot-loader';
import Header from '../app/shared/layout/header/header';
import Footer from '../app/shared/layout/footer/footer';
import ErrorBoundary from '../app/shared/error/error-boundary';
import AppRoutes from '../app/routes';

const baseHref = document
  .querySelector('base')
  .getAttribute('href')
  .replace(/\/$/, '');

export const App = () => {
  return (
    <Router basename={baseHref}>
      <div className="app-container">
        <ToastContainer position={toast.POSITION.TOP_LEFT} className="toastify-container" toastClassName="toastify-toast" />
        <Header />
        <main className="main-content background pt-3 pb-3" aria-label="Content">
          <div>
            <div className="grid-container">
              <div className="grid-row">
                <div className="grid-col-12">
                  <ErrorBoundary>
                    <AppRoutes />
                  </ErrorBoundary>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
};
export default (hot(module)(App));
