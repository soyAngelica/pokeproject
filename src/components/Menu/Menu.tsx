import './Menu.css';

const Menu = () => {
  const types = [
    'water',
    'fire',
    'grass',
    'electric',
    'ice',
    'ground',
    'ghost',
    'dark',
    'normal',
    'fairy',
    'psychic',
    'poison'
  ];

  return (
    <div className="container">
      <div className="menu">
          {types.map((type) => (
            <div className="menu-item" key={type}>
              <a href="#!">
                <img className="toolbarImg" src="https://picsum.photos/80/80/?image=20" alt="" />
              </a>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Menu;
