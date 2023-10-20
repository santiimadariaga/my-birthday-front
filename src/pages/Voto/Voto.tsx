import { useEffect, useState } from 'react';
import { axiosDb } from "../../helpers/axios";
import { Box, Navigator, NavigatorTwo, Page, Select, SendButton, Title } from "./votoStyled";

const Voto = () => {
    const [allCostumes, setAllCostumes] = useState([]);
    const [selectedCostume, setSelectedCostume] = useState(''); // Estado para la opción seleccionada

    const fetchCostumes = async () => {
        try {
            const response = await axiosDb.get('/getCostumes');
            setAllCostumes(response.data);
        } catch (error) {
            console.error("Error fetching costumes:", error);
        }
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!selectedCostume) {
            alert('Por favor, selecciona un disfraz');
            return;
        }

        try {
            await axiosDb.post('/sendVoto', {
                miVoto: selectedCostume,
            });
            console.log(`Voto enviado: ${selectedCostume}`);
            alert(`Voto enviado: ${selectedCostume}`);
        } catch (error) {
            console.error("Error al enviar el voto:", error);
        }
    }

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCostume(e.target.value);
    }

    useEffect(() => {
        fetchCostumes();
    }, []);

    return (
        <Page>
            <Navigator to={'/votos'}>VOTOS</Navigator>
            <NavigatorTwo to={'/addCostume'}>ADMIN</NavigatorTwo>
            <Box onSubmit={handleSubmit}>
                <Title>Mejor Disfraz</Title>
                <Select onChange={handleSelectChange} value={selectedCostume}>
                    <option value="">Selecciona un disfraz</option>
                    {allCostumes.map(({ name, id }) => (
                        <option key={id} value={name}>
                            {name}
                        </option>
                    ))}
                </Select>
                <SendButton type="submit">Enviar</SendButton>
            </Box>
        </Page>
    );
}

export default Voto;

