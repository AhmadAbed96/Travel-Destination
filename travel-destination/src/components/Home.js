import Header from './Header';
import Footer from './Footer';
import Tours from './Tours';

const cityData = require("./data/data.json");
function Home() {
  return (
    <>
      <Header/>
    {
        cityData.map(city=>{

          return (
          <Tours name = {city.name} image = {city.image} />
          )
        })

    }

      <Footer/>
    </>
  );
}

export default Home;
