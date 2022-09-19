import projects from "../projects"

const ProjectListItem = (props) => {
    return (
        <li className="card">
            <figure className="image">
                <img src={projects.image} alt={`${project.name} app`} />
            </figure>
            <section className="details">
                <h4>Great Outdoors Guide</h4>
                <p>Plan your next adventure to in the U.S. National Parks</p>
                <p></p>
            </section>

        </li>
    )
}