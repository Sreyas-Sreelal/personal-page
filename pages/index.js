import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AboutMe from "./data/aboutme.json";
import Experiences from "./data/experience.json";
import Skills from "./data/skills.json";
import Education from "./data/education.json";
import Projects from "./data/projects.json";

function Section({ title, content }) {
    return <>
        <h2>
            {title}
        </h2>
        {content}
    </>
}

function getContentExperience() {
    return <>
        {Experiences.experiences.map(experience => {
            return (<>
                <table>
                    <tbody>
                        <tr>
                            <th>{experience.timeperiod}</th>
                            <td>{experience.company},</td>
                            <td>{experience.position}</td>
                        </tr>
                    </tbody>
                </table>
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
        return <>{skilltype.map(skill => <div className="label">{skill}</div>)}<br/></>
    }

    return <>
        <h3>Programming Skills</h3>
        {getSpecificSkill(Skills.programming)}
        <h3>Operating Systems</h3>
        {getSpecificSkill(Skills.os)}
        <h3>Databases</h3>
        {getSpecificSkill(Skills.db)}
        <h3>Tools/Framework</h3>
        {getSpecificSkill(Skills.tools)}
        <h3>Other</h3>
        {getSpecificSkill(Skills.other)}
    </>
}

function getContentEducation() {
    return <>
        {
            Education.education.map(education => <>
                <table>
                    <tbody>
                        <tr>
                            <td>{education.timeperiod}</td>
                            <th>{education.course},</th>
                            <td>{education.institution}</td>
                        </tr>
                    </tbody>
                </table>
            </>)
        }
    </>
}

function getContentProjects() {
    return <>
        <table>
            <tbody>
                {

                    Projects.projects.map(project => <>
                        <tr>
                            <th><a href={project.link} >{project.title}</a></th>
                            <td>{project.description}</td>
                        </tr>
                    </>
                    )

                }
            </tbody>
        </table>
    </>
}

export default function Index() {
    return (
        <>
            <h1>
                {AboutMe.name}
            </h1>
            <main>
                {AboutMe.description}
            </main>
            <Section title={"Experiences"} content={getContentExperience()} />
            <Section title="Techinical Skills" content={getContentSkills()} />
            <Section title="Education" content={getContentEducation()} />
            <Section title="Projects" content={getContentProjects()} />
        </>
    )
}