import Home from '../src/Home';
import Page1 from '../src/Page1';
import Page2 from '../src/Page2';
import Page3 from '../src/Page3';

export type RootStackParamsKeyType = 'Home' | 'Page1' | 'Page2' | 'Page3';

export type RootStackParams = {
  Home: typeof Home;
  Page1: typeof Page1;
  Page2: typeof Page2;
  Page3: typeof Page3;
};
