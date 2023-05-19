import React from 'react';
import LandPage from './components/LandPage';
import Mypage from './components/MyPage'
import Admin from './components/Admin'
import ManageUser from './components/ManageUser'
import ManageProblem from './components/ManageProblem'
import LoginPage from './components/LoginPage'
import SignupPage from './components/SignupPage'
import { Counter } from './features/counter/Counter';
import './App.css';

const App: React.FC = () => {
  //return <Mypage />;
  // return <ManageUser/>;
  //return <ManageProblem/>;
  //return <Admin />;
  // return <LoginPage/>;
  return <SignupPage/>;
};

export default App;
