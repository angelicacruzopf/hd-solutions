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
        <div class="flex flex-col items-center ms-4 text-lighterGray gap-y-4 md:hidden text-lg font-semibold">
            <p class="font-bold text-black text-2xl">Horarios:</p>
            <p>Lunes a sábado: 7:00am - 6:00pm</p>
            <p>Domingo: 8:00am - 2:00pm</p>
        </div>
      </section>
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
