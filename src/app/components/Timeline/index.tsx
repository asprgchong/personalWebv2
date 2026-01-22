import '@/app/components/Timeline/pd.css';
import Image from 'next/image';
import Arduino from '../../../../public/techStack/arduino.svg';
import Django from '../../../../public/techStack/django.svg';
import figma from '../../../../public/techStack/figma.svg';
import Javascript from '../../../../public/techStack/javascript.svg';
import kicad from '../../../../public/techStack/kicad.svg';
import Python from '../../../../public/techStack/python.svg';
import React from '../../../../public/techStack/react.svg';
import SQLite from '../../../../public/techStack/sqlite-icon.svg';
import swiftUI from '../../../../public/techStack/swiftui.svg';
import Tensorflow from '../../../../public/techStack/tensorflow.svg';
import Twitch from '../../../../public/techStack/twitch.svg';
import xcode from '../../../../public/techStack/xcode.svg';

type SimpleComponentProps = {title: string, company: string, stack:string[], description: string, year: string, link: string}
const SimpleComponent = ({title, company, description, year, link, stack}: SimpleComponentProps) => {
    return(
        <>
            <div className="card_pub relative h-50 ml-5 mr-5 w-4/6 mb-5 justify-items-start p-4">
                {/* {link != "" ? <iframe width="100%" height="700px" src={link} className='frame' /> : <></>} */}
                {link != "" ? <iframe width="100%" height="700px" src={link} allowFullScreen></iframe> : <></>}
                <div className='mb-5 w-full mt-10'>
                    <div className="flex justify-between">
                        <p className='font-bold text-xl'>{company}</p>
                        <p className='font-semibold text-lg'>{year}</p>
                    </div>
                    <p className='font-semibold text-xl'>{title}</p>
                </div>
                <p className='font-normal text-xl'>{description}</p>

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
                                case 'figma': 
                                    return (
                                        <div className="w-8 mt-5" key={12}>
                                            <Image
                                                src={figma} 
                                                alt="figma"
                                            />
                                        </div>
                                    )
                                default:
                                    return  (
                                        <div className="w-12 h-8 mt-5" key={13}>
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
            </div>
        </>
    )
}

export default SimpleComponent;