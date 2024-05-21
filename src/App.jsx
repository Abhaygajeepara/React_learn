import {Route,createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import React from 'react'
import Navbar from './ components/Navbar.jsx'
import Hero from './ components/Hero.jsx'
import HomeCard from './ components/HomeCard.jsx'
import JobListing from './ components/JobListings.jsx'
import ViewAllJob from './ components/ViewAllJob.jsx'
import HomePage from './pages/HomePage.jsx';
import MainLayout from './layout/MainLayout.jsx';
import JobsPage from './pages/JobsPage.jsx';
import NotFound from './pages/NotFound.jsx';
import JobPage from './pages/JobPage.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path ='/' element={<MainLayout></MainLayout>}>
       <Route index element={ <HomePage></HomePage>}></Route>
       <Route path="/jobs" element={ <JobsPage></JobsPage>}></Route>
       <Route path="/jobs/:id" element={ <JobPage></JobPage>}></Route>
       <Route path="*" element={ <NotFound></NotFound>}></Route>
    
       
    </Route>
   
  )
)
const App = () => {
  return <RouterProvider router ={router} />
  
}

export default App