import logo from './logo.svg';
import './App.css';
import PhotoList from './components/photoList/PhotoList';
import Add from './components/add/Add';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <PhotoList/>} />
        <Route path="/add" element={ <Add/>} />
      </Routes>
    </div>
  );
}

export default App;
