import { Router } from "react-router";
import Header from "./components/layout/Header";
import "./App.css";
import Routes from "./routes";
import { history } from "./components/common";
import 'react-circular-progressbar/dist/styles.css';


function App() {
  return (
    <div>
      <Header />
      <Router history={history}>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
