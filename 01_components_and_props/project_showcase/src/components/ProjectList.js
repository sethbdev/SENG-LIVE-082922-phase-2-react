import ProjectListItem from "./ProjectListItem";
import projects from "../projects";

const ProjectList = () => {
    //const projectListItems = [
    //    <ProjectListItem project={projects[0] />
    //            <ProjectListItem project={projects[1] />
    //           <ProjectListItem project={projects[2] />
    //           <ProjectListItem project={projects[3] />
    //            <ProjectListItem project={projects[4] />        
    //]

    const projectListItems = projects.map(project => {
        return <ProjectListIem key={project.id} project={project} />
    })

    return (
        <section>
            <h1>All Projects</h1>
            <div className="filter">
                <button>All</button>
                <button>Phase 5</button>
                <button>Phase 4</button>
                <button>Phase 3</button>
                <button>Phase 2</button>
                <button>Phase 1</button>
            </div>
            <ul className="cards">
                {projectListItems}
            </ul>   
        </section>
    )
}

export default ProjectList;