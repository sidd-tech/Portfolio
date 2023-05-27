import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        A technology enthusiast who believes in constant innovation.
        </SectionText>
        <Button onClick={() => window.open('https://drive.google.com/file/d/1HCPEmJxd1qlEUxYQcwYWfN46cE53TfWG/view?usp=sharing', '_blank')}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;