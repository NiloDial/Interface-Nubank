import React from 'react';
import { StatusBar } from 'react-native'
import '~/config/ReactotronConfig';

import Routes from '~/routes';

const App = () => (
  <>
    <StatusBar barStyle="alight-content" backgroundColor="#8b10ae"/>
    <Routes />
  </>
);

export default App;
