import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import routes from "./routes";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            {routes.map((route, index) => {
              return (
                <Route
                  path={route.path}
                  element={<route.element />}
                  key={index}
                />
              );
            })}
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
};

export default App;
