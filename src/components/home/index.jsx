import Hero from './hero';
import Professional from './professional';
import FeatureSection from './feature-section';
import ClientSection from './client-section';
import About from '../about';
import ContactUs from '../contact-us';
import Services from '../services';


const Home = ()=>{
  return (
    <>
      <Hero />
      <FeatureSection />
      <About />
      <Professional />
      <Services />
      <ClientSection />
      <ContactUs />
    </>
  )
}

export default Home