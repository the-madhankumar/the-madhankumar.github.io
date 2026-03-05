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