import { Route, Routes } from "react-router-dom";
import "./App.css";
import RouteBoundary from "./routes/RouteBoundary";
import { routes } from "./routes/route";
import "bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";

function App() {
  return (
    <div className="app">
      <Routes>
        {routes &&
          routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        <Route path="*" element={<RouteBoundary />} />
      </Routes>
    </div>
  );
}

export default App;
