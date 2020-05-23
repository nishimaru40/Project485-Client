import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
// import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './myStyle.css';
import TopList from './TopList';
import InsideList from './InsideList';
import OutsideList from './OutsideList';
import signIn from './components/signIn';
import signUp from './components/signUp';
import profileStatus from './components/profileStatus';
import Restaurant from './Restaurant';

function App() {
  return (
    <BrowserRouter>
      <ul class="nav-bar">
        <li class="nav-item"><Link to='/home' class="active">Home Top 10</Link></li>
        <li class="nav-item"><Link to='/intu'>ในมหาวิทยาลัย</Link></li>
        <li class="nav-item"><Link to='/outtu'>นอกมหาวิทยาลัย</Link></li>
        <li class="nav-item"><Link to='/other'>อื่นๆ</Link></li>
        
        <div class="auth-state">
          {/* {profileStatus()} */}
          <li id="right-li" class="nav-item" ><Link to='/signUp'>สมัครสมาชิก</Link></li>
          <li id="right-li" class="nav-item" ><Link to='/signIn'>เข้าสู่ระบบ</Link></li>
        </div>
        
      </ul>
      <Switch>
        <Route path='/home' exact component={TopList} />
        <Route path='/intu' component={InsideList} />
        <Route path='/outtu' component={OutsideList} />
        <Route path='/other' component={() => <h1>อื่นๆ</h1>} />
        <Route path='/signUp' component={signUp} />
        <Route path='/signIn' component={signIn} />
        <Route path='/Restaurant' component={Restaurant} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
