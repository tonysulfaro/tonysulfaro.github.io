import './GenericCard.scss'

const GenericCard = ({img_url, alt_text, title, body, technologies}) => {
  return (
    <div class="card">
      <div class="card-gradient">
        <div class="card-content">
          <h2>{title}</h2>
          <p>{body}</p>
          <p class="project-technologies">
            {technologies.map((tech)=>(
              <i><strong>{tech}</strong></i>
            ))}
          </p>
        </div>
      </div>
      <img src={img_url} alt={alt_text} />
    </div>
  )
}

export default GenericCard;