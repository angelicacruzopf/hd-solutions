import photoAbout from "../assets/img/about-us.png";
import Logo from '../assets/img/hs-logo-full.svg';

export default function AboutUs() {
  return (
    <section id="about">
      <div class="grid grid-cols-1">
        <div class="grid md:grid-cols-2 py-12 md:py-16 w-9/12 place-self-center max-w-[1000px]">
          <div class="flex flex-col justify-center md:pe-10">
            <div class="grid grid-cols-1 place-items-center h-18 mb-8">
              <img src={Logo} alt="Logotipo Hardware Solutions" class="w-2/3"/>
            </div>
            <div class="flex flex-col gap-4">
              <div class="text-gray-500 flex flex-col gap-4">
                <p>Las Ferreterías Hardware Solutions son tu destino para encontrar todo lo que necesitas para tus proyectos de construcción o renovación.</p>
                <p>Desde herramientas de alta calidad, hasta materiales de construcción.</p>
                <p>Estamos aquí para ayudarte a hacer realidad tus ideas.</p>

              </div>
              <p><strong>¡Visitanos hoy y descubre el mundo de posibilidades que tenemos para ofrecer!</strong></p>
            </div>
          </div>
          <div class="bg-gray-300 w-full h-128 rounded-3xl font-normal hidden md:inline-block">
            <img src={photoAbout} alt="Fotografía de sucursal" class="object-cover h-full w-full rounded-3xl"/>
          </div>
        </div>
      </div>
    </section>
  );
};
