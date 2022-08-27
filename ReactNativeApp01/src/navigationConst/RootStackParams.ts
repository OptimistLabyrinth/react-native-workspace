import Home from '../Home';
import Page1 from '../Page1';
import Page2 from '../Page2';
import Page3 from '../Page3';

export type RootStackParamsKeyType = 'Home' | 'Page1' | 'Page2' | 'Page3';

export type RootStackParams = {
  Home: typeof Home;
  Page1: typeof Page1;
  Page2: typeof Page2;
  Page3: typeof Page3;
};
