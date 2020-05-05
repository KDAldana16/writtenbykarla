
import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer>
        <hr></hr>
        <label>
          Join my Mailing List!
        </label>
        <form>
          <input type="text" name="name" placeholder="First Name" />
          <input type="text" name="name" placeholder="Last Name" />
        </form>
        <form>
          <input type="text" name="email" placeholder="Email Address"/>
          <input type="submit" value="Submit" />
        </form>
        <div className="container">
          <div className="columns">
            <div className="column">
              <p>The official website by Karla Aldana Website Copyright ©2020.
              All Rights Reserved. WrittenbyKarla is a registered trademark
              in the US and is subject to trade mark in other territories. </p>
            </div>
            <div className="column">
              <h5>Social Media</h5>
               <ion-icon name="logo-instagram"></ion-icon>
                @writtenbykarla
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
