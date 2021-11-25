import React from 'react';
import '../assets/theme.sass';

import {
  Deck,
  Slide,
  Heading,
  Appear,
  Text,
  UnorderedList,
  ListItem,
  CodeSpan,
  Grid,
  FlexBox,
  CodePane,
  Box,
} from 'spectacle';

const SpringSlides = ({ theme }) => {
  return (
    <React.Fragment>
      <Slide>
        <Heading fontSize={theme.fontSizes.header}>
          {'Okay, so what now?'}
        </Heading>
        <UnorderedList fontSize={theme.fontSizes.paragraph}>
          <Appear>
            <ListItem>
              It's cool to animate images... but they don't morph
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              How do I animate things with more options and freedom?
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>JavaScript, I thought.</ListItem>
          </Appear>
          <Appear>
            <ListItem>Started looking for a library</ListItem>
          </Appear>
          <Appear></Appear>
        </UnorderedList>
      </Slide>
      <Slide></Slide>
    </React.Fragment>
  );
};

export default SpringSlides;
