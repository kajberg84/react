import "./App.css";
import Navbar from "./components/ui/navbar/Navbar";
import Home from "./components/pages/Home";
function App() {
  return (
    <div className='app-wrapper'>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
