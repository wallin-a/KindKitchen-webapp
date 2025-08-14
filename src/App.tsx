import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RecipePage from "./pages/RecipePage";
import { Toaster } from "react-hot-toast";
import CreateNewRecipePage from "./pages/CreateNewRecipePage";
import { ROUTES } from "./utilities/constants";

const App: React.FC = () => {

  

  return (
    <>
    <Toaster />
      <Router>
        <Header title={"Kind Kitchen"} link={ROUTES.HOME} />
        <Routes>
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.NEW_RECIPE} element={<CreateNewRecipePage />} />
          <Route path={ROUTES.RECIPE} element={<RecipePage />} />
      </Routes>
    </Router>
    </>

  );
};

export default App;
