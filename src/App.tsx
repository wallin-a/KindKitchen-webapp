import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RecipePage from "./pages/RecipePage";
import { Toaster } from "react-hot-toast";
import CreateNewRecipePage from "./pages/CreateNewRecipePage";

const App: React.FC = () => {

  

  return (

    <>
    <Toaster />
      <Router>
        <Header />
        <Routes>

          <Route path="/" element={<HomePage />} />
          <Route path="/new-recipe" element={<CreateNewRecipePage />} />
          <Route path="/recipe/:id" element={<RecipePage />} />
      </Routes>
    </Router>
    </>

  );
};

export default App;
