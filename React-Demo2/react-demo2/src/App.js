/*
 * @Description: 
 * @version: 
 * @Author: sdu-gyf
 * @Date: 2021-01-22 11:42:41
 * @LastEditors: sdu-gyf
 * @LastEditTime: 2021-01-24 19:37:49
 */
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav'
import Login from './pages/login'
import NotFoundPage from './pages/404'
import useSound from 'use-sound'
import React, {useEffect} from 'react'

const App=()=> {

  // useEffect(()=>{
  //   useSound("/dictvoice?audio=word&type=1")
  // })

  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path='/login' component= {Login}></Route>
          <Route component= {NotFoundPage}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
