import { Reveal } from "./Reveal.tsx"

export default function About() {
    return(
        <div className="about">
            <Reveal>
                <h1 id="about">about me.</h1>
            </Reveal>
            <Reveal>
                <p>Frontend Developer with 1 year experience implementing complex web apps, specialazing in SPA development utilizing React library</p>
            </Reveal>
            <Reveal>
                <h1>education.</h1>
            </Reveal>
            <Reveal>
                <ul>
                    <li>2017-2021</li>
                    <p>Lviv National Polytechnic University Bachelor degree, Electrical Engineering</p>
                    <li>2022 May</li>
                    <p>Code with Mosh Ultimate JavaScript Part 1: Fundamentals</p>
                    <li>2023 January</li>
                    <p>Apiko Academy Front-end React JS Web Development Course</p>
                </ul>
            </Reveal>
        </div>
    )
}