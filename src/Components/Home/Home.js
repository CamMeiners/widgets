import React from 'react';
import './Home.css';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

function Home() {
  return (
    <body>
      <div>
        <BurgerMenu />
      </div>
      <div className="home">
        <h1>hello</h1>
        <p className="intro">
          my name is Cameron Meiners, welcome to my creative work space
        </p>
        <p>
          this is a place to showcase my own bits and peices of code that aren't
          big enough to have their own website. <br />- <br />
          feel free to have a look around, go ahead and click on the hamburger
          menu in the top left to get started. <br /> - <br />
          and remember to check out my portfolio at{' '}
          <a
            href="https://cammeiners.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            cammeiners.com
          </a>
          .
        </p>
      </div>
    </body>
  );
}
export default Home;
