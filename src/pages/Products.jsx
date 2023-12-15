
import BtnFlatGreen from "../components/buttons/BtnFlatGreen";
import ProductCard from "../components/cards/ProductCard";

export default function Products() {
    return(
        <section class="flex justify-center">
            <div class="flex flex-col w-9/12 py-16">
                <h2 class="font-bold text-center mb-10 text-5xl">Products</h2>
                <div class="grid gap-x-16 gap-y-14 grid-cols-3 place-content-center">
                    <ProductCard />
                </div>
                <div class="grid gap-x-16 my-16 grid-cols-3">
                    <div class="col-start-2">
                        <BtnFlatGreen>Ver más productos</BtnFlatGreen>
                    </div>
                </div>
            </div>
        </section>        
    )
}; 