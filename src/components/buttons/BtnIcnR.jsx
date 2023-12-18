import React from 'react';

export default function BtnIcnRight({children}) {

    return(
        <>
        <button type="button" class="m-3 text-primary py-2 px-4 rounded-full font-semibold text-lg flex gap-2 items-center transition-all ease-in">
            {children}
            <i class="fa-solid fa-download"></i>
        </button>
        </>
    );
};