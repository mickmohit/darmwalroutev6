import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Contact = () => {
    const navigate = useNavigate();
    const goToHome = () =>{
        navigate('/');
     };
  return (
    <div>
    
      <section>
          <h1>Contact Page</h1>
      </section>
      <button onClick={()=> goToHome()}>Got To Home Page</button>
      <button onClick={() => {navigate(-1)}}>Go Back</button>
    </div>
  )
}
