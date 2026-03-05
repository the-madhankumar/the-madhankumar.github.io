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
          <h2>{project.title}</h2>
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