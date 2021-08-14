import React from 'react';
//Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//components
import Header from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';

//styles
import { GlobalStyle } from './GlobalStyle';

// const Star = () => React.createElement('div', null, "this is a little star") //react without JSX

const App = () => (      
  
  <Router>
    <GlobalStyle /> {/*must be in enclosing tag(div className = " App"), 
    but can be anywhere in the tag(any line) */}
    <Header />

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/:movieId' element={<Movie />} /> 
      {/* /:movieId colon is not included in url, url = /movieId where movieId is the real id of a movie */}
      <Route path='/*' element={<NotFound />} /> 
      {/* /* specifies all routes that do not exist and directs teh user to element not found */}
    </Routes>
    {/* <h1>
      Test
    </h1> */}
  </Router>
)

export default App;
