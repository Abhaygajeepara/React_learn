import React from 'react'
import Hero from '../ components/Hero'
import HomeCard from '../ components/HomeCard'
import JobListings from '../ components/JobListings'
import ViewAllJob from '../ components/ViewAllJob'
const HomePage = () => {
  return (
   <>
    <Hero></Hero>
    <HomeCard></HomeCard>
    <JobListings isHome={true}></JobListings>
    <ViewAllJob></ViewAllJob>
</>
  )
}

export default HomePage