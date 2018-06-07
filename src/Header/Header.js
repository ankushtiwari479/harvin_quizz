import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../logo.png'
import Timer from '../Timer/Timer'
import alarmLogo from '../alarmJ.png'
function Header() {
    return (
      <div className="Header">
        <div className="navbar" style={{float:"left",width:"100%"}}>
          <Link to="/" className='navbarLink' style={{marginLeft:'7vw'}}><span>Have any question?</span></Link>
          <Link to="/RouteTwo" className='navbarLink'><span>(+91) 8470933206</span></Link>
          <Link to="/RouteThree" className='navbarLink'><span>{"info@harvin.academy"}</span></Link>
        </div>
        <div className="navbar2" style={{float:"left",width:"100%",backgroundColor:"white"}}>
          <Link to="/" className='navbarLink'><img style={{marginLeft:'7vw',height:'9vh'}} src={logo}/></Link>
          <Link to="/RouteTwo" className='navbarLink'><span className="textBlack">Exam</span></Link>
          <Link to="/RouteThree" className='navbarLink'><span className="textBlack">Result</span></Link>
          <Link to="/RouteThree" className='navbarLink'><span className="textBlack">{"Location"}</span></Link>
          <Link to="/RouteThree" className='navbarLink' style={{float:"right",marginTop:'1vh',marginRight:'7vw',color:'white',backgroundColor:'rgb(24,179,138)'}}><span className="textBlack" style={{marginLeft:'0px',color:'white'}}>{"Logout"}</span></Link>
        </div>
        <div className="navbar3" style={{float:"left",width:"100%",borderBottom:"5px solid rgb(24,179,138)"}}>
          <div className='navbarLink' style={{width:'69vw'}}>
            <p style={{fontSize:'20px' ,marginTop:'4vh'}}>Test 1</p>
          </div>
          <div className='navbarLink' style={{width:'29vw',height:'auto',borderLeft:'1px solid grey'}}>
            <Link to="/RouteThree" className='navbarLink' style={{marginTop:'1vh',color:'white',display:'inlineBlock'}}>
              <span style={{marginLeft: '1vw',float:'left',color:'black'}}>
                <img style={{height:'3vw',width:'3vw',float:"left"}} src={alarmLogo} />
                <Timer style={{float:"left"}}/>
              </span>
              <span  className="textBlack" style={{float:'left',marginLeft:'0px',color:'white',backgroundColor:'orange'}}>
              {"Finist Test"}
              </span>
            </Link>
          </div>
        </div>
      </div>
    );
}

export default Header;
