import ListGroup from "./components/ListGrouup";

let items = ["New York", "San Franscisco", "Tokyo", "London", "paris"];
function App() {
  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}
export default App;
