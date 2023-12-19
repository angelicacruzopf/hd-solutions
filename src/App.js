import Navbar from './components/Navbar';
import SmBanner from './components/SmBanner';
import AboutUs from './pages/About';
import ContactUs from './pages/ContactUs';
import Home from './pages/Home';
import Locations from './pages/Locations';
import Products from './pages/Products';
import Team from './pages/Departamentos';
import flag from './assets/img/flag.png'
import Footer from './components/Footer';
import NavMobile from './components/NavMobile';

function App() {
  return (
    <>
      <Navbar />
      <NavMobile />
      <SmBanner />
      <Home />
      <Products />
      <AboutUs />
      <Team />
      <ContactUs />
      <Locations />
      <section>
        <div class="flex justify-center py-14">
          <img src={flag} alt='Bandera' />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
