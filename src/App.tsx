import { useState } from "react";
import Alerts from "./Alerts";
import Button from "./Button";
function App() {
  const [dismiss, setDismiss] = useState(false)
  return (
    <div>
      {dismiss && <Alerts onClose={() => setDismiss(false)}>Hello World</Alerts>}
      <Button color="secondary" onClick={() => setDismiss(true)}>
        My Button
      </Button>
    </div>
  );
}
export default App;
