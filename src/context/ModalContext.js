import React, { createContext, useEffect, useState} from 'react';
import axios from 'axios';

// crear el context
export const ModalContext = createContext();

const ModalProvider = (props) => {

    // state del provider
    const [ idreceta, guardarIdReceta ] = useState(null);
    const [ informacion, guardarReceta] = useState({});

    // una vez que tenemos una receta, llamar la api
    useEffect(() => {
        const obtenerInformacion = async () => {
            if(!idreceta) return null;
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`;

            const info = await axios.get(url);

            guardarReceta(info.data.drinks[0]);
        }

        obtenerInformacion();
        
    }, [idreceta])

    return ( 
        <ModalContext.Provider
            value={{
                informacion,
                guardarIdReceta,
                guardarReceta
            }}
        >
            {props.children}
        </ModalContext.Provider>
     );
}
 
export default ModalProvider;