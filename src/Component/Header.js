
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Header = () => {

  

  
  const[isScroll,setScroll]=useState(false);
    window.onscroll=()=>{
        setScroll(window.pageYOffset===0?false:true);
        return () =>(window.onscroll=null)
    }
    

    console.log(window.pageYOffset,isScroll)
  



    const navi=useNavigate();
  const clickLog=(e)=>{
   
  //  props.history.push('/dashboard')
    navi("/login");
  }
    
    return (
        <header className={(isScroll)?"topNav scroll":"topNav " }>
    <nav className="navbar navbar-expand-md navbar-dark">
      <div className="container-fluid">
        <div className="navbar-brand">
          <Link to={`/`}>
          <img className="nav__logo" src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="" />
          </Link>
        </div>
        
        <div className="navbar">
          <form className="d-flex" role="search">
            <select >
              <option className="opt">English</option>
              <option className="opt">Hindi</option>
            </select>
            <button className="btn btn-outline-danger" type="submit" onClick={clickLog}>
            SignIn
            </button>
            
          </form>
        </div>
      </div>
    </nav>
  </header>
    );
};

export default Header;