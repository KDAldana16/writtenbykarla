import React, { useState } from 'react';
import deceptionCover from '../images/deception-cover.png';
import disappearanceCover from '../images/disappearance-cover.png';
import badgersCover from '../images/badgers-disease-cover.png';
import princessCover from '../images/lost-princess-cover.png';
import { connect } from 'react-redux';
import { addBasket } from '../actions/addAction';



const Home = (props) => {
  console.log(props);
  return (
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
  );
}

export default connect(null, { addBasket })(Home);
