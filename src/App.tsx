import Buttons from "./components/Button";

function App() {
  return (
    <div>
      <Buttons
        color={"danger"}
        onClick={() => {
          console.log("Clicked");
        }}
      >
        My Buttons
      </Buttons>
    </div>
  );
}
export default App;
// video 3.9 passing children
// Time 3.50
