import React, { useEffect } from 'react';



const ConsumoApi = ({ setEstudiantes }) => {

    //

    useEffect(() => {
        const obtenerEstudiantesAprobados = async () => {
            try {
                const response = await fetch('https://api.talentotech.cymetria.com/api/v1/blockchain/obtener-estudiantes-aprobados');
                const data = await response.json();

                if (data.ok) {
                    const estudiantesAprobados = data.estudiantes_aprobados.map(estudiante => ({
                        nombre: estudiante.estudiante.nombres,
                        apellidos: estudiante.estudiante.apellidos,
                        tipoDocumento: estudiante.estudiante.tipo_documento,
                        numDocumento: estudiante.estudiante.num_documento,
                        email: estudiante.estudiante.email,
                        curso: estudiante.curso.nombreCurso,
                        codigoCurso: estudiante.curso.codigoCurso
                    }));
                    setEstudiantes(estudiantesAprobados);
                } else {
                    console.error('Error al obtener los estudiantes aprobados:', data.error);
                }
            } catch (error) {
                console.error('Error al obtener los estudiantes aprobados:', error);
            }
        };

        obtenerEstudiantesAprobados();
    }, []);

    return (
        <>
        </>
    );
};

export default ConsumoApi;