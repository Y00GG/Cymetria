import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Input, Button } from "@nextui-org/react";

//Esta funcion nos permite tener un minimo de 5 caracteres para buscar el estudiante
const schema = z.object({
    cedula: z.number().min(5, { message: 'Este campo es obligatorio' }),
});

const Formulario = ({ setEstudianteBuscado }) => {

    //Nos permite identificar que nos entrega y que formulario nos da la informacion deseada para evitar utilizar useState y el onChange como tipicamente se hace la captura de informacion de los formularios
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
    });

    return (
        <div className='flex justify-center flex-col'>
            <form className='flex flex-col gap-4 w-full' onSubmit={handleSubmit((d) => setEstudianteBuscado(d.cedula))}>
                <h1 className='text-3xl text-center'>Consultar Datos Del Estudiante</h1>
                <Input type="number" label="Ingrese el numero de cedula" {...register('cedula', { valueAsNumber: true })} />
                {errors.cedula?.message && <p>{errors.cedula?.message}</p>}
                <div className={'text-center'} >
                    <Button type="submit">Consultar</Button>
                </div>
            </form>
        </div>
    )
}

export default Formulario
