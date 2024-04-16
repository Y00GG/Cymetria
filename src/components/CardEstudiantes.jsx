import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";

const CardEstudiantes = ({ estudiante }) => {

    return (
        <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3">
                <div className="flex flex-col">
                    <p className="text-md">Nombre: {estudiante.nombre} {estudiante.apellidos}</p>
                </div>
            </CardHeader>
            <Divider />
            <CardBody>
                <p>Tipo de Documento: {estudiante.tipoDocumento}</p>
                <p>Número de Documento: {estudiante.numDocumento}</p>
                <p>Email: {estudiante.email}</p>
                <p>Curso: {estudiante.curso}</p>
                <p>Código de Curso: {estudiante.codigoCurso}</p>
            </CardBody>
            <Divider />
        </Card>
    );
}

export default CardEstudiantes
