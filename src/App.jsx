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
import JobPage, {jobLoader} from './pages/JobPage.jsx';
import AddJobPage from './pages/AddJobPage.jsx';
import EditPostPage from './pages/EditPostPage.jsx';


const App = () => {

  const addJob =async (newJob)=> {
    const res = await fetch('/api/jobs', {
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(newJob),
    });
    return;

  }
  // delete job
  const deleteJob = async(id)=>{
    const res = await fetch(`/api/jobs/${id}`, {
      method:"DELETE",
     
    });
    return;
  }
  const updateJob = async(job)=>{
    const res = await fetch(`/api/jobs/${job.id}`, {
      method:"PUT",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(job),
    });
    return;
  }
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path ='/' element={<MainLayout></MainLayout>}>
         <Route index element={ <HomePage></HomePage>}></Route>
         <Route path="/jobs" element={ <JobsPage></JobsPage>}></Route>
         <Route path="/jobs/:id" element={ <JobPage deleteJob ={deleteJob}></JobPage >} loader= {jobLoader} ></Route>
         <Route path="add-job" element={ <AddJobPage addJobSubmit={addJob}></AddJobPage>}></Route>
         <Route path="/edit-job/:id" element={ <EditPostPage updateJobSubmit= {updateJob} ></EditPostPage >} loader= {jobLoader} ></Route>
         <Route path="*" element={ <NotFound></NotFound>}></Route>
  
         
      </Route>
     
    )
  )

  return <RouterProvider router ={router} />
  
}

export default App