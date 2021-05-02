import "./App.css";
import { HomePage } from "./containers/HomePage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CustomerAccessPage } from "./containers/customerAccessPage";
import { ExplorePage } from "./containers/ExplorePage";
import { UploadPage } from "./containers/uploadPage";
import { SettingsPage } from "./containers/settingsPage"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route exact path="/ExplorePage" component={ExplorePage} />
          <Route
            path="/customer/access/:action"
            exact
            component={CustomerAccessPage}
          />
          <Route path= "/explore" exact component={ExplorePage} />
          <Route path= "/upload" exact component={UploadPage} />
          <Route path= "/settings" exact component={SettingsPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;