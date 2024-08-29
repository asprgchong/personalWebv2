import '@/app/components/ProjectDeet/pd.css';
import Image from 'next/image';
import django1 from '../../../../public/projectImg/django1.png';
import glasses1 from '../../../../public/projectImg/glasses.png';
import mandala1 from '../../../../public/projectImg/Mandala1.png';
import piezzo1 from '../../../../public/projectImg/piezzo1.jpg';
import skyIt1 from '../../../../public/projectImg/skyIt1.png';
import Arduino from '../../../../public/techStack/arduino.svg';
import Django from '../../../../public/techStack/django.svg';
import Javascript from '../../../../public/techStack/javascript.svg';
import kicad from '../../../../public/techStack/kicad.svg';
import Python from '../../../../public/techStack/python.svg';
import React from '../../../../public/techStack/react.svg';
import SQLite from '../../../../public/techStack/sqlite-icon.svg';
import swiftUI from '../../../../public/techStack/swiftui.svg';
import Tensorflow from '../../../../public/techStack/tensorflow.svg';
import Twitch from '../../../../public/techStack/twitch.svg';
import xcode from '../../../../public/techStack/xcode.svg';

type SimpleComponentProps = {title: string, category: string, stack: string[], description: string}
const SimpleComponent = ({title, category, stack, description}: SimpleComponentProps) => {
    return(
        <div className="card relative h-50 ml-5 mr-5 w-80 mb-5 justify-items-start p-4">
            <div id="showing">
                <div className="comingSoon h-60 mt-5 mb-5 object-cover">
                    {
                        title == 'Django Education Platform' ? 
                            <Image 
                                src={django1}
                                alt="UI"
                                className='object-cover w-80 h-60'
                            /> 
                        : 
                            title == 'SkyIT Services' ? 
                                <Image 
                                    src={skyIt1}
                                    alt="SkyIT services page"
                                    className='object-cover w-80 h-60'
                                />
                            :
                                title == 'Mandala Arts Festival' ? 
                                    <Image 
                                        src={mandala1}
                                        alt="MandalaUI"
                                        className='object-cover w-80 h-60'
                                    />
                                :
                                    title == 'Piezzo Piano' ? 
                                        <Image 
                                            src={piezzo1}
                                            alt="piezzo device"
                                            className='object-cover w-80 h-60'
                                        />
                                    :
                                        title == 'Smart Glasses: Todo Cat' ? 
                                            <Image 
                                                src={glasses1}
                                                alt="Glasses"
                                                className='object-cover w-80 h-60'
                                            />
                                        :
                                            <p className="text-center align-middle items-center h-full content-center text-[#fbfbfb] font-black text-lg">
                                                Demo Coming Soon
                                            </p>
                    }
                </div>
                <p id="title" className="text-xl font-normal">{title}</p>
                <p className="text-sm font-light mt-3">{category}</p>
                <div className="flex justify-items-start gap-5 mb-3">
                    {
                        title == 'Audit on Content Moderation Tools utilizing Machine Learning' || title == 'Django Education Platform' ? <p className="text-sm font-light mt-1 mb-1">In Progress</p> : 
                        <>
                            {/* <p className="text-sm font-light mt-1 mb-1">Demo</p> */}
                            {/* <p className="text-sm font-light mt-1 mb-1">Demo</p> */}
                        </>
                    }
                </div>
            </div>
            <div id="showMore">
                <div className="bg-neutral-700 h-[0.2px] mt-5"></div>
                <div className="flex justify-items-start gap-5 mb-5 items-center">
                    {
                        stack.map(each => {
                            switch (each) {
                                case 'js':
                                return  (
                                    <div className="w-9 h-8 mt-5" key={1}>
                                        <Image
                                            src={Javascript} 
                                            alt="Javascript"
                                        />
                                    </div> 
                                ) 
                                case 'twitch':
                                    return  (
                                        <div className="w-9 h-8 mt-5" key={2}>
                                            <Image
                                                src={Twitch} 
                                                alt="Twitch"
                                            />
                                        </div> 
                                    ) 
                                case 'django':
                                    return  (
                                        <div className="w-12 mt-5" key={3}>
                                            <Image
                                                src={Django} 
                                                alt="django"
                                            />
                                        </div> 
                                    ) 
                                case 'sqlite':
                                    return  (
                                        <div className="w-8 h-8 mt-5" key={4}>
                                            <Image
                                                src={SQLite} 
                                                alt="react"
                                            />
                                        </div> 
                                    ) 
                                case 'react':
                                    return  (
                                        <div className="w-10 h-8 mt-5" key={5}>
                                            <Image
                                                src={React} 
                                                alt="react"
                                            />
                                        </div> 
                                    ) 
                                case 'tensorflow':
                                    return  (
                                        <div className="w-10 h-8 mt-5" key={6}>
                                            <Image
                                                src={Tensorflow} 
                                                alt="tensorflow"
                                            />
                                        </div> 
                                    ) 
                                case 'python':
                                    return  (
                                        <div className="w-10 h-8 mt-5" key={7}>
                                            <Image
                                                src={Python} 
                                                alt="python"
                                            />
                                        </div> 
                                    )
                                case 'swift':
                                    return  (
                                        <div className="w-10 h-8 mt-5" key={8}>
                                            <Image
                                                src={swiftUI} 
                                                alt="swiftUI"
                                            />
                                        </div> 
                                    ) 
                                case 'xcode':
                                    return  (
                                        <div className="w-10 h-8 mt-5" key={9}>
                                            <Image
                                                src={xcode} 
                                                alt="xcode"
                                            />
                                        </div> 
                                    )
                                case 'arduino':
                                    return  (
                                        <div className="w-10 h-8 mt-5" key={10}>
                                            <Image
                                                src={Arduino} 
                                                alt="arduino"
                                            />
                                        </div> 
                                    ) 
                                case 'kicad':
                                    return  (
                                        <div className="w-10 h-8 mt-5" key={11}>
                                            <Image
                                                src={kicad} 
                                                alt="kicad"
                                            />
                                        </div> 
                                    ) 
                                default:
                                    return  (
                                        <div className="w-12 h-8 mt-5" key={12}>
                                            {/* <Image
                                                src={Django} 
                                                alt="django"
                                            /> */}
                                        </div> 
                                ) 
                            }
                        })
                    }
                </div>

                <p>{description}</p>
            </div>
        </div>
    )
}

export default SimpleComponent;