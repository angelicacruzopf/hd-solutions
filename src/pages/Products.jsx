
import BtnFlatGreen from "../components/buttons/BtnFlatGreen";
import BtnIcnRight from "../components/buttons/BtnIcnR";
import ProductCard from "../components/cards/ProductCard";

export default function Products() {
    return(
        <section id="products" class="flex justify-center">
            <div class="flex flex-col w-[90%] md:w-9/12 py-12 md:py-16 max-w-[1000px]">
                <h2 class="font-bold text-center text-2xl mb-4 md:mb-10 md:text-5xl">Nuestros productos</h2>
                <div class="flex flex-col gap-4 sm:flex-row sm:flex-wrap lg:flex-nowrap h-fit justify-between">
                    <ProductCard />
                </div>
                <div class="w-full md:grid gap-x-4 mt-16 md:mt-16 grid-cols-3 h-fit">
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