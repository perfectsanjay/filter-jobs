import "./App.css";
import data from "/Users/sanjaysingh/Desktop/filtering jobs/data.json";
import { useState } from "react";

function App() {
  const [selectedFilter,setSelectedFilter] = useState([])

  const handleFilterClick = (filter) => {
    setSelectedFilter((prevFilters) =>
      prevFilters.includes(filter)
        ? prevFilters.filter((item) => item !== filter) 
        : [...prevFilters, filter] 
    );
  };
  
  const ClearFilter = () => {
    setSelectedFilter([])
  } 

  const filteredJob  = data.filter((item) => {
    const jobFilter =[
      item.role,
      item.level,
      ...item.tools,
      ...item.languages,
    ]
    return selectedFilter.every((filter) => jobFilter.includes(filter)) 
  })

  return (
    <>
      <div className="container">
      <img className="header-img" src="/images/bg-header-desktop.svg" alt="header_img" />

        {selectedFilter.length>0 && (
           <div className="filterBar">
           <div className="filButton">
            {selectedFilter.map((filter,index) => (
           <div className="filterSelect" key={index}><p>{filter}</p>
           <button className="removeButton" onClick={() => handleFilterClick(filter)}>X</button>
           </div>
          ))}
           </div>
         
           <button className="clear" onClick={ClearFilter}>clear</button>
         </div>
        )}
       
        <div className="jobCard">
          <div className="job-sub"></div>
          {filteredJob.map((item) => (
            <div className="subcont" key={item.id}>
              <div className="img-info">
              <div className="img">
                <img src={item.logo} alt="logo" />
              </div>

              <div className="info-cont">
                <div className="job-info">
                  <p className="company">{item.company}</p>
                  {item.new && <span className="newBadge">NEW!</span>}
                  {item.featured &&  <span className="featureBadge">FEATURED</span>}
                </div>
                <p className="profile">{item.position}</p>
                <div className="time">
                  <p className="postedAt">{item.postedAt}</p>
                  <li className="contract">{item.contract}</li>
                  <li className="location">{item.location}</li>
                </div>
              </div>
              </div>
             

              <div className="filterButtons">
                <button className="role" onClick={() => handleFilterClick(item.role)}>{item.role}</button>
                <button className="level" onClick={() => handleFilterClick(item.level)}>{item.level}</button>
                {item.tools.map((item, index) => (
                  <button className="tooll" key={index} onClick={() => handleFilterClick(item)}>
                    {item}
                  </button>
                ))}
                {item.languages.map((item, index) => (
                  <button className="lang" key={index} onClick={() => handleFilterClick(item)}>
                    {item}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
