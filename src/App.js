import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Calendar from './components/Calendar';
import Inputpage from './components/Inputpage';
import Landing from './components/Landing';
import Navbar from './components/Navbar';
import Eventdetails from './components/Eventdetails';
import NewEvent from './components/NewEvent';
import PrevEvent from './components/PrevEvent';



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
              <Eventdetails />
             

              
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
          path="/event/calendar"
          element={
            <>
              <Navbar />
              <Calendar />

            </>
          }
        />
        <Route
          path="/newevent"
          element={
            <>
              <Navbar />
              <NewEvent />

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
