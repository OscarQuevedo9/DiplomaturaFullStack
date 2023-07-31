import React from 'react';

const Contacto = (props) => {
    return(
        <main className='holder contacto'>
            <h2>Contacto Rapido</h2>
            <form action='' method='' className='formulario'>
                <p>
                    <laber for='nombre'>Nombre</laber>
                    <input type='text' name=''></input>
                </p>
                <p>
                    <laber for='email'>Email</laber>
                    <input type='text' name=''></input>
                </p>
                <p>
                    <laber for='telefono'>Telefono</laber>
                    <input type='text' name=''></input>
                </p>
                <p>
                    <laber for='mensaje'>Mensaje</laber>
                    <input type='text' name=''></input>
                </p>
                <p class='acciones'>
                    <input type='submit' value='enviar' />
                </p>

            </form>
        </main>
    )
}

export default Contacto;