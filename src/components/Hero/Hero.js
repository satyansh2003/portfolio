import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br/>
        My Portfolio
      </SectionTitle>
      <SectionText>
      Passionate about crafting innovative digital experiences, I am SATYANSH KUMAR, a Computer Science and Engineering student interested in web development, software engineering, and problem-solving. From building modern web applications to working on interdisciplinary projects, I thrive on creating impactful solutions. Explore my portfolio to discover my journey, projects, and skills that reflect my commitment to technology and continuous learning.
      </SectionText>
      <Button onClick={()=> window.location = 'https://drive.google.com/file/d/1CK3_C3XKTAP3h85eZOyjVMCpnG92tVqn/view?usp=sharing'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
