import './App.css';
import HomeComp from './Components/Home/HomeComp';
import { Route,Routes} from 'react-router-dom';
import Login from './Components/Login/Login';
import Interceptors from './service/Interceptors';
import Sigin from './Components/Sigin/Sigin';

function App() {
  
  
  return (
       <>
          <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/sigin' element={<Sigin/>} />
            <Route path='/timer' element={<HomeComp/>}/>
          </Routes>
          <Interceptors/>
        </>
  );
}

export default App;
