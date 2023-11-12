import { BrowserRouter , Routes, Route} from 'react-router-dom'

//pages and components
import Home from './pages/Home'
import Navbar from './components/Navabar';


function App() {
  return (
    <div className="pages">
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
