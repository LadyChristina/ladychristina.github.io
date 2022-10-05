import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Christina Ovezik's (aka Lady Christina's) personal website. Research Engineer at Blockchain Technology Lab,"
    + ' University of Edinburgh.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">Hello World</Link></h2>
          <p>
            Welcome to my little corner of the internet . Please feel free to read more <Link to="/about">about me</Link>,
            or you can check out my {' '}
            <Link to="/stats">stats</Link>, {' '}
            <Link to="/resume">resume</Link>, {' '}
            {/* <Link to="/projects">projects</Link>, {' '} */}
            or <Link to="/contact">contact</Link> me.
          </p>
        </div>
      </header>
      <p><small> The source code for this website was adapted from <a href="https://github.com/mldangelo/personal-site">here</a>.</small></p>
    </article>
  </Main>
);

export default Index;
