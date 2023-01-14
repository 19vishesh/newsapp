
import React, { Component } from 'react'
import Navbar from './MyComponents/Navbar';
import News from './MyComponents/News';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          
          <Routes>
            <Route exact path='/' element={<News pagesize={6} apiKey={"d4315147846a47f19feb007cae1d87b9"} country="in" category='general' />}></Route>
            <Route exact path='/general' element={<News key="general" pagesize={6} apiKey={"d4315147846a47f19feb007cae1d87b9"} country="in" category='general' />}></Route>
            <Route exact path='/entertainment' element={<News key="entertainment" pagesize={6} apiKey={"d4315147846a47f19feb007cae1d87b9"} country="in" category='entertainment' />}></Route>
            <Route exact path='/business' element={<News key="business" pagesize={6} apiKey={"d4315147846a47f19feb007cae1d87b9"} country="in" category='business' />}></Route>
            <Route exact path='/health' element={<News key="health" pagesize={6} apiKey={"d4315147846a47f19feb007cae1d87b9"} country="in" category='health' />}></Route>
            <Route exact path='/science' element={<News key="science" pagesize={6} apiKey={"d4315147846a47f19feb007cae1d87b9"} country="in" category='science' />}></Route>
            <Route exact path='/sports' element={<News key="sports" pagesize={6} apiKey={"d4315147846a47f19feb007cae1d87b9"} country="in" category='sports' />}></Route>
            <Route exact path='/technology' element={<News key="technology" pagesize={6} apiKey={"d4315147846a47f19feb007cae1d87b9"} country="in" category='technology' />}></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}
