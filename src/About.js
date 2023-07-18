import React from 'react'
import { useNavigate } from 'react-router-dom';

export const About = () => {
    const navigate = useNavigate();

    const goToContact = () => {
        navigate('/contact');
    };
  return (
    <div>
    
      <section>
          <h1>About Page</h1>
      </section>
      <button onClick={()=> goToContact()}>Got To Contact Page</button>
      <button onClick={() => {navigate(-1)}}>Go Back</button>
    </div>
  )
}
