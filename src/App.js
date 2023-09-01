import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Components/Home';
import MoedaMudas from './Components/MoedaMudas'



function App () {

    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route exact path="/moedamudas" element={<MoedaMudas />} />
        </Routes>
        </BrowserRouter>
    )
}

export default App;
