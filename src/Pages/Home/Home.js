import { Button } from '@mui/material';
import React from 'react';
import About from '../About/About';
import Media from '../Media/Media';
import Footer from '../Shered/Footer/Footer';
import Section1 from './HomeSection/Section1';
import Section2 from './HomeSection/Section2';
import Section3 from './HomeSection/Section3';

const Home = () => {
    return (
        <div>
            <div class="lg:grid grid-rows-3 grid-flow-col gap-4">
                <div class="row-span-3 ..."><Section1></Section1>

                    <div className='flex justify-center w-96 shadow-lg mt-6 ml-2 rounded-xl'>
                        <div className=" stat px-[-100px] rounded-xl bg-white " >

                            <div className="stat">
                                <div className="stat-figure text-secondary">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                </div>
                                <div className="stat-title">Downloads</div>
                                <div className="stat-value">31K</div>
                                <div className="stat-desc">Jan 1st - Feb 1st</div>
                            </div>
                            <div className="divider my-[-3px]"></div>
                            <div className="stat">
                                <div className="stat-figure text-secondary">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                                </div>
                                <div className="stat-title">New Users</div>
                                <div className="stat-value">4,200</div>
                                <div className="stat-desc">↗︎ 400 (22%)</div>
                            </div>
                            <div className="divider"></div>
                            <div className="stat">
                                <div className="stat-figure text-secondary">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                                </div>
                                <div className="stat-title">New Registers</div>
                                <div className="stat-value">1,200</div>
                                <div className="stat-desc">↘︎ 90 (14%)</div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="row-span-2  col-span-2 ..."> <Section2></Section2></div>
                <div class="row-span-2 col-span-2 ...">
                    <Section3></Section3>

                </div>
            </div>


            <Footer></Footer>
        </div>
    );
};

export default Home;