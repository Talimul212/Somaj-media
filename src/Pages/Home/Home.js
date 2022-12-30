import { Button } from '@mui/material';
import React from 'react';
import Footer from '../Shered/Footer/Footer';
import Section1 from './HomeSection/Section1';
import Section2 from './HomeSection/Section2';
import Section3 from './HomeSection/Section3';

const Home = () => {
    return (
        <div>
            <div class="lg:grid grid-rows-3 grid-flow-col gap-4">
                <div class="row-span-3 ..."><Section1></Section1></div>
                <div class="row-span-2  col-span-2 ..."> <Section2></Section2></div>
                <div class="row-span-2 col-span-2 ..."><Section3></Section3></div>
            </div>
            
            <Footer></Footer>
        </div>
    );
};

export default Home;