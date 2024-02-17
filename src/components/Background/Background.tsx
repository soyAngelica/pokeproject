import './Background.css'

interface BackgroundProps {
    type: string;
}
  
const Background = ({ type }: BackgroundProps) => {
    const backgroundClass = `background background-${type}`;
    return <div className={backgroundClass}></div>;
}



export default Background;

