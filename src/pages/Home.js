import Navbar from '../component/Navbar'; 
import Sidebar from './Sidebar';
import Main from './Main'; 
// import Musicplayer from "../music/Musicplayer"

const Home = () => {
  return (
  <>
    <Navbar/>  
    <Sidebar/>
    
    <div className="main-section">
    <Main/>
    </div>

    
   
  </>
    );
  };
  
  export default Home;
  
  