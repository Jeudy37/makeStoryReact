
import '../src/css/App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Login from '../src/components/login'
import Storie from './pages/stories';
import About from './pages/about';
import Layout from './pages/layout';
import AddNew from '../src/components/add_new'
import Istwa from './pages/istwa'
import Edit from './components/edit';
import Data from './data';


function App() {
 
    return(
    <>
  <Data/>
    {/* <Routes>
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>} />
      <Route path='login' element={<Login />} />
      <Route path='about' element={<About />} />
      <Route path='stories' element={<Storie />} />
      <Route path='stories/add-new' element={<AddNew />} />
      <Route path='/stori/read/:tit' element={<Istwa/>}/>
      <Route path='edit/:id' element={<Edit/>}/>
      </Route>
    </Routes> */}
   </>
    );
}

export default App;
