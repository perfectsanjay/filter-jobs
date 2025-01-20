import './App.css'
import data from '/Users/sanjaysingh/Desktop/filtering jobs/data.json'

function App() {
  const tag = data.filter((item)=> item.new === true )
  const feature = data.filter((item) => item.featured===true)

  return (
    <>
     <div className="container">
      <img className='header-img' src='images/bg-header-desktop.svg' alt="header_img"/> 
      <div className="jobCard">
        {data.map((item) => (
          <div className="img" key={item.id}>
              <img src={item.logo} alt="logo" />
              <div className="job-info">
                <p className="company">{item.company}</p>
                {item.new && <span className='newBadge'>NEW!</span>}
                {item.featured && <span className='featureBadge'>FEATURED</span>}
              </div>
              <p className="profile">{item.position}</p>
              <div className="time">
                <p className="postedAt">{item.postedAt}</p>
                <li className='contract'>{item.contract}</li>
                <li className='location'>{item.location}</li>

              </div>
              <div className="filterButtons">
                <button className="role">{item.role}</button>
                <button className='level'>{item.level}</button>
                {
                  item.tools.map((item,index) => (
                    <button className="tooll" key={index}>{item}</button>
                  ))
                }
                {item.languages.map((item,index) => (
                  <button className="lang" key={index}>{item}</button>
                ))}

              </div>

          </div>
         
       )) }

      </div>
     </div>
    </>
  )
}

export default App
