import React from 'react'
import Input from "../../components/Input/Input"
import { Box, Navigator, Page, Title } from "../Voto/votoStyled"
import { AddButton } from "./addedStyled"
import { addCostume } from '../../logic/addCostumes'

const AddCostume = () => {
    const inputRef = React.useRef<HTMLInputElement | null>();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const contentInput: string | undefined = inputRef.current?.value

        if (!contentInput) {
            alert('Escribí algo wachin')
        } else {
            // Procesar los datos del formulario, por ejemplo, enviarlos al servidor
            addCostume(contentInput);
            alert('Disfraz cargado correctamente!')
        }
    };

    return (
        <Page>
            <Navigator to={'/votaGil'}>Página Votos</Navigator>
            <Box onSubmit={handleSubmit}>
                <Title>Agregar Disfraz</Title>
                <Input
                    reference={inputRef}
                    placeholder="Agregar aquí"
                />
                <AddButton>Agregar</AddButton>
            </Box>
        </Page>
    )
}

export default AddCostume