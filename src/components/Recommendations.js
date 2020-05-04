import React, { Fragment, useState } from 'react';
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
        <h2 className="recommend-title">MY RECOMMENDATIONS</h2>
        &nbsp;
        <h3 className="recommend-para">Hello! I'm glad you found this page! I am an aspiring writer, but I have read many books that have inspired me and kept my imagination flowing. I have chosen to share a few of my favorites with you. I have chosen these books because they have good writing or the charactors and story are really good. My prefernce in books may not be yours, and you may think that some of the books that I am recommending are childish. But, there is a magic in these books that has followed me for years and I hope to be able to put some of that magic in my own writing. I hope you will give one of these books a chance, perhaps you find inspiration  on how to write your own world. As Aaron Sorkin - an American screenwriter,  director, producer, and playwright - has said, "Good writers borrow from other writers. Great writers steal from them outright." I do not recommend copying word for word, but while reading other's work, look for details and their flow of their writing. How can you create something similiar in your own story? How can this enhance your writing?</h3>
      </div>
      &nbsp;
      <hr></hr>
      &nbsp;
      <div className="container">
        <div className="image">
          <img src={dragonrider} alt="Dragon Rider"/>
          <h3>Dragon Rider</h3>
          <h4 className="author">Cornelia Funke</h4>
        </div>
        <div className="image">
          <img src={edileanseries} alt="Edilean Series" />
          <h3>Edilean Series</h3>
          <h4 className="author">Jude Deveraux</h4>
        </div>
        <div className="image">
          <img src={eragonseries} alt="Eragon Series" />
          <h3>Eragon Series</h3>
          <h4 className="author">Christopher Paolini</h4>
        </div>
        <div className="image">
          <img src={erinhunter} alt="The Warriors Series" />
          <h3>The Warriors Series</h3>
          <h4 className="author">Erin Hunter</h4>
        </div>
        <div className="image">
          <img src={illbegoneinthedark} alt="I'll Be Gone in The Dark" />
          <h3>I'll Be Gone in The Dark</h3>
          <h4 className="author">Michelle McNamara</h4>
        </div>
        <div className="image">
          <img src={inkhearttrilogy} alt="Inkheart Trilogy" />
          <h3>Inkheart Trilogy</h3>
          <h4 className="author">Cornelia Funke</h4>
        </div>
        <div className="image">
          <img src={joannefluke} alt="Joanne Fluke's Murder Mysteries" />
          <h3>Joanne Fluke's</h3>
          <h3>Murder Mysteries</h3>
          <h4 className="author">Joanne Fluke</h4>
        </div>
        <div className="image">
          <img src={thesearchforwondla} alt="The Search for Wondla Trilogy" />
          <h3>The Search For Wondla</h3>
          <h3>Trilogy</h3>
          <h4 className="author">Tony DiTerlizzi</h4>
        </div>
        <div className="image">
          <img src={thebookofspiritsandtheives} alt="The Book of Spirits and Thieves" />
          <h3>The Book of Spirits and</h3>
          <h3>Thieves</h3>
          <h4 className="author">Morgan Rhodes</h4>
        </div>
      </div>
    </Fragment>
  )
}

export default Recommendations;
