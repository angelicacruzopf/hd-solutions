import logoIcn from '../assets/img/hs-logo-icon.png'

export default function Footer() {
    return(
        <section class="bg-neutral-800 flex flex-col justify-center items-center py-16">
            <div class="grid grid-cols-3 w-3/5 place-items-center pb-16">
                <div class="flex flex-col gap-6 w-full">
                    <div class="w-14 h-14 bg-neutral-300 justify-self-center self-center flex justify-center items-center">
                        <img src={logoIcn} alt="Ícono del logo" class="object-cover h-full w-full"/>
                    </div>
                    <p class="text-white text-center">Tu ferretería del futuro</p>
                    <div class="text-white opacity-50 text-5xl flex flex-row justify-center">
                        <i class="fa-brands fa-facebook"></i>
                    </div>
                    
                </div>
                <div class="flex flex-col gap-y-4">
                    <h3 class="text-white font-bold">Mapa del sitio</h3>
                    <ul class="text-neutral-400 grid gap-y-4">
                        <li>Nuestros productos</li>
                        <li>Acerca de nosotros</li>
                        <li>Departamentos</li>
                    </ul>
                </div>
                <div>
                    <ul class="text-neutral-400 grid gap-y-4">
                        <li>Contacto</li>
                        <li>Nuestras sucursales</li>
                    </ul>
                </div>
            </div>
            <hr class="opacity-50 w-3/5"/>
            <span class="text-neutral-400 pt-8 mb-8">2023, Hardware Solutions Inc., Todos los derechos reservados.</span>
        </section>
    );
};
