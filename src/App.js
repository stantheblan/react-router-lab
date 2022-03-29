import './App.css';
 
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Profile from './Pages/Profile'
import ErrorPage from './Pages/ErrorPage'

function App() {
  return (
    <Router>
      <nav>
        <Link to={'/'}>   Home   </Link>
        <Link to={'/about'}>   About   </Link>
        <Link to={'/profile'}>   Profile   </Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/profile/:USERNAME' element={<Profile/>} />
        <Route path='/profile/' element={<Profile/>} />
        <Route path='/*' element={<ErrorPage/>} />
      </Routes>
      <div> FOOOter </div>
    </Router>
  );
}

export default App;
