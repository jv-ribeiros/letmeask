import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";
import { PageHome } from "./pages/PageHome";
import { Global } from "./components/Global";
import { PageNewRoom } from "./pages/PageNewRoom";
import { PageRoom } from "./pages/PageRoom";
import { PageAdminRoom } from "./pages/PageAdminRoom";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Global>
          <Switch>
            <Route path="/" exact component={PageHome} />
            <Route path="/rooms/new" component={PageNewRoom} />
            <Route path="/rooms/:id" component={PageRoom} />
            <Route path="/admin/rooms/:id" component={PageAdminRoom} />
          </Switch>
        </Global>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
