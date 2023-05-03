import { useState } from "react";
import Like from "./Like";
function App() {
  const [cart, setCart] = useState({
    discount: .1,
    items: [{id : 1, title: 'Product 1', quatity: 1}, {id : 1, title: 'Product 2', quatity: 1}]
  })

  const handleClicked = () => {
    setCart({...cart, items: cart.items.map(item => item.id === 1 ? {...item, quatity: 2} : item)})
  }

  return <div>Like</div>;
}
export default App;
