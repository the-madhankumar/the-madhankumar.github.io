import { ExternalLink, Github } from 'lucide-react';
import { useState } from 'react';

export const Divider = () => {
    return <div className="divider"></div>
}

export const SkillsResolve = (props) => {
    const { name, skills } = props

    return (
        <div className="skill-category">
            <div className="skill-title">{name}</div>

            <div className="skill-list">
                {skills.map((skill, index) => (
                    <span key={index} className="skill-item">
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    )
}

export const ProjectsResolve = ({ projects }) => {
    return (
        <div>
            {projects?.map((project, index) => (
                <div key={index} className="project-card">
                    <div className='project-external my-links'>
                        <h2>{project.title}</h2>

                        {project.link &&
                            <a href={project.link}
                                target="_blank"
                                rel="noreferrer"
                            ><ExternalLink />
                            </a>
                        }
                        {project.github &&
                            <a href={project.github}
                                target="_blank"
                                rel="noreferrer"
                            ><Github />
                            </a>
                        }

                    </div>

                    <p>{project.subtitle}</p>

                    <div>
                        {project.techStack?.map((tech, i) => (
                            <span key={i}>{tech} </span>
                        ))}
                    </div>

                    <ul>
                        {project.description?.map((point, i) => (
                            <li key={i}>{point}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export const WorkResolve = ({ work }) => {
    return (
        <div>
            {work?.map((item, index) => (
                <div key={index} className="project-card">
                    <h2>{item.company}</h2>
                    <p className='work-sub-section'>
                        <strong>{item.role}</strong> {item.duration}
                    </p>
                    <p>{item.location}</p>

                    <ul>
                        {item.description?.map((point, i) => (
                            <li key={i}>{point}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export const CertificatesResolve = ({ certificates }) => {
    return (
        <div className="certificates-container">
            {certificates?.map((cert, index) => (
                <div key={index} className="certificate-item">
                    <span className="certificate-name">{cert.name}</span>
                    <span className="certificate-org"> — {cert.organization}</span>
                </div>
            ))}
        </div>
    )
}

export const EducationResolve = ({ education, img }) => {
    return (
        <div className="education-container">
            <img src={img} alt="college-logo" className="edu-image" />

            {education?.map((item, index) => (
                <div key={index} className="education-item">
                    <div className="edu-left">
                        <span>{item.institute}</span>
                        <span>{item.degree}</span>
                    </div>

                    <div className="edu-right">{item.score}</div>
                </div>
            ))}
        </div>
    );
};

export const ContributionResolve = ({ contributions = [] }) => {
    const [selectedPRs, setSelectedPRs] = useState({});

    const handlePRSelect = (projectIndex, prIndex) => {
        setSelectedPRs((prev) => ({
            ...prev,
            [projectIndex]: prIndex,
        }));
    };

    return (
        <div>
            {contributions.map((project, projectIndex) => {
                const prs = project.pullRequests ?? [];
                const selectedPRIndex = selectedPRs[projectIndex] ?? 0;
                const selectedPR = prs[selectedPRIndex];

                return (
                    <div key={projectIndex} className="project-card">
                        <div className="project-external my-links">
                            <h2>{project.title}</h2>

                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <ExternalLink />
                                </a>
                            )}

                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <Github />
                                </a>
                            )}
                        </div>

                        <p>{project.subtitle}</p>

                        <div className="tech-stack">
                            {project.techStack?.map((tech, index) => (
                                <span key={index}>{tech}</span>
                            ))}
                        </div>

                        {prs.length > 0 && (
                            <div className="pull-requests">
                                <strong>Pull Requests:</strong>

                                <ul>
                                    {prs.map((pr, prIndex) => (
                                        <li key={prIndex}>
                                            <button
                                                type="button"
                                                className={
                                                    selectedPRIndex === prIndex
                                                        ? "active-pr"
                                                        : ""
                                                }
                                                onClick={() =>
                                                    handlePRSelect(
                                                        projectIndex,
                                                        prIndex
                                                    )
                                                }
                                            >
                                                PR #{pr.url?.split("/").pop()}
                                            </button>

                                            <a
                                                href={pr.url}
                                                target="_blank"
                                                rel="noreferrer"
                                                aria-label={`Open PR ${prIndex + 1}`}
                                            >
                                                <ExternalLink size={16} />
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {selectedPR?.description?.length > 0 && (
                            <ul
                                key={`${projectIndex}-${selectedPRIndex}`}
                                className="pr-description flash-highlight"
                            >
                                {selectedPR.description.map((point, index) => (
                                    <li key={index}>{point}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                );
            })}
        </div>
    );

};