
import './App.css';
import MailChimp from './ResourcesPages/MailChimp101';
import ResourcesNavbar from './ResourcesPages/ResourcesNavbar';

function App() {
  return (
    <div className="App">
      <MailChimp/>
      {/* <ResourcesNavbar/> */}
       <h1 >This font is for  Paragraphs font and non-Heading fonts</h1>
       <h1 style={{"fontFamily":"Heading"}}  > This font is for  Heading font</h1>
    </div>
  );
}

export default App;
