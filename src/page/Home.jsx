import React, { useState } from 'react'
import Formulario from '../formulario/Formulario'
import ConsumoApi from '../api/ConsumoApi';
import CardEstudiantes from '../components/CardEstudiantes';

const Home = () => {

    const [estudiantes, setEstudiantes] = useState([]);
    const [estudianteBuscado, setEstudianteBuscado] = useState();

    return (
        <div className='containet'>

            <ConsumoApi
                setEstudiantes={setEstudiantes}
            />
            <Formulario
                setEstudianteBuscado={setEstudianteBuscado}
            />
            <div className='flex justify-center w-full pt-5'>
                {estudiantes.length > 0 && estudianteBuscado &&
                    estudiantes.map((estudiante, index) => (
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
