import React from 'react';

export default function BtnIcnLeft({children}) {

    return(
        <>
        <button type="button" class="m-3 bg-primary text-white py-2 px-4 rounded-full font-bold text-lg flex gap-2 items-center hover:bg-secondary transition-all ease-in">
            <i class="fa-solid fa-phone"></i>
            {children}
        </button>
        </>
    );
};