  import { BrowserRouter } from "react-router-dom";
  import Router from "./routes";
  import React from "react";

  export default function App() {
    return (
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    );
  }
