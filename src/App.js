import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Calendar from './components/Calendar';
import Inputpage from './components/Inputpage';
import Landing from './components/Landing';
import Navbar from './components/Navbar';

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
        <Route
          path="calendar"
          element={
            <>
              <Navbar />
              <Calendar />

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
