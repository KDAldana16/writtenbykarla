import React, { useState, Fragment } from 'react';
import deceptionCover from '../images/deception-cover.jpeg';
import disappearanceCover from '../images/disappearance-cover.jpeg';
import badgersCover from '../images/badgers-disease-cover.jpeg';
import princessCover from '../images/lost-princess-cover.jpeg';
import { connect } from 'react-redux';
import { addBasket } from '../actions/addAction';


const Store = (props) => {
  console.log(props);
  return (
    <Fragment>
      <div className="container">
        <h2 className="store-title">WELCOME TO MY STORE</h2>
        <h3 className="store-para">Thank you for deciding to buy my work! It means very much to me. Please go to my Blog page for helpful tips on writing and my Recommendations page for my personal book recommendations.</h3>
      </div>
      <div className="container">
        <div className="image">
          <img src={deceptionCover} alt="Deception" />
          <h3>Deception</h3>
          <h3>$3.99</h3>
          <a onClick={() => props.addBasket('Deception')} className="addToCart cart1" href="#">Add to Cart</a>
        </div>
        <div className="image">
          <img src={disappearanceCover} alt="Disappearance" />
          <h3>Disappearance</h3>
          <h3>$3.99</h3>
          <a onClick={() => props.addBasket('Disappearance')} className="addToCart cart2" href="#">Add to Cart</a>
        </div>
        <div className="image">
          <img src={badgersCover} alt="Badger's Disease" />
          <h3>Badger's Disease</h3>
          <h3>$3.99</h3>
          <a onClick={() => props.addBasket('BadgersDisease')} className="addToCart cart3" href="#">Add to Cart</a>
        </div>
        <div className="image">
          <img src={princessCover} alt="The Lost Princess" />
          <h3>The Lost Princess</h3>
          <h3>$3.99</h3>
          <a onClick={() => props.addBasket('TheLostPrincess')} className="addToCart cart4" href="#">Add to Cart</a>
        </div>
      </div>
    </Fragment>
  );
}

export default connect(null, { addBasket })(Store);
