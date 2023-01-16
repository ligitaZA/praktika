
import { useState, useEffect } from "react";
import Kalnas from "./Kalnas";

const App = () => {

  const [data, setData] = useState(null);

  const fetchData = async () => {
    const fetchinamiDuomenys = await fetch('http://localhost:3000/kalnai')
      .then(res => res.json());
    console.log(fetchinamiDuomenys);
    setData(fetchinamiDuomenys);
  }

  useEffect(()=>{
    fetchData();
  }, []);

  return (
    <>
      {
        data?
        data.map(item => 
          <Kalnas
            key={item.id}
            kalnas={item}
          />
        ):
        <img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="loading"/>
      }
    </>
  );
}

export default App;