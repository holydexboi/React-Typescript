import { useState } from "react";
import Like from "./Like";
function App() {
  const [pizza, setPizza] = useState({
    name: 'Spicy Pepperoni',
    toppings: ['Mushroom']
  })

  const handleClicked = () => {
    setPizza({...pizza, toppings: [...pizza.toppings, 'cheese']})
  }

  return <div>Like</div>;
}
export default App;
