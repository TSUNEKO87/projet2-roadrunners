import React from 'react'
import './Header.css'
class Header extends React.Component{
    render(){
        return(
          <div className="Header">
              <header className='header-box'>
                  <div>
                  <h1 className="slogan-header">Plan your road-trip easily with us</h1>
                  </div>
                   <div className="text-header">
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>Phasellus condimentum, tortor id venenatis imperdiet, dolor mi dignissim lacus, <br/>nec bibendum metus nunc sed orci. Maecenas nec scelerisque ligula. Vestibulum, <br/>ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam et nisl libero.<br/> Aliquam laoreet purus vitae luctus ornare. Sed nec hendrerit ipsum. Nam efficitur mauris quis purus varius</p>
                   </div>
              </header>
              <div className="plan-trip">
                  <p>START YOUR JOURNEY NOW</p>
                 <div className='request-form'>
                      <h3>request form</h3>
                 </div>
              </div>
          </div>
        )
    }
}


export default Header;