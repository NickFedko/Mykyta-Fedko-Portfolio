import projectStore from '../assets/images/project_store.png';
import { Reveal } from './Reveal.tsx';

export default function Experience() {
    return(
        <div className="experience">
            <Reveal>
                <h1 id="experience">experience.</h1>
            </Reveal>
            <Reveal>
                <p>One year experience
                implementing complex web apps, 
                specialazing in <b>SPA </b> development utilizing
                React library, creating simple games using
                Javascript functions to implement logic.
                Styling complex apps and SAP with <b>BEM </b>
                Methodology using <b>SASS/SCSS</b>.
                At last project of learning course Apiko Academy
                Front-end React JS Web Development,
                I developed SPA using <b>React Router Dom</b> Library
                for making another pages with routing.
                Creating modals for authorization with validation
                using Yup and formik libraries and getting user
                data with <b>JWT Authorization token. </b>
                Used <b>axios </b> library for work with <b>API </b> requests of 
                putting product to favorite getting list
                of product or favorite products, catigories etc. 
                Implemented <b>Redux</b> store to cart and favorite pages 
                with silcer storing user data and <b>Redux Persist </b>
                to save state after refreshing.
                And at last using <b>Toastify </b> library for 
                notification user about his action and it’s status.
                </p>
            </Reveal>
            <Reveal>    
                <h1>projects.</h1>
            </Reveal>
            <div className="experience__projects">
                <Reveal>
                    <div className="experience__projects__block">
                        <img src={projectStore} alt='Project_img'/>
                        <span>
                            <a href='https://nickfedko.github.io/SneakerStore/' target='_blank' rel="noreferrer">
                                View Project
                            </a>
                        </span>
                        <h3>Custom Store using API</h3>
                        <p>
                            On this project i'm implemented many libraries
                            so as Yup and formik for validation,
                            Axios for work with API, Redux to create store for
                            cart, React Router for routing project from one page,
                            used hooks from React to achive all posibilties from API and etc.
                        </p>
                    </div>
                </Reveal>
                <div className="experience__projects__block">
                    <Reveal>
                        <img src={projectStore} alt='Project_img'/>
                        <span>In Progress</span>
                    </Reveal>
                </div>
            </div>
        </div>
    )
}