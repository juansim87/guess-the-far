import { useState } from "react";
import Card from "./Card";

function Cards() {
  const [items, setItems] = useState(
    [
      { id: 1, img: "https://i.imgur.com/OHhdKDb.png", stat: "" },
      { id: 1, img: "https://i.imgur.com/OHhdKDb.png", stat: "" },
      { id: 2, img: "https://i.imgur.com/yUjmvj0.png", stat: "" },
      { id: 2, img: "https://i.imgur.com/yUjmvj0.png", stat: "" },
      { id: 3, img: "https://i.imgur.com/cVySCuw.png", stat: "" },
      { id: 3, img: "https://i.imgur.com/cVySCuw.png", stat: "" },
      { id: 4, img: "https://i.imgur.com/DELnCSA.png", stat: "" },
      { id: 4, img: "https://i.imgur.com/DELnCSA.png", stat: "" },
      { id: 5, img: "https://i.imgur.com/mLLvjLz.png", stat: "" },
      { id: 5, img: "https://i.imgur.com/mLLvjLz.png", stat: "" },
      { id: 6, img: "https://i.imgur.com/Qz2d0DD.png", stat: "" },
      { id: 6, img: "https://i.imgur.com/Qz2d0DD.png", stat: "" },
      { id: 7, img: "https://i.imgur.com/OuiH7wE.png", stat: "" },
      { id: 7, img: "https://i.imgur.com/OuiH7wE.png", stat: "" },
      { id: 8, img: "https://i.imgur.com/blWACFi.png", stat: "" },
      { id: 8, img: "https://i.imgur.com/blWACFi.png", stat: "" },
    ].sort(() => Math.random() - 0.5)
  );

  const [prev, setPrev] = useState(-1);

  function check(current) {
    // index current !== index prev
    
    const prevIndex = items.indexOf(items[prev]);
    const currentIndex = items.indexOf(items[current]);

    if ((prevIndex !== currentIndex) &&
      items[current].id === items[prev].id) {
      items[current].stat = "active correct";
      items[prev].stat = "active correct";
      setItems([...items]);
      setPrev(-1);
    } else {
      items[current].stat = "active wrong";
      items[prev].stat = "active wrong";
      setItems([...items]);
      setTimeout(() => {
        items[current].stat = "";
        items[prev].stat = "";
        setItems([...items]);
        setPrev(-1);
      }, 1000);
    }
  }

  function handleClick(id) {
    if (prev === -1) {
      items[id].stat = "active";
      setItems([...items]);
      setPrev(id);
    } else {
      check(id);
    }
  }

  return (
    <div className="container">
      {items.map((item, index) => (
        <Card key={index} item={item} id={index} handleClick={handleClick} />
      ))}
    </div>
  );
}

export default Cards;
