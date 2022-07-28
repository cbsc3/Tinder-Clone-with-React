import logo from './logo.svg';
import './App.css';
import Axios from 'axios'
import { Icon } from '@iconify/react';
import{ useState } from 'react';
import {BrowserRouter as Router, Switch, Routes, Route} from 'react-router-dom';
import Signup from './Signup';
function Nav(){
  return(


    <Icon className="logo"  icon="cib:tinder" />
    
    

  
    
  )
}

function Card(props){
  return(
    <div className="card">
      <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://media.npr.org/assets/artslife/arts/2010/09/jim-parsons/jim-parsons-094f034048394457169d42611ecc5356ecd05c93-s1100-c50.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {props.name}
      <div className="badge badge-secondary"><Icon icon="carbon:location-heart-filled" />{props.location}</div>
    </h2>
    <p>{props.desc}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{props.interest1}</div> 
      <div className="badge badge-outline">{props.interest2}</div>
    </div>
  </div>
</div>
    </div>
  )
}

function Controls(){
   return(
     <div className="controls">
        <div className="btm-nav">
  <button className="control">
  <Icon icon="akar-icons:check" />
  </button>
  <button className="control">
  <Icon icon="bi:x-lg" />
  </button>
  <button className="control">
  <Icon icon="icon-park-outline:like" />
  </button>
  <button className="control">
  <Icon icon="jam:messages" />
  </button>
</div>

     </div>
   )
}



//val.target.value

function App() {
  const [location, setLocation] = useState('Pasadena, CA')
  function getLocation(){
    Axios.get('http://www.geoplugin.net/json.gp')
    .then((response) => {
      console.log(response.data.geoplugin_request)
      console.log(response)
      setLocation(response.data.geoplugin_city + ',' + ' ' + response.data.geoplugin_regionCode)
    })
  }

  getLocation()



  
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<><Nav/><Card location={location} interest1="Physics" interest2="Dungeons & Dragons" desc="Science loving dude in SoCal." /><Controls/></>}/>
        <Route path="/signup" element={<><Nav /><Signup/></>}/>


      </Routes>
    </div>
    </Router>
    

   
  );
}




export default App;
