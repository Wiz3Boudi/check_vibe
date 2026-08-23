import './App.css';
import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import Onboarding from './pages/Onboarding';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';

function App(style){

  return(
    <div>
      <Routes>
        <Route path='/' element={<Onboarding/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='/sign-up' element={<CreateAccount/>} />
    </Routes>
    </div>
  )
}

export default App;