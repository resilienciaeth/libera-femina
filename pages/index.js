import React from 'react';
import Header from '../components/Header';
import Whatis from '../components/Whatis';

import Utilities from '../components/Utilities';
import Join from '../components/Join';
import Cards from '../components/Cards';
import Creators from '../components/Creators';
import Mision from '../components/Mision';
import Roadmap from '../components/Roadmap';

const index = () => (
  <div>
    <Header />
    <Whatis />
    <Mision />
    <Utilities />
    <Join />
    <Roadmap />
    <Cards />
    <Creators />
  </div>
);

export default index;
