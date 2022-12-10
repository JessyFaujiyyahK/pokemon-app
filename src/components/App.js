import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Description from "./Description";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path ='/' element={ <><Header /><Main /> <Footer/> </>}/>
          <Route path ='/pokemon/:id' element={ <><Description /></>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
