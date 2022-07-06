import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import './App.scss';
import ResumeApp from './Components/ResumeApp/ResumeApp';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ResumeApp />}/>
                <Route path="/template" element={<Temaplate />}/>
            </Routes>
        </BrowserRouter>
    );
}



function Temaplate() {
    return <h2>Temaplate</h2>;
}

export default App;
