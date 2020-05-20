import React from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'
// import logo from './logo.svg';
import './myStyle.css';
import TopList from './TopList';
import InsideList from './InsideList';
import OutsideList from './OutsideList';

function App() {
  return (
    <BrowserRouter>
          <ul>
            <li><Link to='/'class="active">Home Top 10</Link></li>
            <li><Link to='/intu'>ในมหาวิทยาลัย</Link></li>
            <li><Link to='/outtu'>นอกมหาวิทยาลัย</Link></li>
            <li><Link to='/other'>อื่นๆ</Link></li>
          </ul>
      <Switch>
        <Route path='/' exact component={TopList} />
        <Route path='/intu' component={InsideList} />
        <Route path='/outtu' component={OutsideList} />
        <Route path='/other' component={()=><h1>อื่นๆ</h1>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
