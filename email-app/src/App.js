import DashBoard from './Dashboard';
import './App.css';
import AdminHome from './AdminHome';
import AllRoutes from './AllRoutes';
import Navbar from './Components/Navbar/Navbar'
import { useSelector } from 'react-redux';

function App() {
  const auth = useSelector( store => store.isAuth);
  
  return (
    <div className="App">
     {
      auth ? <DashBoard /> : <Navbar />
     }
      
     <AllRoutes/>
    </div>
  );
}

export default App;
