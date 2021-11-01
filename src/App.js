import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'



function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([])
  const [value, setValue] = useState(0);

  const fetchJobs = async () =>{
    const response = await fetch(url)
    const jobs = await response.json()
    setJobs(jobs)
    setLoading(false);
   
  }

  useEffect(() =>{
    fetchJobs();
    // setLoading(false)
  },[])

  if(loading){
    return <section className="loading section" >
      <h2>Loading...</h2>
      </section>
  }
  const {company,dates,title,duties} = jobs[value];
 
  return <section className="section">
      <div className="title">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
         {/* job button */}
        <div className="btn-container">
          {
            jobs.map((item,index) => {
              return <button key={index} className={`job-btn ${index === value? "active-btn" : "job-btn"}`} onClick={()=> setValue(index)} >{item.company}</button>;
            })
          }
        </div>
        {/* job info */}
       
        <article className="job-info">
            <h3>{title}</h3>
            <h4 className="company">{company}</h4>
            <p>{dates}</p>
            {duties.map((duty,index) => {
              return <div key={index}  className="job-desc">
                  <FaAngleDoubleRight className="job-icon" />
                  <p>{duty}</p>
              </div>
            })}
        </article>

      </div>
  </section>
}

export default App
