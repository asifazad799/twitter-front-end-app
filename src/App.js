import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  isRouteErrorResponse,
} from "react-router-dom";
import { lazy, Suspense } from "react";
import { ErrorResponse } from "@remix-run/router";

const LandingPage = lazy(() => import("./pages/landingPage/LandingPage"));

function App() {
  return (
    <div className="App">
      <Suspense>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="*" element={<p>error</p>} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
