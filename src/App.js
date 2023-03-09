import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Inputpage from './components/Inputpage';

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
    
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Landing />
            </>
          }
        />

        <Route
          path="event"
          element={
            <>
              <Navbar />
              <Inputpage />

            </>
          }
        />
      </Routes>
    </div>
    </BrowserRouter>
    // {/* // <>
    // // <Navbar />
    // // <Landing />
    // // <Inputpage />
    // // </> */}
  );
}

export default App;
