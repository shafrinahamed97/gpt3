import React from 'react';
import Blog from './container/blog/Blog';
import Features from './containers/features/Features';

import Footers from './containers/footers/Footers';

import Headers from './containers/header/Headers';

import Posibility from './containers/posiblity/Posibility';
import WhatGPT3 from './containers/whatGPT3/WhatGPT3';

const index = () => {
    return (
        <div>
            <Blog></Blog>
            <Features></Features>
            <Footers></Footers>
            <Headers></Headers>
            <Posibility></Posibility>
            <WhatGPT3></WhatGPT3>
        </div>
    );
};

export default index;