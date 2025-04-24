import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Login from './Features/Auth/Login.jsx';
import ForgotPassword from './Features/Auth/ForgotPassword.jsx'
import SignUp from './Features/Auth/SignUp.jsx';
import ResetEmail from './Features/Auth/ResetEmail.jsx';
import Error404 from './Features/Error/Error404.jsx';
import Error500 from './Features/Error/Error500.jsx';

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/signUp' element={<SignUp />} />
            <Route path='/forgotPassword' element={<ForgotPassword />} />
            <Route path='/reset/Email' element={<ResetEmail />} />

            <Route path='/error404' element={<Error404 />} />
            <Route path='/error500' element={<Error500 />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
