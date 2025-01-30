import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  {text: 'I like studying about cars'},
  {text: 'Reading books', },
  {text: 'Watching web-series', },
  {text: 'Playing video games', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Hobbies</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;