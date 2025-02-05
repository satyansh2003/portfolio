import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <><Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: 'white', marginBottom: '20px' }}>
          <DiCssdeck size="3rem" /><Span>SATYANSH KUMAR</Span>
        </a>

      </Link>
    </Div1>
    <Div2>
      <li>
        <a href="/portfolio/#projects">Projects</a>
      </li>

      <li>
        <Link href="#tech">
        <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
        <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/satyansh2003">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/satyansh-kumar/">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/satyansh2003/">
        <AiFillInstagram size="3rem"/>
      </SocialIcons>
    </Div3>
  </Container></>
);

export default Header;
