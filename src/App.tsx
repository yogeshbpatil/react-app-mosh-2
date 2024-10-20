import { useState } from "react";
import Alert from "./components/Alert";
import Buttons from "./components/Button";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>
      )}
      <Buttons color={"danger"} onClick={() => setAlertVisibility(true)}>
        My Buttons
      </Buttons>
    </div>
  );
}
export default App;
// video 3.9 passing children
// Time 3.50
