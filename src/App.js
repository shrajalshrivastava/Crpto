import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import CoinListing from "./pages/CoinListing";
import CoinDetailPage from "./pages/CoinDetailPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={CoinListing} />
          <Route path="/coin/:id" exact component={CoinDetailPage} />
          <Route>404 Not Found</Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
