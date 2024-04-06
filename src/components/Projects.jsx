import { projectData } from './data.js';

const Projects = () => {
    return (
        <div className="projects-container">
            <h2>Projects</h2>
            <div className="projects-grid">
                {projectData.map((project) => (
                    <div className="project-card" key={project.id}>
                        <div className="project-header">
                            <i className="fa-regular fa-folder-open folder-icon"></i>
                            <div className="small-icons">
                                {project.gitHubLink && (
                                    <a href={project.gitHubLink} target="_blank" rel="noopener noreferrer">
                                        <i className="fa-brands fa-github"></i>
                                    </a>
                                )}
                                {project.playstoreLink && (
                                    <a href={decodeURIComponent(project.playstoreLink)} target="_blank" rel="noopener noreferrer">
                                        <i className="fa-brands fa-google"></i>
                                    </a>
                                )}
                                    {project.googleDrive && (
                                    <a href={decodeURIComponent(project.googleDrive)} target="_blank" rel="noopener noreferrer">
                                        <i className="fa-brands fa-google"></i>
                                    </a>
                                )}
                            </div>
                        </div>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
