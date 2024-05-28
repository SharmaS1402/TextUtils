import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import './App.css';

function App() {
  return (
    <>
    <Navbar title="TextUtils" aboutText = "About"/>
    <div className="container my-3">
    <TextForm heading = "Enter Text to analyze"/>
    </div>
    {/* <About/> */}
    </>
  );
}


export default App;
