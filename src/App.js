import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Components/Home';
import MoedaMudas from './Components/MoedaMudas'



function App () {

    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route exact path="../moeda-mudas" element={<MoedaMudas />} />
        </Routes>
        </BrowserRouter>
    )
}

export default App;
