import React, { useEffect, useState, useContext } from "react";
import Cards from "./components/Cards";
import "./styles/app.scss"
import { IOffers } from "./helpers/interface"
import axios from "axios";
import { MyContext } from "./helpers/carContext";

const App = () => {
  const [refresh] = useContext(MyContext)
  const [data, setData] = useState<IOffers[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);

  const getData = async () => {
    await axios.get("http://localhost:8000/offers")
      .then((myJson) => {
        setData(myJson.data);
        setLoading(false);
      });
  };
  useEffect(() => {
    getData();
  }, [refresh]);

  if(isLoading){
    return(
      <div className="App">
       App is loading...
    </div>
    )
  }
  return (
    <div className="App">
       {<Cards data={data} />}
    </div>
  );
};

export default App;
