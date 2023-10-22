import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './components/shared/layout';
import Home from './components/home';
import About from './components/about';
import ContactUs from './components/contact-us';
import Services from './components/services';

function App() {
  return (
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/'  element={<Home />} />
            <Route path='/about'  element={<About />} />
            <Route path='/services'  element={<Services />} />
            <Route path='/contact-us'  element={<ContactUs />} />
          </Routes>
        </Layout>
      </BrowserRouter>
  );
}

export default App;
