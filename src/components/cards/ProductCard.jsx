import { productsList } from "../../assets/data/dataProducts";
import { getImageUrl } from "../../assets/data/getImage";

export default function ProductCard() {
    const dataProducts = productsList.map(value =>
    
        <div class="text-centrer shadow-xl rounded-3xl p-6 flex flex-col h-full" key={value.id}>
            <div class="flex flex-col justify-between h-full">
                <div class="bg-white h-44 rounded-t-3xl flex justify-center items-center">
                    <img src={getImageUrl(value)} alt={value.title} />
                </div>
                <div class="py-6 px-4 flex flex-col justify-between h-full">
                    <h3 class="font-bold text-xl pb-2">{value.title}</h3>
                    <p class="pb-2 text-gray-500">{value.description}</p>
                    <div class="flex flex-row-reverse items-end float-right text-slate-600 font-bold">
                        <p class="text-lg text-lighterGray">{value.currency}</p>
                        <p class="text-2xl">{value.price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
    return dataProducts;
};
