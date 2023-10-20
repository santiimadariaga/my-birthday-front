import { MiCara, Content } from "./loadStyled"
import eu from '../../assets/caraSanto.png'
import { useNavigate } from 'react-router-dom'

const Loading = () => {

    const navigate = useNavigate()

    setTimeout(() => {
        navigate('/votaGil')
    }, 3800);

    return (
        <Content>
            <MiCara src={eu} />
        </Content>
    )
}

export default Loading