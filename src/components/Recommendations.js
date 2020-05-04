import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import dragonrider from '../images/dragonrider.jpeg';
import edileanseries from '../images/edileanseries.jpeg';
import eragonseries from '../images/eragonseries.jpeg';
import erinhunter from '../images/erinhunter.jpeg';
import illbegoneinthedark from '../images/illbegoneinthedark.jpeg';
import inkhearttrilogy from '../images/inkhearttrilogy.jpeg';
import joannefluke from '../images/joannefluke.jpeg';
import thesearchforwondla from '../images/thesearchforwondla.jpeg';
import thebookofspiritsandtheives from '../images/thebookofspiritsandtheives.jpeg';

const Recommendations = (props) => {
  console.log(props);
  return (
    <Fragment>
      <div className="intro">
        <h5>Here, I will talk about how I want to share some of my favorite
        books (from my childhood up to adulthood) and how I linked each one so
        my visitor can go buy it. </h5>
      </div>
      <div className="container">
        <div className="image">
          <img src={dragonrider} alt="Dragon Rider" />
          <h3>Dragon Rider</h3>
          <h4>Cornelia Funke</h4>
          <a className="linkToBuy" href="#">Click to Buy</a>
        </div>
        <div className="image">
          <img src={edileanseries} alt="Edilean Series" />
          <h3>Edilean Series</h3>
          <h4>Jude Deveraux</h4>
          <a className="linkToBuy" href="#">Click to Buy</a>
        </div>
        <div className="image">
          <img src={eragonseries} alt="Eragon Series" />
          <h3>Eragon Series</h3>
          <h4>Christopher Paolini</h4>
          <a className="linkToBuy" href="#">Click to Buy</a>
        </div>
        <div className="image">
          <img src={erinhunter} alt="The Warriors Series" />
          <h3>The Warriors Series</h3>
          <h4>Erin Hunter</h4>
          <a className="linkToBuy" href="#">Click to Buy</a>
        </div>
        <div className="image">
          <img src={illbegoneinthedark} alt="I'll Be Gone in The Dark" />
          <h3>I'll Be Gone in The Dark</h3>
          <h4>Michelle McNamara</h4>
          <a className="linkToBuy" href="#">Click to Buy</a>
        </div>
        <div className="image">
          <img src={inkhearttrilogy} alt="Inkheart Trilogy" />
          <h3>Inkheart Trilogy</h3>
          <h4>Cornelia Funke</h4>
          <a className="linkToBuy" href="#">Click to Buy</a>
        </div>
        <div className="image">
          <img src={joannefluke} alt="Joanne Fluke's Murder Mysteries" />
          <h3>Joanna Fluke's Murder Mysteries</h3>
          <h4>Joanne Fluke</h4>
          <a className="linkToBuy" href="#">Click to Buy</a>
        </div>
        <div className="image">
          <img src={thesearchforwondla} alt="The Search for Wondla Trilogy" />
          <h3>The Search For Wondla Trilogy</h3>
          <h4>Tony DiTerlizzi</h4>
          <a className="linkToBuy" href="#">Click to Buy</a>
        </div>
        <div className="image">
          <img src={thebookofspiritsandtheives} alt="The Book of Spirits and Thieves" />
          <h3>The Book of Spirits and Thieves</h3>
          <h4>Morgan Rhodes</h4>
          <a className="linkToBuy" href="#">Click to Buy</a>
        </div>
      </div>
    </Fragment>
  )
}

export default Recommendations;
