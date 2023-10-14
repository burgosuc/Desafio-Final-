import "bootstrap/dist/css/bootstrap.min.css";
import MiApi from "./components/MiApi";
import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container-fluid">
      <div className="Uno row">
        <Header className="col-md-12" />
        <MiApi className="col-md-12" />
        <Footer className="col-md-12" />
      </div>
    </div>
  );
}

export default App;
