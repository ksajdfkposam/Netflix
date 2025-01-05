import React,{useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebaseCon.js' ;
import { getAuth,sendPasswordResetEmail} from "firebase/auth";



const Forget = () => {
    const [email, setEmail] = useState('');
    const navigate=useNavigate();
    const auth = getAuth();
    const clickEmail=(e)=>{
        setEmail(e.target.value);   
      };

      const clickOn=(e)=>{
        e.preventDefault();
        console.log(email)
        sendPasswordResetEmail(auth,email).then(data=>{
            alert("Check your gmail")
            navigate('/login');
        }).catch(err=>{
            alert(err.code)
        })
      
     
      }
    return (
          <div className="LOGIN-1 w-100">
          <div className="container ">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div className="card back text-white" >
                  <div className="card-body p-5 text-center">
        
                    <div className="mb-md-1 mt-md-1 pb-5">
        
                      <h2 className="fw-bold mb-2 text-uppercase">Forget Password</h2>
                      <p className="text-white-50 ">Please enter your email</p>
                    
                      <div className="form-outline form-white mb-4">
                        <input type="email" id="typeEmailX" className="form-control form-control-lg" value={email} onChange={clickEmail} />
                       
                      </div>
        
                     
         
         
                      <button className="btn btn-outline-light btn-lg px-5" type="submit" onClick={clickOn}>Forget Password</button>
                    
                      
                    
                    </div>
        
                    
        
                  </div>
                </div>
              </div>
            </div>
          </div>
        
                </div>
    );
};

export default Forget;