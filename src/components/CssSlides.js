import '../assets/theme.sass';
import React from 'react';

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

const CssSlides = props => {
  const { theme } = props;

  return (
    <React.Fragment>
      <Slide>
        <Heading fontSize={theme.fontSizes.header}>
          {'First things first: CSS & Animation Basics'}
        </Heading>
        <UnorderedList fontSize={theme.fontSizes.paragraph}>
          <ListItem>
            Keyframes: A list describing which, how and when properties should
            change, during the animation
          </ListItem>
        </UnorderedList>
        <CodePane>
          {` 
          .ball {
            animation-name: ballmove;
            animation-duration: 2s;
            animation-iteration-count: infinite;
            animation-timing-function: ease-in-out;
            animation-delay: 2s;
            animation-fill-mode: forwards;
            animation-direction: alternate;
            animation-play-state: paused;
          }`}
        </CodePane>
      </Slide>
      <Slide>
        <CodePane>
          {`
      @keyframes ballmove {
        0% { transform: translateX(0) rotate(0);}
        10% { transform: translateX(-10px) rotate(-0.5turn); }
        100% { transform: translateX(450px) rotate(2turn); }
      }`}
        </CodePane>
        <Box marginTop="2rem">
          <img
            className="ball animated-ball"
            src="https://i.ya-webdesign.com/images/color-svg-wheel-15.png"
            alt="ball"
          />
        </Box>
        <Appear>
          <Box marginTop="4rem">
            <Text>Not bad, but we can do cooler stuff too...</Text>
          </Box>
        </Appear>
      </Slide>
      <Slide>
        <iframe
          style={{ width: '100%', height: '100%' }}
          scrolling="no"
          title="Untitled"
          src="https://codepen.io/camila-e/embed/yLLYgMp?default-tab=result&editable=true"
          frameBorder="no"
          loading="lazy"
          allowFullScreen={true}
        >
          See the Pen{' '}
          <a href="https://codepen.io/camila-e/pen/yLLYgMp">Untitled</a> by
          Camila Espinoza Quiroz (
          <a href="https://codepen.io/camila-e">@camila-e</a>) on{' '}
          <a href="https://codepen.io">CodePen</a>.
        </iframe>
      </Slide>
    </React.Fragment>
  );
};

export default CssSlides;
