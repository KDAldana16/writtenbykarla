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
        <h3>Hello! I'm glad you found this page! I am an aspiring writer, but I
        have read many books that have inspired me and kept my imagination
        flowing. I have chosen to share a few of my favorites with you. I have
        chosen these books because they have good writing or the charactors and
        story are really good. My prefernce in books may not be yours, and you
        may think that some of the books that I am recommending are childish.
        But, there is a magic in these books that has followed me for years and
        I hope to be able to put some of that magic in my own writing. Each
        image has a link to where you can buy the book, either from Amazon or
        from the author's official website. I hope you will give one of these
        books a chance, perhaps you find inspiration on how to write your own
        world. As Aaron Sorkin - an American screenwriter, director, producer,
        and playwright - has said, "Good writers borrow from other writers.
        Great writers steal from them outright." I do not recommend copying
        word for word, but while reading other's work, look for details and
        their flow of their writing. How can you create something similiar in
        your own story? How can this enhance your writing?</h3>
      </div>
      <div className="container">
        <div className="image">
          <img src={dragonrider} alt="Dragon Rider" />
          <h3>Dragon Rider</h3>
          <h4>Cornelia Funke</h4>
          <a className="linkToBuy book1" href="https://www.amazon.com/Dragon-Rider-Cornelia-Funke/dp/0545316480">Click to Buy</a>
        </div>
        <div className="image">
          <img src={edileanseries} alt="Edilean Series" />
          <h3>Edilean Series</h3>
          <h4>Jude Deveraux</h4>
          <a className="linkToBuy book2" href="https://judedeveraux.com/books/the-edilean-series/">Click to Buy</a>
        </div>
        <div className="image">
          <img src={eragonseries} alt="Eragon Series" />
          <h3>Eragon Series</h3>
          <h4>Christopher Paolini</h4>
          <a className="linkToBuy book3" href="https://www.amazon.com/Inheritance-Cycle-Christopher-Paolini/dp/037584631X">Click to Buy</a>
        </div>
        <div className="image">
          <img src={erinhunter} alt="The Warriors Series" />
          <h3>The Warriors Series</h3>
          <h4>Erin Hunter</h4>
          <a className="linkToBuy book4" href="https://warriorcats.com/">Click to Buy</a>
        </div>
        <div className="image">
          <img src={illbegoneinthedark} alt="I'll Be Gone in The Dark" />
          <h3>I'll Be Gone in The Dark</h3>
          <h4>Michelle McNamara</h4>
          <a className="linkToBuy book5" href="https://www.amazon.com/Ill-Be-Gone-Dark-Obsessive/dp/0062319787">Click to Buy</a>
        </div>
        <div className="image">
          <img src={inkhearttrilogy} alt="Inkheart Trilogy" />
          <h3>Inkheart Trilogy</h3>
          <h4>Cornelia Funke</h4>
          <a className="linkToBuy book6" href="https://www.amazon.com/Inkheart-Trilogy-Cornelia-Funke/dp/0439709105">Click to Buy</a>
        </div>
        <div className="image">
          <img src={joannefluke} alt="Joanne Fluke's Murder Mysteries" />
          <h3>Joanna Fluke's Murder Mysteries</h3>
          <h4>Joanne Fluke</h4>
          <a className="linkToBuy book7" href="https://joannefluke.com/">Click to Buy</a>
        </div>
        <div className="image">
          <img src={thesearchforwondla} alt="The Search for Wondla Trilogy" />
          <h3>The Search For Wondla Trilogy</h3>
          <h4>Tony DiTerlizzi</h4>
          <a className="linkToBuy book8" href="http://wondla.com/home/">Click to Buy</a>
        </div>
        <div className="image">
          <img src={thebookofspiritsandtheives} alt="The Book of Spirits and Thieves" />
          <h3>The Book of Spirits and Thieves</h3>
          <h4>Morgan Rhodes</h4>
          <a className="linkToBuy book9" href="https://www.amazon.com/Book-Spirits-Thieves-Morgan-Rhodes/dp/1595147608">Click to Buy</a>
        </div>
      </div>
    </Fragment>
  )
}

export default Recommendations;
