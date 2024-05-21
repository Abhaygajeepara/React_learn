import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../ components/Spinner';

const JobPage = () => {
    const [job,setJob] = useState(null);
  const { id } = useParams(); 
    const [isLoading, setLoading ] = useState(true);
    useEffect(()=>{
      const fetchJob = async()=>{
        const apiURl =`/api/jobs/${id}`;
        try{
          const res = await fetch(`/api/jobs/${id}`);
        const data = await res.json();
        
        setJob(data);
        }
        catch(error){
          console.log(error)
          
        }finally{
          setLoading(false);
        }
      }
      fetchJob();
    },[id])
    return isLoading? <Spinner></Spinner>: (
      <>
      <h1>{job.title} </h1>
      </>
    )
}

export default JobPage