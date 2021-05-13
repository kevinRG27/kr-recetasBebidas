import React, {useContext, useState} from 'react';
import {CategoriasContext} from '../context/CategoriasContext';
import {RecetasContext} from '../context/RecetasContext'

const Formulario = () => {

    const {categorias} = useContext(CategoriasContext);
    const {buscarRecetas,guardarConsultar} = useContext(RecetasContext);

    const [busqueda, guardarBusqueda] = useState({
        nombre: '',
        categoria:''
    })


    //funcion para leer los contenidos
    const obtenerDatosReceta = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    return (  
        <form
            className='col-12'
            onSubmit={e => {
                e.preventDefault();
                buscarRecetas(busqueda);
                guardarConsultar(true);
            }}
        >
            <fieldset className='text-center'>
                <legend>Busca bebidas por Categoría o Ingrediente</legend>
            </fieldset>

            <div className='row mt-4'>
                <div className='col-md-4'>
                    <input 
                        className='form-control'
                        name='nombre'
                        placeholder='Buscar por ingrediente'
                        type='text'
                        onChange={obtenerDatosReceta}
                    />
                </div>

                <div className='col-md-4'>
                    <select
                        className='form-control'
                        name='categoria'
                        onChange={obtenerDatosReceta}
                    >
                        <option
                            value=''
                        >--Seleccionar Categoría--</option>
                        {categorias.map(categoria => (
                            <option
                                key={categoria.strCategory}
                                value={categoria.strCategory}
                                >{categoria.strCategory}</option>
                        ))}
                    </select>
                </div>

                <div className='col-md-4'>
                    <input 
                        className='btn btn-block btn-primary'
                        value='Buscar Bebidas'
                        type='submit'
                    />
                </div>
            </div>
        </form>
    );
}
 
export default Formulario;