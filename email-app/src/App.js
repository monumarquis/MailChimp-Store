

import './App.css';
import Accor from './ResourcesPages/Accordian';
import HelpCenterPage from './ResourcesPages/HelpCenterPage';
import MailChimp from './ResourcesPages/MailChimp101';
import MarketingPage from './ResourcesPages/MarketingPage';
import ResourcesNavbar from './ResourcesPages/ResourcesNavbar';
import StoreHomePage from './StorePage/StoreHomePage';
import StoreSetUp from './StorePage/StoreSetUp';

function App() {
  return (
    <div className="App">
      {/* <MailChimp/> */}
      {/* <ResourcesNavbar/> */}
      {/* <HelpCenterPage/> */}
       <h1 >This font is for  Paragraphs font and non-Heading fonts</h1>
       <h1 style={{"fontFamily":"Heading"}}  > This font is for  Heading font</h1>
    </div>
  );
}

export default App;
