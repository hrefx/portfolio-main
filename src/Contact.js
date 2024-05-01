import React from "react";
import AppLogo from './logo.png';

function Contact() {
    return (
      <div id="contact">
        <div className="container">
        <h1 className="work-together">Let's work together</h1>
            <div className="row">
                <form>
                    <input type="text" name="Name" placeholder="Name" required></input>
                    <input type="text" name="Surname" placeholder="Surname" required></input>
                    <input type="email" name="Email" placeholder="E-mail" required></input>
                    <textarea name="Message" rows="6" placeholder="Type your message here..."></textarea>
                    <button type="submit" className="btn-contact">SUBMIT</button>
                </form>
                <img src={AppLogo} className="logo-img"></img>
            </div>
        </div>
      </div>
    );
  }
  
  export default Contact;
  