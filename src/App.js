import { Route, Routes } from 'react-router-dom';

import Home from './Components/Home';
import MoedaMudas from './Components/MoedaMudas'



function App () {

    return (
        
        <Routes>
            <Route path='/' element={<Home />} />
            <Route exact path="/moedamudas" element={<MoedaMudas />} />
        </Routes>
        
    )
}

export default App;