import './Header.css';

function Header() {

  return (
    <header>
      <div id='logo-option'>
        <div id='logo-stories'>
          <h1 id='logo'>EDYODA</h1>
          <p id='stories'>Stories</p>
        </div>
        <p id='explore-options'>Explore Options <i className="fa-solid fa-angle-down"></i></p>
      </div>

      <div id='slogan-main-website'>
        <p id='slogan'>EdYoda is free learning and knowledge <br></br>sharing platform for techies</p>
        <button id='main-website-btn'>Go To Main Website</button>
      </div>
    </header>
  );
}

export default Header;
