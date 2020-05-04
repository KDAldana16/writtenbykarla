import React from 'react';
import welcome from '../images/welcome.jpg'
import deceptionCover from '../images/deception-cover.jpeg';
import disappearanceCover from '../images/disappearance-cover.jpeg';
import badgersCover from '../images/badgers-disease-cover.jpeg';
import princessCover from '../images/lost-princess-cover.jpeg';
import { Link } from 'react-router-dom';



function Home() {
  return (
    <div>
      <welcome>
        <img src={welcome} alt="Welcome" className="img-size"/>
      </welcome>
      <div className="AboutMe">
        <hr></hr>
        <h2 className="text-center">ABOUT ME</h2>
        <div className="container">
          <h3>Karla Aldana</h3>
          <h3 className="store-para">Hello, I am very grateful that you have decided
            to read something that came from my imagination. I have worked on my
            stories to allow you to escape reality and escape to a new place.
            I am a self-published author because I want to be able to give
            other's an example; you can do what you put your mind to. I am here
            to give you a chance to escape reality, but also to learn how to
            make your own reality. I have a blog where I give tips and ideas on
            how to let others bring their imagination and thoughts to life. I
            have read many books and I always find one or two to recommend for
            others. That is why I have a Recommendations page on my website, so
            I can share my favorites with others so they can have the
            same/similiar experience as I did. I haven't written many books,
            but I am planning on writing more as my imagination grows. Please
            feel free to contact me through my Instagram page (@writtenbykarla)
            and join my mailing list for updates and tips and sneak peeks of my
            new works.</h3>
        </div>
      </div>

      <hr></hr>

      <div className="container">
        <h2 className="text-center">MY NEWEST PUBLICATIONS</h2>
      </div>
      <div className="pub-container">
        <div className="image">
          <img src={deceptionCover} alt="Deception"/>
          <h3>Deception</h3>
        </div>
        <div className="image">
          <img src={disappearanceCover} alt="Disappearance"/>
          <h3>Disappearance</h3>
        </div>
        <div className="image">
          <img src={badgersCover} alt="Badger's Disease"/>
          <h3>Badger's Diseaser</h3>
        </div>
        <div className="image">
          <img src={princessCover} alt="The Lost Princess"/>
          <h3>The Lost Princess</h3>
        </div>
      </div>
    </div>

  )
}

export default Home;
