import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Components/Home';
import MoedaMudas from './Components/MoedaMudas'



function App () {

    return (
        <Router>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route exact path="/moedamudas" element={<MoedaMudas />} />
        </Routes>
        </Router>
    )
}

export default App;
