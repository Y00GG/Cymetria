import React, { useEffect } from 'react';



const ConsumoApi = ({ setEstudiantes }) => {

    //En este apartado se consume de una manera simple la API aunque no deberia ser en un componente se hizo de esta manera para facilitar la modificacion del listado y captar los errores

    useEffect(() => {
        const obtenerEstudiantesAprobados = async () => {
            try {
                const response = await fetch('https://api.talentotech.cymetria.com/api/v1/blockchain/obtener-estudiantes-aprobados');
                const data = await response.json();

                if (data.ok) {
                    const estudiantesAprobados = data.estudiantes_aprobados.map(estudiante => ({
                        //Se hace un resgistro de todos los estudiantes para posteriormente filtrar ese listado de objetos
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