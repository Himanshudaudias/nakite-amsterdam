import React from 'react';
import Fullpage, { FullPageSections, FullpageSection } from "@ap.cx/react-fullpage";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import spalcevideo from '../images/splash-video.mp4'
import bannerimg from '../images/bannerimg.png'
import blackimg from '../images/sava-text-testimonial-1.png'

import firstblockimg from '../images/lastslide-two.png'
import thirdblockimg from '../images/lastslidebottom.png'

export function FullPageScroll() {
    return (
        <div>
            <div>
                <Fullpage>
                    <FullPageSections>
                        <FullpageSection>
                            <section className="relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3">
                                <div className="flex flex-col items-center justify-center video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
                                    <video className="min-w-full min-h-full absolute object-cover" src={spalcevideo} type="video/mp4" autoPlay muted loop></video>
                                    <Zoom>
                                        <img src={bannerimg} className='bannerimg' alt="bannerimg" />
                                    </Zoom>
                                    <Fade bottom>
                                        <div className="bottombannertext">
                                            <h2>kk creative concepts+ <span>brand consultancy</span></h2>
                                        </div>
                                    </Fade>
                                </div>
                            </section>
                        </FullpageSection>

                        <FullpageSection>
                            <section className="videosection relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3">
                                <div className="flex w-11/12 mb-0 items-center">
                                    <div className="w-3/5">
                                        <Fade left>
                                            <div className="videobox">
                                                <video className="min-w-full min-h-full object-cover" src={spalcevideo} type="video/mp4" autoPlay muted loop></video>
                                            </div>
                                        </Fade>
                                    </div>
                                    <div className="w-2/5">
                                        <div className="textdescription">
                                            <Fade right>
                                                <p>
                                                    Capturing. Tickling the senses. To provoke and play with powerful emotions. Envy, Lust, Pride… Focussed on perfection. The never-ending chase towards stronger Brand Experience, Brand Attitude, Brand Attachment and Brand Equity. Proven drivers of conversion, loyalty, retention and sales. Brand experts. Design by trade. Creators of immersive customer journeys. Builders of brands.
                                                </p>
                                            </Fade>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </FullpageSection>

                        <FullpageSection>
                            <section className="bg-black relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3">
                                <div className="flex w-full mb-0 items-center">
                                    <div className="w-2/5">
                                        <Fade left>
                                            <div className="textdescription-third">
                                                <p>
                                                    The journey. Where does it start? Where should it convert? Down the rabbit hole. “The customer is always right”, but “people don’t know what they want before they see it.” We design effective and converting customer journeys, that customers love. Online, in-store, digital and offline, we take the essence of the brand, deeply analyze the consumer, and map out a journey that leads to more conversion and sales.
                                                </p>
                                            </div>
                                        </Fade>
                                    </div>
                                    <div className="w-3/5">
                                        <img src={blackimg} className='min-w-full min-h-full object-cover' alt="bannerimg" />
                                    </div>
                                </div>
                            </section>
                        </FullpageSection>

                        <FullpageSection>
                            <section className="fullimgsection relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3">
                                <div className="textdescription-third">
                                    <Fade top>
                                        <p>
                                            The vision and narrative of a brand should be felt and seen throughout any customer journey. We help brands with finger-licking content to emphasize the message. We offer art direction and work with the best people in the creative industry. Designers, photographers, social engineers, coders, filmmakers, you name it.
                                        </p>
                                    </Fade>
                                </div>
                            </section>
                        </FullpageSection>


                        <FullpageSection>
                            <section className="lastfullslide relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3">
                                <div className="textdescription-third flex w-full mb-0 items-center">
                                    <div className="w-2/4 flex items-end">
                                        <Fade top>
                                            <div className='firstimg'>
                                                <img src={firstblockimg} className='object-cover' alt="bannerimg" />
                                            </div>
                                        </Fade>
                                        <Fade left>
                                            <div className="videoboxlast">
                                                <h2>
                                                    What are <span>you about?</span>
                                                </h2>
                                            </div>
                                        </Fade>
                                    </div>
                                    <div className="w-2/4">
                                        <Fade top>
                                            <div className='secondimg'>
                                                <img src={thirdblockimg} className='object-cover' alt="bannerimg" />
                                            </div>
                                        </Fade>
                                        <Fade right>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ornare eu est nec dapibus. Donec luctus nunc sed justo pretium lacinia. Phasellus non luctus dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum eget felis nec magna luctus pharetra. Vestibulum elementum aliquam porttitor.</p>
                                        </Fade>
                                        <Fade bottom>
                                            <div className='thiedimg'>
                                                <img src={thirdblockimg} className='object-cover' alt="bannerimg" />
                                            </div>
                                        </Fade>
                                    </div>
                                </div>
                            </section>
                        </FullpageSection>

                    </FullPageSections>
                </Fullpage>
            </div>
        </div>
    );
};


