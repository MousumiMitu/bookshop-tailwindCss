import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Cart from "./Components/Cart/Cart";
import Review from "./Components/Review/Review";
import Home from "./Components/Home/Home";
import Form from "./Components/Form/Form";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      <Cart></Cart>
      <Review></Review>
      <Form></Form>
    </div>
  );
}

export default App;
