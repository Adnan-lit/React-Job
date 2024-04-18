import React from 'react';
import Hero from '../Hero.jsx';
import HomeCard from '../HomeCard.jsx';
import JobListings from '../JobListings.jsx';
import ViewAllJobs from '../ViewAllJobs.jsx';

function HomePage() {
  return (
    <div>
      <Hero />
        <HomeCard />
        <JobListings isHome= {true}/>
        <ViewAllJobs />

    </div>
  )
}

export default HomePage
