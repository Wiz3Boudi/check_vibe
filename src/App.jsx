import './App.css';
import { Route, Routes } from 'react-router';
import Onboarding from './pages/Onboarding';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import MainLayout from './pages/layouts/MainLayout';
import Feeds from './pages/Feeds';
import Messages from './pages/Messages';

function App(style){

  return(
    <div>
      <Routes>
        <Route path='/' element={<Onboarding/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/create-account' element={<CreateAccount/>}/>
          <Route element={<MainLayout/>}>
              <Route path='/feeds' element={<Feeds/>}/>
              <Route path='/messages' element={<Messages/>}/>
          </Route>
    </Routes>
    </div>
  )
}

export default App;