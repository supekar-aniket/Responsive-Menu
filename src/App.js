import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [menuStatus,setMenuStatus] = useState(false);

  return (
    <div className="App">
      
      <button className='menuOpenBtn' onClick={()=>{setMenuStatus(!menuStatus)}}> 
        &#9776;        
      </button>
      
      <div className={`menu ${menuStatus ? 'activeMenu' : ''}`}>
      <button className='menuCloseBtn' onClick={()=>{setMenuStatus(!menuStatus)}}>
        &times;
      </button>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Course</li>
          <li>Gallary</li>
          <li>Contact US</li>
        </ul>
      </div>

    </div>
  );
}

export default App;
