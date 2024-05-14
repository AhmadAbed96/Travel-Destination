
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import TourDetails from './components/TourDetails';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' exact Component={Home}/>
        <Route path='tourDetails/:id' Component={TourDetails}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
