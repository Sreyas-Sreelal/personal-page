import Image from "next/image";
import AboutMe from "./data/aboutme.json";
import Experiences from "./data/experience.json";
import Skills from "./data/skills.json";
import Education from "./data/education.json";
import Projects from "./data/projects.json";

function Section({ title, content }) {
    return <>
        <h3>
            {title}
        </h3>
        {content}

    </>
}

function getContentExperience() {
    return <>
        {Experiences.experiences.map(experience => {
            return (<>
                <h4><b>{experience.timeperiod}</b> {experience.company},{experience.position}</h4>
                <ul>
                    {
                        experience.details.map(detail => {
                            return (
                                <li>
                                    {detail}
                                </li>
                            )
                        })
                    }

                </ul>
            </>)
        })}</>
}


function getContentSkills() {
    function getSpecificSkill(skilltype) {
        return <>{skilltype.map(skill => <div className="label">{skill}</div>)}<div className="clear-label"></div></>
    }

    return <ul>
        <li>
            <h4>Programming Skills</h4>
            {getSpecificSkill(Skills.programming)}
        </li>
        <li>
            <h4>Operating Systems</h4>
            {getSpecificSkill(Skills.os)}
        </li>
        <li>
            <h4>Databases</h4>
            {getSpecificSkill(Skills.db)}
        </li>
        <li>
            <h4>Tools/Framework</h4>
            {getSpecificSkill(Skills.tools)}
        </li>
        <li>
            <h4>Other</h4>
            {getSpecificSkill(Skills.other)}
        </li>
    </ul>
}

function getContentEducation() {
    return <>
        {
            Education.education.map(education => <>
                <div className="row">
                    <div className="col-3">{education.timeperiod}</div>
                    <div className="col-3"><b>{education.course}</b></div>
                    <div className="col-6">{education.institution}</div>
                </div>
            </>)
        }
    </>
}

function getContentProjects() {
    return <>
        {
            Projects.projects.map(project =>
                <div className="row">
                    <div className="col-4"><b><a href={project.link} >{project.title}</a></b></div>
                    <div className="col-8">{project.description}</div>
                </div>
            )
        }
    </>
}

export default function Index() {
    return (
        <><main>
            <div className="image">
                <Image src={"/me.jpg"} width={140} height={140} />
            </div>
            <h1>
                {AboutMe.name}
            </h1><div className="clear-label"></div>
            <hr />
            <h2>{AboutMe.tagline}</h2>

            {AboutMe.description}

            <div className="container container-lg container-md container-sm container-xl">
                <Section title="Experiences" content={getContentExperience()} />
                <Section title="Technical Skills" content={getContentSkills()} />
                <Section title="Education" content={getContentEducation()} />
                <Section title="Projects" content={getContentProjects()} />
            </div>
        </main>
        </>
    )
}