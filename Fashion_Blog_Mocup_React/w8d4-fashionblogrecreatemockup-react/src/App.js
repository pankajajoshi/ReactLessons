import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import img1 from "./images/blogimage1.jpg";
import img2 from "./images/blogimage2.jpg";
// import Article from './components/Article';
import Footerbar from './components/Footerbar';



function App() {
  
  return (
    <div className="App">
      <Header />
     <Navbar /> 
     
     <article className="articlecontent">
        <div>
          
            <div className="datecontent">11/12/20</div>
         
          <div
             className="titlecontent">On the Street in Brooklyn</div>
          
          
            <div>
              <img src={img1} alt="img1" /></div>
              <div>
              <span className="firstpara">
                Cary ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                 Excepteur sint occaecat cupidatat 
                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
                </div>
             
              <div>
              <img src={img2} alt="img2" /></div>
              <div>
              <span className="secondpara">Selfies ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                 Excepteur sint occaecat cupidatat 
                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
              </div>
        </div>
      </article>
      <Footerbar />
    </div> 
  );
}

export default App;
