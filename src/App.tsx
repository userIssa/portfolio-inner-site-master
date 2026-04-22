import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Desktop from './components/os/Desktop';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Desktop />
            </div>
        </BrowserRouter>
    );
}

export default App;