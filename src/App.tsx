import ListGroup from "./components/ListGrouup";

let items = ["New York", "San Franscisco", "Tokyo", "London", "paris"];
const handleSelectItem = (item: string) => {
  console.log(item);
};

function App() {
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}
export default App;
