import { Route, Routes } from 'react-router-dom';
import './App.css';
import Greeting from './components/Greeting';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </div>
  );
}

export default App;