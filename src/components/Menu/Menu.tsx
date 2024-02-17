import './Menu.css';
import WaterImg from '../../assets/img/water.svg';
import FireImg from '../../assets/img/fire.svg';
import GrassImg from '../../assets/img/grass.svg';
import ElectricImg from '../../assets/img/electric.svg';
import IceImg from '../../assets/img/ice.svg';
import RockImg from '../../assets/img/rock.svg';
import GhostImg from '../../assets/img/ghost.png';
import DarkImg from '../../assets/img/dark.svg';
import NormalImg from '../../assets/img/normal.png';
import FairyImg from '../../assets/img/fairy.svg';
import PsychicImg from '../../assets/img/psychic.png';
import PoisonImg from '../../assets/img/poison.svg';


const ITEM_TYPES = [
  { name: 'Water', imgSrc: WaterImg },
  { name: 'Fire', imgSrc: FireImg },
  { name: 'Grass', imgSrc: GrassImg },
  { name: 'Electric', imgSrc: ElectricImg },
  { name: 'Ice', imgSrc: IceImg },
  { name: 'Rock', imgSrc: RockImg },
  { name: 'Ghost', imgSrc: GhostImg },
  { name: 'Dark', imgSrc: DarkImg },
  { name: 'Normal', imgSrc: NormalImg },
  { name: 'Fairy', imgSrc: FairyImg },
  { name: 'Psychic', imgSrc: PsychicImg },
  { name: 'Poison', imgSrc: PoisonImg },
];


interface MenuProps {
  onClick: (type: any) => void;
}


const Menu = ({onClick}: MenuProps) => {
  const menuContainer = document.querySelector(".menu");
  const menuItems = menuContainer?.querySelectorAll('.menu-item');


  const defaultItemScale = 1;
  const hoverItemScale = 1.5;
  const neighborItemScale = 1.2;


  const defaultMargin= "0px";
  const expandedMargin= "7px";  


  const updateMenuItems = () => {
    menuItems?.forEach((item: any) => {
      const span = item.querySelector('span');
      span.style.display = 'none';

      let scale = defaultItemScale;
      let margin = defaultMargin;

      if(item.isHovered) {
        scale = hoverItemScale;
        margin: expandedMargin;
        span.style.display = 'block';
      } else if(item.isNeighbor){
        scale = neighborItemScale;
        margin: expandedMargin;
        span.style.display = 'none';
      }

      item.style.transform = `scale(${scale})`;
      item.style.margin = `0 (${margin})`;
    });
  }

  menuItems?.forEach((item) => {
    item.addEventListener("mousemove", () => {
      menuItems.forEach((otherItem: any) => {
        otherItem.isHovered = otherItem === item;
        otherItem.isNeighbor = Math.abs(
          Array.from(menuItems).indexOf(otherItem) -
          Array.from(menuItems).indexOf(item)
        ) === 1;
      });
      updateMenuItems();
    });
  });

  menuContainer?.addEventListener("mouseleave", () => {
    menuItems?.forEach((item: any) => {
      item.isHovered = item.isNeighbor = false;
    });
    updateMenuItems();
  })


  return (
    <div className="container">
      <div className="menu">
        {ITEM_TYPES.map((type) => (
          <div className="menu-item" key={type.name}>
            <button onClick={() => onClick(type.name.toLowerCase())}>
              <img className="img" src={type.imgSrc} alt={type.name} title={type.name} width="40" />
              <span>{type.name}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
