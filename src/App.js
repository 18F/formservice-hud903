import 'react-toastify/dist/ReactToastify.css';
import './app.scss';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Header from './shared/layout/header/header';
import Footer from './shared/layout/footer/footer';
import AppRoutes from './routes';

function App() {
  return (
    <Router>
    <div className="app-container">
      <ToastContainer position={toast.POSITION.TOP_LEFT} className="toastify-container" toastClassName="toastify-toast" />
      <Header />
      <main className="main-content background pt-3 pb-3" aria-label="Content">
        <div>
          <div className="grid-container">
            <div className="grid-row">
              <div className="grid-col-12">
                  <AppRoutes />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  </Router>
  );
}

export default App;
