import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faPython, faAws, faDocker } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faToolbox } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFrontend = [
    "Angular",
    "React",
    "TypeScript",
    "Blazor",
    "HTML5",
    "CSS3",
    "SCSS",
    "Responsive Design",
    "Mobile-First Development",
    "Storybook",
];

const labelsBackend = [
    "C# / .NET",
    "Node.js",
    "Python",
    "Pyspark",
    "Go",
    "FastAPI",
    "REST API Development",
    "GraphQL",
    "Event-Driven Applications",
];

const labelsDatabases = [
    "PostgreSQL",
    "MySQL",
    "MariaDB",
    "NoSQL",
    "Neo4j",
    "ArangoDB",
    "Neptune",
    "Elasticsearch",
];

const labelsCloud = [
    "Lambda",
    "CloudWatch",
    "Glue ETL",
    "Step Functions",
    "Amazon Athena",
    "S3",
    "API Gateway",
    "CloudFormation (IaC)",
    "Cognito",
    "Verified Permissions",
];

const labelsTesting = [
    "xUnit",
    "Jest",
    "Jasmine & Karma",
    "Playwright",
];

const labelsDevOps = [
    "Docker",
    "CI/CD",
    "Bitbucket Pipelines",
    "GitHub Actions",
];

const labelsSdlc = [
    "Agile",
    "Scrum",
    "Jira",
];

const labelsDevTools = [
    "Git / GitHub",
    "Bitbucket",
    "Postman",
    "Visual Studio",
    "VS Code",
    "Claude Code",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faAngular} size="3x"/>
                    <h3>Front-End Development</h3>
                    <p>5+ years of experience building accessible, responsive, and reusable UI components with Angular, React, and TypeScript, following mobile-first design principles and component-driven development.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFrontend.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Back-End Development</h3>
                    <p>4+ years of designing and developing RESTful (and more recently GraphQL) API services, within both Monolithic and Micro-service architectures, across C#/.NET, Python, and Golang projects. Deep expertise in building and integrating RESTful backend services for high-traffic production applications.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsBackend.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDatabase} size="3x"/>
                    <h3>Database Design & Governance</h3>
                    <p>Over 4 years of production experience in relational database schema design and administration, plus hands-on work with NoSQL and graph databases for unstructured and experimental traversal data modeling.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsDatabases.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faAws} size="3x"/>
                    <h3>Cloud & Infrastructure (AWS)</h3>
                    <p>I architect cloud-native, serverless solutions on AWS, from Glue ETL pipeline optimization to zero-trust access control layers with Cognito and Verified Permissions.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsCloud.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                {/* <div className="skill">
                    <FontAwesomeIcon icon={faVial} size="3x"/>
                    <h3>Testing & QA</h3>
                    <p>I write automated test suites spanning unit, integration, and end-to-end coverage, and collaborate closely with QA engineers to align testing strategy across complex feature releases.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsTesting.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div> */}

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps</h3>
                    <p>I containerize applications with Docker and build CI/CD pipelines to support reliable, repeatable deployments from development through production.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsDevOps.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                {/* <div className="skill">
                    <FontAwesomeIcon icon={faJira} size="3x"/>
                    <h3>SDLC</h3>
                    <p>I lead sprint planning and Agile/Scrum ceremonies, translating complex product requirements into Jira-tracked technical designs across cross-functional teams.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSdlc.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div> */}

                <div className="skill">
                    <FontAwesomeIcon icon={faToolbox} size="3x"/>
                    <h3>Development Tools</h3>
                    <p>I rely on a modern engineering toolkit — Git/GitHub, Bitbucket, Postman, Visual Studio, and Claude Code — to design, test, and ship high-quality software efficiently.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsDevTools.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;
