import "./App.css";
import { Provider } from "react-redux";
import Body from "./components/body";
import Header from "./components/header";
import store from "./utils/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Body />
      </div>
    </Provider>
  );
}

export default App;
