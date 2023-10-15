
import { Route, Routes } from 'react-router';
import './App.css';
import Result from './pages/Result';
import Review from './pages/Review';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
    
      {/* <Result/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/addreview' element={<Review/>}  />
        <Route path='/getreview' element={<Result/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
