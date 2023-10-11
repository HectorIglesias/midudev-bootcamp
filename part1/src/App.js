import './App.css';
import Mensaje from "./Mensaje.js";



const App = () => {
  return (
    <div className="App">
      <Mensaje color="red" message="Estamos trabajando" />
      <Mensaje color="yellow" message="en un curso" />
      <Mensaje color="green" message="de react" />
      {+ new Date()}
    </div>
  );
}

export default App;
