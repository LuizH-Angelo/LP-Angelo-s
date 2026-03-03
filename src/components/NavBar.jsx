import './NavBar.css'
import angelosLogo from '../assets/angelosLogo.WebP'

function NavBar() {
    
    return(
      <>
      {/* NAVBAR */}
        <header className='navBar'>
            <img src={angelosLogo} id='navLogo' alt='Academia Angelos' />
            <nav className='nav-navPills'>
              <ul className='navPills'>
                <li className='navLink' id='navLi'>
                  <a href="#s1">Quem Somos</a>
                </li>
                <li className='navLink' id='navLi'>
                  <a href="">Profissionais</a>
                </li>
                <li className='navLink' id='navLi'>
                  <a href="">Planos</a>
                </li>
                <li className='navLink' id='navLi'> 
                  <a href="">Contato</a>
                  </li>
              </ul>
                <button id='btn-aluno'>Seja Aluno</button>
            </nav>
        </header>
      </>
    )
}

export default NavBar;