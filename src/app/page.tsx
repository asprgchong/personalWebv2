'use client'
import ProjectDeets from '@/app/components/ProjectDeet/index';
import Research from '@/app/components/Pubs/index';
import Timeline from '@/app/components/Timeline/index';
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

const ViewportBlock = handleViewport(Block,);

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
                    <h1 className="text-[1.5rem] font-light text-indigo-800 text-center"><Link href="#projects">builds</Link></h1>
                    <h1 className="text-[1.5rem] font-light text-indigo-800 text-center"><Link href="#pubs">publications</Link></h1>
                    <h1 className="text-[1.5rem] font-light text-indigo-800 text-center"><Link href="#work">work experience</Link></h1>
                    <Link href={'https://www.linkedin.com/in/geralyn-chong'}>
                        <Image 
                            src={Linkedin}
                            alt="Linkedin"
                            className="w-10 mt-2"
                        />
                    </Link>
                </div>
                {/* <Spline
                    scene="https://prod.spline.design/l0b5rBB7IIjETLGL/scene.splinecode" 
                    onLoad={function(){
                        document.getElementById('content')!.style.visibility = "visible";
                        document.getElementById('loading')!.style.visibility = "hidden";
                        document.getElementById('loading')!.style.display = "none";
                    }}
                /> */}
                <Spline scene="https://prod.spline.design/QCICNzp8pAUmkZV4/scene.splinecode"
                    onLoad={function(){
                        document.getElementById('content')!.style.visibility = "visible";
                        document.getElementById('loading')!.style.visibility = "hidden";
                        document.getElementById('loading')!.style.display = "none";
                    }}
                />

                 <div className="mb-20">
                    <p id="pubs"></p>
                    <h1 className='text-[5rem] font-semibold text-[#709DFF] text-center mt-20'>publications</h1>
                    <div className="w-full h-5/6 ease-in mt-24 flex flex-row justify-center flex-wrap">
                        <Research 
                            title='Silencing Empowerment, Allowing Bigotry: Auditing the Moderation of Hate Speech on Twitch'
                            journal='ACL 2025 - SAC Highlight Award'
                            stack={['js']}
                            description='Engineered +100,000 data pipeline within 5 second timeouts via Twitch IRC and Pubsub extraction for conducting our 3 tiered experimental design. Measured baseline performance against foundation models and tested counter-factuals on Twitch black-box model.   Wrote documentation for code-to-release detailing the Twitch chatbot setup and challenges with Twitch 2FA system'
                            github={"https://github.com/asprgchong/HateSpeechModerationTwitch"}
                            platform={""}
                            paper={"https://arxiv.org/abs/2506.07667"}
                        />
                        <Research 
                            title='Intelligent Catchment Analysis Tool V2.0'
                            journal='UChicago Computational Oncology Unit - Work in Progress'
                            stack={['js']}
                            description='Engineered a React-Django full-stack prototype enabling epidemiologists to analyse geospatial datasets with 1000+ observations of gene mutation and cancer incidence data from UChicago Medicine`s catchment area. Implemented interactive spatial temporal mapping with Leaflet.js and Bayesian causal inference methods. Automated data ingestion and preprocessing pipelines for multi-decade public health datasets (1988-2022), supporting scalable spatial analysis workflows via Census API. V1 paper can be found at https://www.nature.com/articles/s41598-024-57604-y'
                            github={""}
                            platform={"https://cancercatchmentareas.com/"}
                            paper={""}
                        />
                    </div>
                </div>

                <div className="bg-indigo-200 h-10">
                </div>

                <div className="mb-20">
                    <p id="work"></p>
                    <h1 className='text-[5rem] font-semibold text-[#5c607b] text-center mt-20'>work experience</h1>
                    <div className="w-full h-5/6 ease-in mt-24 flex flex-row justify-center flex-wrap">
                        <Timeline 
                            title={"Software Engineer Intern"}
                            company={"SkyIT Services: GBCS Group"}
                            description='Designed brand-focused UI and user-flow diagrams with Figma. Developed responsive and interactive frontend designs in React while coordinating the engineering and UX design team. This led to a leadership role of designers and engineers to design and build the company website. Implemented Trello task delegation to improve issue resolution and cross-team communication. Features specifically designed: (1) Animation of Services page designed, (2) Redesigned footer (3) Responsive Design'
                            year={'June 2023 - Sept 2023'}
                            stack={['react', 'figma']}
                            link={""}
                        />

                        <Timeline 
                            title={"Software Engineer Intern"}
                            company={"IDX Exchange"}
                            description=' Built a full-stack Django web app prototype with SQLite for IDX`s 8-week Python and Web Development classes. Integrated user-centered UI and intern compensation program via an iterative process with CEO and team. Led a team of 5 developers to design an 8-week course on Python and Web Development using Canva slides'
                            year={'June 2024 - Aug 2024'}
                            link={""}
                            stack={['django', 'python']}
                        />
                    </div>
                </div>

                <div className="bg-indigo-200 h-10">
                </div>

                <div className="mb-10">
                    <p id="projects"></p>
                    <div className="w-full h-5/6 ease-in mt-24 flex flex-row justify-center flex-wrap">
                        <ViewportBlock onEnterViewport={() => console.log('enter')} onLeaveViewport={() => console.log('leave')} />
                        <div className="w-full h-5/6 ease-in md:mt-48 flex flex-row justify-center flex-wrap items-start mt-[15rem] ml-10 mr-10 max-w-full">
                            {/* <ProjectDeets 
                                title="Audit on Content Moderation Tools utilizing Machine Learning" 
                                category="Machine Learning Research" 
                                stack={['js', 'twitch']}
                                description="Developed a data pipeline and extraction system with Twitch APIs and Webhooks to spearhead the research's audit of Twitch's Machine Learning Content Moderation tools. Leading the investigation of 43 social media platforms and their implementation and policies around using Machine Learning for Content Moderation at a user, creator, and platform level."
                            /> */}
                            {/* <ProjectDeets 
                                title="Django Education Platform" 
                                category="Full Stack Web Development" 
                                stack={['django','sqlite']}
                                description="Designed and implemented a full-stack MVP for a startup's emerging education platform aiming to democratize programming education for High School students. Planned and led the creation of course materials, lesson plans, and problem sets for 'Introduction to Python' and 'Introduction to Web Development in Python'."
                            /> */}
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
                            {/* <ProjectDeets 
                                title="SkyIT Services" 
                                category="Front-End Web Development" 
                                stack={['react']}
                                description="Led team of 10-15 designers and developers to implement designs approved via team meetings with CEO and CTO. Designed and developed responsive interfaces and animations on ReactJS, increasing organic user engagement to 104 per month. Implemented an efficient feedback loop system to 5-7 Trello tickets being approved per sprint cycle."
                            /> */}
                            <ProjectDeets 
                                title="Mandala Arts Festival"
                                category="Front-End Web Development"
                                stack={['react', 'figma']}
                                description="Developed a static webpage for a Chicago-based Arts Festival organized by the non-profit, Manadala Arts. Designed a custom CTA-inspired frontend using React framework featuring local artists, creations, and their story."
                            />

                            <ProjectDeets
                                title="Bright Endeavors"
                                category='Front-End UI Design'
                                stack={['figma']}
                                description='Developed a Figma prototype for a local non-profit to design a customer loyalty program'
                            />

                            {/* <ProjectDeets 
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
                            /> */}
                        </div>
                    </div>
                </div>

                <div className="mb-10">
                    <p id="projects"></p>
                    <h1 className='text-[5rem] font-semibold text-[#5c607b] text-center mt-20'>figma projects</h1>
                    <div className="w-full h-5/6 ease-in mt-24 flex flex-row justify-center flex-wrap">
                        <Timeline 
                            title = {"Mandala Arts Festival"}
                            company={""}
                            description=''
                            year={''}
                            stack={[]}
                            link={"https://embed.figma.com/proto/8Gykev9WZiniBhr83k0u6n/TechTeam-MSAPA-Figma?node-id=131-14&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=131%3A14&show-proto-sidebar=1&embed-host=share"}
                        />
                        <Timeline 
                            title = {"Bright Endeavors"}
                            company={""}
                            description=''
                            year={''}
                            stack={[]}
                            link={"https://embed.figma.com/proto/BxFkFq0qVFQw4RpVeDw5ak/Bright-Endeavors-Project?scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&node-id=4-3610&starting-point-node-id=4%3A3610&show-proto-sidebar=1&embed-host=share"}
                        />
                        <Timeline 
                            title = {"GBCS Website"}
                            company={""}
                            description=''
                            year={''}
                            stack={[]}
                            link={"https://embed.figma.com/proto/56g0tYfTsPyy3iuJ4klCaR/GBCS-Mockups?node-id=1-2&embed-host=share"}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
