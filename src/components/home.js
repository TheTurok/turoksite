import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div className = "col-sm-12 col-md-8 col-md-offset-2 content">
        <div>
          I graduated from the University of California, San Diego in 2017 with a B.S. in Computer Science.
          Currently, my focus in software engineering is in web development because I am able to showcase my ability to create content that works smoothly and efficiently for up-and-coming entrepreneurs while simultaneously helping them grow their businesses.
          I build websites primarily using React because it is simple, yet it provides a degree of freedom that allows me to express my creative ability while meeting each client's demands.

          <br/><br/>

          My passion is to express my creativity through any means because people are able to experience, enjoy, and hopefully be inspired by whatever I create.
          Visual art allows me to express myself through a physical art medium, dancing allows me to express myself through my body in every beat, and music lets my creativity flow through people's ears.
          Computer science is another passion of mine because I am similarly able to create things that people are able to enjoy and experience.
          With web development specifically, I can transform a client's vision, incorporate my creativity, and express ideas in clear and meaningful ways.

          <br/><br/>

          <div id = "hobby" >
          <h5>Hobbies</h5>
          Competititve Gaming: Super Smash Bros. Melee <br/>
          Karaoke, Visual Art, Dancing, Poker
          </div>

          <br/>

          <div className = "res">Github Contributions</div>
          <img src="http://ghchart.rshah.org/409ba5/theturok" alt="2016rshah's Github chart" />

        </div>
      </div>
    );
  }
}
