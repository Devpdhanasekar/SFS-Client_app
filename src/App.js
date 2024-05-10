import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Demo from "./componets/Demo/Demo";
import Form from "./componets/Form/Form";
import Chart from "./componets/Chart/Chart";

function App() {
  const barData = [10, 20, 30, 40];
  const labels = ['A', 'B', 'C', 'D'];
  return (
    <BrowserRouter>
      <div className="App-header">
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/demo" element={<Demo />} />
          <Route
            path="/chart"
            element={
              <Chart
              data={barData} labels={labels}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
