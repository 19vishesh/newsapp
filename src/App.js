
import React, { Component } from 'react'
import Navbar from './MyComponents/Navbar';
import News from './MyComponents/News';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default class App extends Component {

  
  state = {
    progress: 0,
  }
  
  setProgress = (prog) => {
    this.setState({progress:prog})
  }
  
  render() {
    const apikey = process.env.REACT_APP_NEWS_API
    const pageSize = 5;
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            height={3}
            color='#f11946'
            progress={this.state.progress}
          />
          <Routes>
            <Route exact path='/' element={<News setProgress={this.setProgress} key="general" pagesize={pageSize} apiKey={apikey} country="in" category='general' />}></Route>
            <Route exact path='/general' element={<News setProgress={this.setProgress} key="general" pagesize={pageSize} apiKey={apikey} country="in" category='general' />}></Route>
            <Route exact path='/entertainment' element={<News setProgress={this.setProgress} key="entertainment" pagesize={pageSize} apiKey={apikey} country="in" category='entertainment' />}></Route>
            <Route exact path='/business' element={<News setProgress={this.setProgress} key="business" pagesize={pageSize} apiKey={apikey} country="in" category='business' />}></Route>
            <Route exact path='/health' element={<News setProgress={this.setProgress} key="health" pagesize={pageSize} apiKey={apikey} country="in" category='health' />}></Route>
            <Route exact path='/science' element={<News setProgress={this.setProgress} key="science" pagesize={pageSize} apiKey={apikey} country="in" category='science' />}></Route>
            <Route exact path='/sports' element={<News setProgress={this.setProgress} key="sports" pagesize={pageSize} apiKey={apikey} country="in" category='sports' />}></Route>
            <Route exact path='/technology' element={<News setProgress={this.setProgress} key="technology" pagesize={pageSize} apiKey={apikey} country="in" category='technology' />}></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}
