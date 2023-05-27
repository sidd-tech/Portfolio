import React from "react";
import Link from 'next/link'
import {DiCssdeck} from 'react-icons/di'
import { Container, Div1, Div2, Div3, NavLink,Span } from './HeaderStyles';
import {AiFillGithub,AiFillLinkedin} from 'react-icons/ai';

const SocialIcons = ({ href, children }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {React.cloneElement(children, { color: "white" })}
    </a>
  );
};
const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
      <a style={{ display: 'flex', alignItems: 'center', color: 'white', marginBottom: '20px'}}>

          <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
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
        <SocialIcons href="https://github.com/sidd-tech">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/siddharth-khan-2881141a3/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
         
      </Div3>
    </Container>
);

export default Header;