import BtnFlat from "../components/buttons/BtnFlat";
import ventaNavidad  from "../assets/img/venta-navidad.png";
import regalos from "../assets/img/regalos.png";
import regalosMobile from "../assets/img/presents.png";

console.log (ventaNavidad);

export default function Home() {

  return (
    <section class="h-full text-center flex flex-col items-center banner justify-between pt-8 md:pt-16 relative">
      <div class="flex flex-col justify-between items-center w-[80%] md:w-2/3">
        <div>
            <img src={ventaNavidad} alt="Letras rojas"/>
        </div>
        <div class="w-full flex flex-col items-center">
          <div class="mb-6 w-full">
            <h1 class="font-semibold text-2xl leading-12">Hasta el<br></br>
            <strong class="text-[64px] text-[#D62744]">70%</strong><br></br>
            DE DESCUENTO
            </h1>
          </div>
            <div class="flex flex-row items-center justify-center w-[80%] md:w-[50%] sm:w-1/3">
                <BtnFlat>Ver ofertas</BtnFlat>
            </div>
        </div>
        <div>
          <img src={regalos} alt="Regalos" class="md:inline-block md:mt-8" hidden />
        </div>
        <div class="w-[110%] flex justify-center">
            <img src={regalosMobile} alt="Regalos" class="md:hidden mt-8" />
          </div>
      </div>
    </section>
  );
};
