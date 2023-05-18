import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Dark from './Components/Dark';
import Navbar from './Components/Navbar';
import News from './Components/News';
import Error from './Components/Error';

const App = () => {

  const [dark, setDark] = useState("light");
  let country = "in";
  let pageSize = 70;
  const darkMode = () => {
    if (dark === "light") {
      setDark("dark");
      document.body.style.backgroundColor = "#0e1720";
      document.body.style.color = "white";
    }
    else {
      setDark("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }

  return (
    <>
      <Navbar theme={dark} />
      <Dark lightToDark={darkMode} />
      <Routes>
        <Route path="/" element={<News theme={dark} country={country} category={"general"} pageSize={pageSize} />} />
        <Route path='NewsApp' element={<News theme={dark} country={country} category={"general"} pageSize={pageSize}/>}/>
        <Route path="business" element={<News theme={dark} country={country} category={"business"} pageSize={pageSize} />} />
        <Route path="entertainment" element={<News theme={dark} country={country} category={"entertainment"} pageSize={pageSize} />} />
        <Route path="health" element={<News theme={dark} country={country} category={"health"} pageSize={pageSize} />} />
        <Route path="science" element={<News theme={dark} country={country} category={"science"} pageSize={pageSize} />} />
        <Route path="sports" element={<News theme={dark} country={country} category={"sports"} pageSize={pageSize} />} />
        <Route path="technology" element={<News theme={dark} country={country} category={"technology"} pageSize={pageSize} />} />
        <Route path='*' element={<Error/>}/>
      </Routes>
    </>
  )
}

export default App
