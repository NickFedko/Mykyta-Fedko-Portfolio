import me from '../assets/images/me.jpg';
import CV from '../files/CV.pdf';
import { Reveal } from './Reveal.tsx';

export default function Introduction() {
    return (
        <div className="introduction">
            <Reveal>
                <div className="introduction__info">
                    <h3>Hello, I'm Mykyta,</h3>
                    <h1>Front-end Developer</h1>
                    <h3>from Lviv.</h3>
                    <a href={CV} download='Mykyta_Fedko_CV' target='_blank' rel="noreferrer">
                        <button>Resume</button>
                    </a>
                    <div className='introduction__info__button__bg' />
                </div>
            </Reveal>
            <Reveal>
                <div className="introduction__photo">
                    <img src={me} alt="Mykyta_Fedko"/>
                </div>
            </Reveal>
        </div>
    )
}