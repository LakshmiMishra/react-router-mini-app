import {useNavigate, Outlet} from 'react-router-dom';

export const Contact = () => {
  const navigate=useNavigate();
  const handleSubmit=()=>{
    console.log("do some work");
    navigate("/");
  }
  return (
    <><div className="component">Contact</div>
    <Outlet/>
    <button className="primary" onClick ={handleSubmit}>Back to Home</button></>
  )
}

