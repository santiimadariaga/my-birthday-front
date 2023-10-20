import {
  BrowserRouter,
  Routes as ReactDomRoutes,
  Route,
} from 'react-router-dom';
import Voto from '../pages/Voto/Voto';
import Loading from '../pages/Loading/Loading';
import AddCostume from '../pages/AddCostume/AddCostume';
import Votos from '../pages/Votos/Votos';

const Routes = () => {
  return (
    <BrowserRouter>
      <ReactDomRoutes>
        <Route path='/' element={<Loading />} />
        <Route path='/votaGil' element={<Voto />} />
        <Route path='/addCostume' element={<AddCostume />} />
        <Route path='/votos' element={<Votos />} />
      </ReactDomRoutes>
    </BrowserRouter>
  );
};

export default Routes;
