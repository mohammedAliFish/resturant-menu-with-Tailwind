import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import UnderNav from "./components/UnderNav";
import Zoom from 'react-reveal/Zoom';
import { items } from "./data";
function App() {
  const [itemsData, setItemsData] = useState(items);

  const allCategory = ["الكل", ...new Set(items.map((item) => item.category))];

  console.log(allCategory);

  const filterByCategory = (cat) => {
    if (cat === "الكل") {
      setItemsData(items);
    } else {
      const newArr = items.filter((item) => item.category === cat);
      setItemsData(newArr);
    }
  };

  const filterBySearch = (word) => {
    if (word !== "") {
  
      const newArr = items.filter((item) => item.title === word);
      setItemsData(newArr);
    }
  };

  return (
    <div>
      <Header filterBySearch={filterBySearch}/>
      <Zoom>
      <UnderNav filterByCategory={filterByCategory} allCategory={allCategory} />
      <Card itemsData={itemsData} />
     </Zoom>
     
    </div>
  );
}

export default App;
