import './App.css';

function App() {
  return (
    <div className="App">
       <h1 >This font is for  Paragraphs font and non-Heading fonts</h1>
       <h1 style={{"fontFamily":"Heading"}}  > This font is for  Heading font</h1>
    </div>
  );
}import './App.css';
import Home from "./vaibhav/Home"
import Pricing from './vaibhav/Pricing';
function App() {
  return (
    <div className="App">
 
       <Home/>
      < Pricing/>
      
    </div>
  );
}

export default App;



