


export default function Form() {
    return(
        <form class="flex flex-col gap-4 h-full text-neitralGray">
            <div class="flex flex-col md:flex-row gap-4 w-full">
                <div className="field md:w-1/2">
                    <input type="text" name="firstName" id="firstName" 
                    required
                    maxlength="32"
                    pattern="[A-Za-z\s]{1,32}" class="placeholder:text-mediumGray
                    invalid:border-pink-500 invalid:text-pink-600"/>
                    <label
                    htmlFor="firstName"
                    title="Nombres"
                    data-title="Nombres"
                    ></label>
                    <span class="error">
                    Este campo no puede estar vacío, e.g. John
                    </span>
                </div>
                <div  className="field md:w-1/2">
                    <input type="text" name="lastName" id="lastName"  maxlength="32"
                    pattern="[A-Za-z]{1,32}"
                     required class="placeholder:text-mediumGray invalid:border-pink-500 invalid:text-pink-600"/>
                     <label
                    htmlFor="lastName"
                    title="Apellidos"
                    data-title="Apellidos"
                    ></label>
                    <span class="error">Este campo no puede estar vacío, e.g. Doe</span>
                </div>
                
            </div>
            
            <div class="col-span-2 field">
                <input type="email" name="email" id="email" class=" placeholder:text-mediumGray invalid:border-pink-500 invalid:text-pink-600"
                pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                required/>
                <label
                htmlFor="email"
                title="Correo electrónico"
                data-title="Correo electrónico"
                className="peer-invalid:text-pink-600"
            ></label>
            <span class="error">
                Este campo no puede estar vacío, e.g. correo@ejemplo.com
            </span>
            </div>


            <div class="col-span-2 field">
                <input type="tel" name="phone" id="phone" class=" placeholder:text-mediumGray focus:invalid:border-pink-500 invalid:text-pink-600"
                pattern="^\+[1-9]{1}[0-9]{3,14}$"
                required/>

            <label
                htmlFor="phone"
                title="Número telefónico"
                data-title="Número telefónico"
            ></label>
            <span class="error">
                Este campo no puede estar vacío, e.g. +27 123 4567
            </span>
                
            </div>
            <div class="col-span-2 row-span-6 h-full field">
                <textarea name="message" id="message" required class="h-full placeholder:pt-2 placeholder:text-mediumGray focus:invalid:border-pink-500 invalid:text-pink-600"></textarea>

                <label
                htmlFor="message"
                title="Escribe un mensaje"
                data-title="Escribe un mensaje"
                ></label>
            </div>           
        </form>
    )
};
