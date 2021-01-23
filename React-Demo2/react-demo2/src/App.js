/*
 * @Description: 
 * @version: 
 * @Author: sdu-gyf
 * @Date: 2021-01-22 11:42:41
 * @LastEditors: sdu-gyf
 * @LastEditTime: 2021-01-22 16:11:24
 */
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav'
import Login from './pages/login'
import NotFoundPage from './pages/404'

const App=()=> {

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
