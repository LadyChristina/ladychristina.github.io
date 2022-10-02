import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.png`} alt="" />
      </Link>
      <header>
        <h2>Christina Ovezik</h2>
        <p><a href="mailto:chris.ovezik@gmail.com">chris.ovezik@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Christina. I like coding, travelling and looking at the world upside down.
        Some people have called me &quot;normal&quot;, others &quot;a state of mind&quot;; I guess
        I&apos;m a bit of both.
        Importantly, I am a Lady.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Christina Ovezik <Link to="/">https://ladychristina.github.io/</Link>.</p>
    </section>
  </section>
);

export default SideBar;
