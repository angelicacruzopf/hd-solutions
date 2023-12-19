import { productsList } from "../../assets/data/dataProducts";
import { getImageUrl } from "../../assets/data/getImage";

export default function ProductCard() {
    const dataProducts = productsList.map(value =>
    
        <div class="text-centrer shadow-xl rounded-3xl p-4 flex flex-col w-[100%] md:flex-row md:w-[45%] justify-between" key={value.id}>
            <div class="flex flex-col gap-4">
                <div class="bg-white h-44 rounded-t-3xl flex justify-center items-center">
                    <img src={getImageUrl(value)} alt={value.title} />
                </div>
                <div class="py-6 flex flex-col">
                    <h3 class="font-bold text-xl pb-2">{value.title}</h3>
                    <p class="mb-2 h-12 text-neutralGray line-clamp-2 ">{value.description}</p>
                    <div class="flex items-end float-right font-bold">
                        <p class="text-2xl">{value.price}</p>
                        <p class="text-lg text-lighterGray">{value.currency}</p>
                    </div>
                </div>
            </div>
        </div>
    );
    return dataProducts;
};
