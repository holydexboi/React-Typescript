import { useState } from "react";
import Like from "./Like";
function App() {
  const [fill, setFill] = useState(false);

  return (
    <div>
      <Like
        fill={fill}
        onClick={() => {
          setFill(!fill);
          console.log("clicked")
        }}
      />
    </div>
  );
}
export default App;
