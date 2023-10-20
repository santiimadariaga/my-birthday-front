import { useEffect, useState } from 'react';
import { Box, Navigator, Page, Title } from '../Voto/votoStyled'
import { axiosDb } from '../../helpers/axios';
import { PFlex, Parraf } from './votosStyled';

const Votos = () => {

    const [allVotos, setAllVotos] = useState([]);

    const fetchVotos = async () => {
        try {
            const response = await axiosDb.get('/getVotos');
            const arrRes = response.data
            // console.log("RESPONSE", arrRes)
            setAllVotos(arrRes);
        } catch (error) {
            console.error("Error fetching votos:", error);
        }
    }

    useEffect(() => {
        fetchVotos();
    }, []);

    return (
        <Page>
            <Navigator to={'/votaGil'}>Votar</Navigator>
            <Box>
                <Title>Mejor Disfraz</Title>
                <PFlex>
                    {allVotos.map(({ miVoto, id }) => (
                        <Parraf key={id}>
                            ,{" " + miVoto + " "}
                        </ Parraf>
                    ))}
                </PFlex>
            </Box>
        </Page>
    )
}

export default Votos