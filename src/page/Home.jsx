import React, { useState } from 'react'
import Formulario from '../formulario/Formulario'
import ConsumoApi from '../api/ConsumoApi';
import CardEstudiantes from '../components/CardEstudiantes';

const Home = () => {

    //Se crean las variables a las que queremos tener su estado

    //Nos da el listado de todos los estudiantes
    const [estudiantes, setEstudiantes] = useState([]);

    //Obtiene del formulario el estudiante que se desea buscar
    const [estudianteBuscado, setEstudianteBuscado] = useState();

    return (
        <div className='containet'>


            {/* Se envia unicamente la funcion que nos permita tener la informacion que necesitamos */}
            <ConsumoApi
                setEstudiantes={setEstudiantes}
            />
            <Formulario
                setEstudianteBuscado={setEstudianteBuscado}
            />

            <div className='flex justify-center w-full pt-5'>
                {/* Se filtra si existe ya una lista de estudiantes y si hay algo que nos mando el formulario */}
                {estudiantes.length > 0 && estudianteBuscado &&
                    estudiantes.map((estudiante, index) => (
                        // Se recorre con el .map todos los estudiantes y se muestra por medio del card el estudiante que se desea ver su informacion
                        parseInt(estudiante.numDocumento) === estudianteBuscado && (
                            <CardEstudiantes
                                key={index}
                                estudiante={estudiante}
                            />
                        )
                    )
                    )
                }
            </div>

        </div>
    )
}

export default Home
