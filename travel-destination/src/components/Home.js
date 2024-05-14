
import Tours from './Tours';
const cityData = require("./data/data.json");
function Home() {
  return (
    <> 
      <div className="d-flex justify-content-center align-items-start flex-wrap  gap-4 mt-4  min-vh-100">
    {
        cityData.map((city)=>{

          return (

          <Tours key={city.id}  city = {city} />
        )
      })
      
    }
    </div>

    </>
  );
}

export default Home;
