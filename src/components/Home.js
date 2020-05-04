import React from 'react';
import welcome from '../images/welcome.jpg'
import deception from '../images/deception-cover.png'

function Home() {
  return (
    <div>
      <welcome>
        <img src={welcome} alt="Welcome" className="img-size"/>
      </welcome>
      <div className="AboutMe">
        <h1 className="text-center"> ABOUT ME </h1>
        <h4>Karla Aldana</h4>
        <p> Hello, I am very grateful that you have decided
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
          new works.</p>
      </div>

      <div>
        <h4>Newest Works</h4>
        <img src={deception} alt="Deception"/>
        <p>The leaders of the two largest gangs have been murdered and there is only one witness. The FBI, a sniper, and the children of the late leaders are after the witness. What will she do? What did she witness?</p>
      </div>
    </div>
  )
}

export default Home;
