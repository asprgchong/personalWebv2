'use client'
import ProjectDeets from '@/app/components/ProjectDeet/index';
import '@/app/styles/animation.css';
import Spline from '@splinetool/react-spline';
import Image from 'next/image';
import Link from "next/link";
import handleViewport, { type InjectedViewportProps } from 'react-in-viewport';
import Github from '../../public/techStack/github-mark.svg';
import Linkedin from '../../public/techStack/icons8-linkedin.svg';

const Block = (props: InjectedViewportProps<HTMLDivElement>) => {
    const { inViewport, forwardedRef, enterCount } = props;
    const returnUrl = inViewport ? true : false;
    if (enterCount == 1) {
        if (inViewport) {
            return (
                <div className="viewport-block w-full absolute" ref={forwardedRef}>
                    <h1 id="leftfade-in" className="text-[5rem] font-semibold text-indigo-800 text-center">my builds</h1>
                </div>
            );
        }
    }
    return (
        <div className="viewport-block w-full absolute" ref={forwardedRef}>
            <h1 id="" className="text-[5rem] font-semibold text-indigo-800 text-center">my builds</h1>
        </div>
    );
};

const ViewportBlock = handleViewport(Block, /** options: {}, config: {} **/);

export default function Home() {
    return (
        <div className="flex min-h-screen">
            <div id='loading' className="w-full content-center items-center fullScreenHeight">
                <h1 className='text-center absolute content-center w-full flex justify-evenly items-center'>LOADING</h1>
            </div>

            <div id='content' className="w-full bg-indigo-200 content-center items-center fullScreenHeight">
                <div className="z-10 absolute content-center w-full flex justify-evenly items-center">
                    <Link href={'https://github.com/asprgchong'}>
                        <Image 
                            src={Github}
                            alt="Github"
                            className="w-10 mt-2"
                        />
                    </Link>
                    <h1 className="text-[4rem] rotate-[180deg] font-extralight text-indigo-800 text-center"><Link href="#projects">^</Link></h1>
                    <Link href={'https://www.linkedin.com/in/geralyn-chong'}>
                        <Image 
                            src={Linkedin}
                            alt="Linkedin"
                            className="w-10 mt-2"
                        />
                    </Link>
                </div>
                <Spline
                    scene="https://prod.spline.design/l0b5rBB7IIjETLGL/scene.splinecode" 
                    onLoad={function(){
                        document.getElementById('content')!.style.visibility = "visible";
                        document.getElementById('loading')!.style.visibility = "hidden";
                        document.getElementById('loading')!.style.display = "none";
                    }}
                />


                <div className="mb-10">
                    <p id="projects"></p>
                    <div className="w-full h-5/6 ease-in mt-44 flex flex-row justify-center flex-wrap">
                        <ViewportBlock onEnterViewport={() => console.log('enter')} onLeaveViewport={() => console.log('leave')} />
                        <div className="w-full h-5/6 ease-in md:mt-48 flex flex-row justify-center flex-wrap items-start mt-[15rem] ml-10 mr-10 max-w-full">
                            <ProjectDeets 
                                title="Audit on Content Moderation Tools utilizing Machine Learning" 
                                category="Machine Learning Research" 
                                stack={['js', 'twitch']}
                                description="Developed a data pipeline and extraction system with Twitch APIs and Webhooks to spearhead the research's audit of Twitch's Machine Learning Content Moderation tools. Leading the investigation of 43 social media platforms and their implementation and policies around using Machine Learning for Content Moderation at a user, creator, and platform level."
                            />
                            <ProjectDeets 
                                title="Django Education Platform" 
                                category="Full Stack Web Development" 
                                stack={['django','sqlite']}
                                description="Designed and implemented a full-stack MVP for a startup's emerging education platform aiming to democratize programming education for High School students. Planned and led the creation of course materials, lesson plans, and problem sets for 'Introduction to Python' and 'Introduction to Web Development in Python'."
                            />
                            <ProjectDeets 
                                title="Piezzo Piano" 
                                category="Engineering Devices Coursework" 
                                stack={['arduino']}
                                description="Engineered a set of piezzo sensors simulating a piano glove with SAMD21 Arduino. Using serial read functionality of the piezzo sensor, the variance of piano notes played was simulated using Garage Band's Piano note player. Using Tinkercad and 3D printers, glove mechanisms for attaching the piezzo sensors while allowing freedom of movement were prototyped."
                            />
                            <ProjectDeets 
                                title="Smart Glasses: Todo Cat" 
                                category="Printed Circuit Boards Coursework" 
                                stack={['arduino', 'kicad']}
                                description="Egnineered a prototype of the circuit via breadboarding and setup with a bootloader on the ATTiny. Included several input and output devices such as a light sensor, OLED screen, buttons to interact with the processor via UART and I2C serial comm protocols. Designed and developed circuits on KiCad's schematic and PCB editor. Soldering SOP IC components and debugging connection issues, a final product integrated into glasses with a 3D printed mechanism allowed for the PCB to highlight the software like functionality of the to-do device."
                            />
                            <ProjectDeets 
                                title="SkyIT Services" 
                                category="Front-End Web Development" 
                                stack={['react']}
                                description="Led team of 10-15 designers and developers to implement designs approved via team meetings with CEO and CTO. Designed and developed responsive interfaces and animations on ReactJS, increasing organic user engagement to 104 per month. Implemented an efficient feedback loop system to 5-7 Trello tickets being approved per sprint cycle."
                            />
                            <ProjectDeets 
                                title="Mandala Arts Festival"
                                category="Front-End Web Development"
                                stack={['react']}
                                description="Developed a static webpage for a Chicago-based Arts Festival organized by the non-profit, Manadala Arts. Designed a custom CTA-inspired frontend using React framework featuring local artists, creations, and their story."
                            />
                            <ProjectDeets 
                                title="TechTeam Artificial Neural Network" 
                                category="Student Involvement Workshops" 
                                stack={['tensorflow', 'python']}
                                description="Implemented Artificial Neural Networks on real world applications such as Bank Customer Churn Rates and Real Estate Valuations. Using NumPy, Pandas, and TensorFlow’s Teras Sequential model to train and test ANN models on real-world simulator data. Organized Q&A panels and workshops from professionals and PhD students exploring research fields and industry skills for about 12 student members to receive technical skills training for our project series."
                            />
                            <ProjectDeets 
                                title="CodePath IOS Development in Swift" 
                                category="App Development" 
                                stack={['swift', 'xcode']}
                                description="Learned Swift framework and UI kits to implement front-end designs on Apple's native IDE, XCode. Implemented cloud-based APIs for coursework projects like weather apps to connect custom UI to our backend design. Developed an MVP of an college club manager for both members and board members to streamline attendance and event coordination"
                            />
                        </div>
                    </div>
                </div>

                {/* <div className="mb-20 bg-[#709DFF]">
                    <p id="aboutMe"></p>
                    <h1 className='text-[5rem] font-semibold text-indigo-200 text-center'>About Me</h1>
                </div> */}
            </div>
        </div>
    );
}
