import DashBoard from './Dashboard';
import './App.css';
import AdminHome from './AdminHome';
import AllRoutes from './AllRoutes';
import Navbar from './Components/Navbar/Navbar'
import { useSelector } from 'react-redux';
import { store } from './Redux/store';
import Home from './Components/myHome/Home';

function App() {
  const auth = useSelector((store) => store.store.isAuth);
    console.log(auth);
  return (
    <div className="App">
     {
      auth ? <DashBoard /> : 
      <Navbar /> 
      //<Home />
     }
      
     <AllRoutes/>
     {/* <Navbar /> */}
    </div>
  );
}

export default App;
