import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Products from "./components/Products";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Main />
        <Products />
      </div>
    </>
  );
}

export default App;
