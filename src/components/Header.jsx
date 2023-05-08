import github from '../assets/images/icons/github.svg';
import linkedin from '../assets/images/icons/linkedin.svg';
import telegram from '../assets/images/icons/telegram.svg';

export default function Header() {
    return (
        <header className="App__header">
            <nav className='header__nav'>
                <label className='header__nav__logo'>mykyta fedko</label>
                <div className='header__nav__links'>
                    <a href="#about">About</a>
                    <a href="#experience">Experience</a>
                </div>
                <div className='header__nav__icons'>
                    <a href="https://github.com/NickFedko" target="_blank" rel="noreferrer">
                        <img alt='github' src={github}/>
                    </a>
                    <a href="https://linkedin.com/in/mykyta-fedko-042047259/" target="_blank" rel="noreferrer">
                        <img alt='linkedin' src={linkedin}/>
                    </a>
                    <a href="https://t.me/vsimudituporoshenka" target="_blank" rel="noreferrer">
                        <img alt='telegram'src={telegram}/>
                    </a>
                </div>
            </nav>
        </header>
    )
}