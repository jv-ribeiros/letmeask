import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";
import { PageHome } from "./pages/PageHome";
import { Global } from "./components/Global";
import { PageNewRoom } from "./pages/PageNewRoom";
import { PageRoom } from "./pages/PageRoom";
import { PageAdminRoom } from "./pages/PageAdminRoom";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <div>
          <Toaster position="top-center" reverseOrder={false} />
        </div>
        <Global>
          <Switch>
            <Route path="/" exact component={PageHome} />
            <Route path="/rooms/new" component={PageNewRoom} />
            <Route path="/rooms/:id" component={PageRoom} />
            <Route path="/admin/rooms/:id/:admin" exact component={PageAdminRoom} />
            <Route path="*" render={() => <Redirect to={{ pathname: "/" }} />} />
          </Switch>
        </Global>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
