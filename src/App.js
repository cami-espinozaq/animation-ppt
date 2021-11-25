import './App.css';
import './assets/theme.sass';
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
import Girl from './components/Girl';
import CssSlides from './components/CssSlides';
import SpringSlides from './components/SpringSlides';

const theme = {
  fonts: {
    header: 'system-ui',
    text: 'system-ui',
  },
  fontSizes: {
    header: '58px',
    paragraph: '36px',
  },
};

function App() {
  return (
    <Deck theme={theme}>
      <Slide>
        <Heading>A journey trying to animate things</Heading>
        <Appear>
          <Text>It is not simple...</Text>
        </Appear>
        <Appear>
          <Text>I actually tried to add an animation here</Text>
        </Appear>
        <Appear>
          <Text>{'And the presentation library broke :)'}</Text>
        </Appear>
      </Slide>
      <CssSlides theme={theme} />
      <SpringSlides theme={theme} />
    </Deck>
  );
}

export default App;
