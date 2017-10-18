'use strict';

import React from 'react';

export default function Footer() {
    return (
        <footer className="footer-basic-centered">

          <p className="footer-company-motto">Every Student Can Learn.</p>

          <p className="footer-links">
            <a href="/">Dashboard</a>
            ·
            <a href="/campuses">Campuses</a>
            ·
            <a href="/Students">Students</a>
          </p>

          <p className="footer-company-name">Veekas Shrivastava, Fullstack Academy of Code &copy; 2017</p>

        </footer>
    );
}
