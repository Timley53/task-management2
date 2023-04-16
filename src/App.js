import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes
} from 'react-router-dom'


///layoust
import RootLayout from './layouts/RootLayout';
import Developer from './layouts/Developer';
import Home from './layouts/Home';
import Contact from './layouts/Contact';
import AllTasks from './layouts/homeLayouts/AllTasks';
import Tasks from './layouts/homeLayouts/Tasks';



//////================>
const router = createBrowserRouter(
  createRoutesFromElements(
<Route path='/' element={<RootLayout/>}>

  <Route  index element ={<Home/>}/>

  

  <Route path='/developer' element ={<Developer/>}/>
  <Route path='/contact' element ={<Contact/>}/>





</Route>
  )
)


function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
