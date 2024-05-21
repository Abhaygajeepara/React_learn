import React from 'react'

import JobCard from './JobCard'
import { useState,useEffect } from 'react'
import Spinner from './Spinner'
const JobListings = ({isHome = false}) => {
  const [jobs, setJobs]= useState([]);
  const [isLoading, setLoading ] = useState(true);
  useEffect(()=>{
    const fetchJob = async()=>{
      const apiURl = isHome? "/api/jobs?_limit=3":"/api/jobs";
      try{
        const res = await fetch(apiURl);
      const data = await res.json();
      setJobs(data);
      }
      catch(error){
        console.log(error)
        
      }finally{
        setLoading(false);
      }
    }
    fetchJob()
  },[]);
return (
  <>
  
   <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ?"Recent jobs" :"Browse Jobs"}
        </h2>
        
          {isLoading?(<Spinner loading={isLoading}></Spinner>):(
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {jobs.map((job,index)=>(<JobCard key= {index} job ={job}></JobCard>))}
      </div>
          )}
        
          

          
    
      </div>
    </section>
  </>
)
}

export default JobListings

