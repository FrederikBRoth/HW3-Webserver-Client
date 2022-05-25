
import React, { useState, useEffect, Fragment } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect
} from "react-router-dom";

import Homepage from "./routes/Homepage"

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            render={props => <Homepage {...props}/>}
            element={<Homepage/>}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
