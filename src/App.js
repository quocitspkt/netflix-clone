import request from "./request";
import { JumbotronContainer } from "../src/containers/jumbotron";
import Jumbotron from "./components/jumbotron";
import jumboData from "../src/fixtures/jumbo.json";
import { FooterContainer } from "./containers/footer";
import { FaqsContainer } from "./containers/faqs";
import * as ROUTES from "./constants/routes";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Browse, SignIn, SignUp, Home } from "./pages";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/browse">
          <Browse></Browse>
        </Route>
        <Route exact path="/signin">
          <SignIn></SignIn>
        </Route>
        <Route exact path="/signup">
          <SignUp></SignUp>
        </Route>
        <Route exact path={ROUTES.HOME}>
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
