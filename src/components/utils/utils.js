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