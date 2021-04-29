import "./App.css";
import { HomePage } from "./containers/HomePage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CustomerAccessPage } from "./containers/customerAccessPage";
import { ExplorePage } from "./containers/explorePage";
import { UploadPage } from "./containers/uploadPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route
            path="/customer/access/:action"
            exact
            component={CustomerAccessPage}
          />
          <Route path= "/explore" exact component={ExplorePage} />
          <Route path= "/upload" exact component={UploadPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;