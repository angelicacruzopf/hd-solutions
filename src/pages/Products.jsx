
import BtnFlatGreen from "../components/buttons/BtnFlatGreen";
import BtnIcnRight from "../components/buttons/BtnIcnR";
import ProductCard from "../components/cards/ProductCard";

export default function Products() {
    return(
        <section class="flex justify-center">
            <div class="flex flex-col w-9/12 py-12 md:py-16">
                <h2 class="font-bold text-center text-2xl mb-4 md:mb-10 md:text-5xl">Nuestros productos</h2>
                <div class="
                flex flex-col
                md:grid gap-x-16 gap-y-4 md:gap-y-14 grid-cols-3 place-content-center">
                    <ProductCard />
                </div>
                <div class="w-full md:grid gap-x-16 mt-16 md:mt-16 grid-cols-3 h-fit">
                    <div class="w-full md:col-start-2">
                        <BtnFlatGreen>Ver más productos</BtnFlatGreen>
                    </div>
                </div>
                <div class="flex justify-center">
                        <BtnIcnRight>Descargar catálogo en PDF</BtnIcnRight>
                    </div>
            </div>
        </section>        
    )
}; 