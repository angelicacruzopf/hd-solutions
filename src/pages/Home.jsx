import BtnFlat from "../components/buttons/BtnFlat";
import ventaNavidad  from "../assets/img/venta-navidad.png";
import regalos from "../assets/img/regalos.png";

console.log (ventaNavidad);

export default function Home() {

  return (
    <section class="h-full text-center flex flex-col items-center banner justify-between pt-16 relative">
      <div class="flex flex-col justify-between items-center w-2/3">
        <div>
            <img src={ventaNavidad} alt="Banner con regalos de navidad"/>
        </div>
        <div class="w-full flex flex-col items-center">
          <div class="container-lg mb-6">
            <h1 class="mb-5 font-bold text-2xl leading-12">Hasta el<br></br>
            <strong class="text-[64px] text-[#D62744]">70%</strong><br></br>
            DE DESCUENTO
            </h1>
          </div>
            <div class="flex flex-row items-center justify-center w-1/3">
                <BtnFlat>Ver ofertas</BtnFlat>
            </div>
        </div>
        <div>
                <img src={regalos} alt="Regalos" />
            </div>
      </div>
    </section>
  );
};
