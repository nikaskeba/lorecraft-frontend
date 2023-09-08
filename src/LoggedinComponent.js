import Header from './Header';

import { useAuth0 } from '@auth0/auth0-react'; // Import the useAuth0 hook




import './LoggedinComponent.css';



const LoggedInComponent = () => {
  
    const { isAuthenticated } = useAuth0(); // Call the useAuth0 hook to get the isAuthenticated variable







return (

      <div className="main">
<Header />
<div className="container">
         <div className="row">
      <div className="col-md-10">
            <div style={{ border: '1px solid #000', background:'#fff', padding: '10px', boxShadow: '0px 0px 10px #000', maxWidth: '100%', margin: '0 auto' }}>
       {isAuthenticated ? (  // Conditionally render the navigation links based on isAuthenticated value
            <>
<img src='./images/lorecraft.png' alt='logo' className='loggedinimage'/>      </>
 ) : (
  <div className="row"> 
                <div className="col-md-5">
                  <img src='./images/lorecraftstart.png' alt='logo' className='loggedinimage'/> 
                </div>                
                <div className="col-md-7">
                  <p>
                    Step into your valorous warrior persona with LoreCraft, where AI crafts epic tales and images based on your name, gender, and fierce personality. Sharpen your blade and ready your shield for a unique adventure that awaits you in a realm created just for you. Unleash the warrior within, as every battle cry and heroic deed is woven into a narrative that mirrors your might and mettle.
                  </p>
                </div>
              </div>
          )}
    </div>  </div>  </div>  </div> </div>

  );
};

export default LoggedInComponent;
