import './App.css';
import Navbar from "./Navbar/Navbar"

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
       <h1 >This font is for  Paragraphs font and non-Heading fonts</h1>
       <h1 style={{"fontFamily":"Heading"}}  > This font is for  Heading font</h1>
    </div>
  );
}

export default App;
