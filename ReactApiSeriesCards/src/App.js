import './App.css';
import Cards from './components/Cards';
import { Routes ,Route} from "react-router-dom"
import DetailCard from './components/DetailCard';
import Form from './components/Form';

function App() {

  return (
    <div className="App">
     
     <Routes>
     <Route path='/' element={<Cards />} />
     <Route path='/shows/:id' element={<DetailCard  />} />
     <Route path='/book/:id' element={<Form />} />
     </Routes>
    </div>
  );
}

export default App;
