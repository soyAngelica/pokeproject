import gsap from 'gsap';
import { useEffect, useState } from 'react';
import { BACKGROUND_TYPES, BackgroundTypeKey } from '../../utils/utils';
import './Background.css';


interface BackgroundType {
    background1: string;
    background2: string;
    filter: string;
}

interface BackgroundProps {
    type: BackgroundTypeKey;
}
  
const Background = ({ type }: BackgroundProps) => {

    const [background, setBackground] = useState<BackgroundType>(BACKGROUND_TYPES['normal']);

    useEffect(() => {        
        if(type) {
            setBackground(BACKGROUND_TYPES[type]);
        }
        gsap.to('.background', {
            duration: 1, 
            ease: 'power2.inOut', 
            background: background.background2,
            backgroundColor: background.background1,
        });
        
    }, [type, background]);

    return <div className='background' style={{ filter: `'${background.filter}'` }}></div>;

}



export default Background;

