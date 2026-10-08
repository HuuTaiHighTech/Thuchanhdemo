import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './main.css';
import Header from './components/header/Header';
import Footer2 from './components/footer/Footer2';

createRoot(document.getElementById('root')).render(
  <>
  <Header />
  <Footer2/>
  </>
)
