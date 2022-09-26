import { Routes, Route } from "react-router-dom";
import './Main.css';
import Test from './components/Test';
import Landing from './components/Landing';

function App() {
  return (
    <div className="">

    {/* Just Testing React Router Functionality. It works! */}
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/test" element={<Test/>}/>
      </Routes>

    </div>
  );
}


export default App;
