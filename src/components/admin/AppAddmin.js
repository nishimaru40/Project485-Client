import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
// import logo from './logo.svg';
// import '.../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import './myStyle.css';

import { Admin, Resource, EditGuesser } from 'react-admin';
import { UserList, UserCreate,UserFilter } from './users';
import { FoodList, FoodCreate,FoodFilter } from './FoodList';
import { ResList, ResCreate,ResFilter } from './ResterauntAdmin';
import authProvider from './authProvider';
import Dashboard from './Dashboard';

import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('https://localhost:27017/myDB');
function AppAddmin() {
  return (
    
    
      
   <div>
      <Admin dataProvider={dataProvider} authProvider={authProvider} dashboard={Dashboard}>
      <Resource name="users" list={UserList} edit={EditGuesser} create={UserCreate}  />
      <Resource name="FoodList" list={FoodList} edit={EditGuesser} create={FoodCreate}  />
      <Resource name="ResterauntAdmin" list={ResList} edit={EditGuesser} create={ResCreate}  />
      </Admin>
    </div>
      
  );
}

export default AppAddmin;
