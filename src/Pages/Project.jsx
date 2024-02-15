/* eslint-disable no-unused-vars */
import { useState } from "react";
import ProjectList from "../Components/ProjectList";
import ProjectForm from "../Components/ProjectForm";
import ProjectDetails from "../Components/ProjectDetails";
import BidList from "../Components/BidList";
import ChatComponent from "../Components/ChatComponent";
import Notification from "../Components/Notification";
import ProgressTracker from "../Components/ProgressTracker";
import FileUpload from "../Components/FileUpload";
import TaskList from "../Components/TaskList";
import TimeTracker from "../Components/TimeTracker";

/* eslint-disable no-unused-vars */
function Project() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showProjectForm, setShowProjectForm] = useState(false);

  // Event handlers for managing project data and UI state
  const handleNewProjectClick = () => {
    setShowProjectForm(true);
  };

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
  };

  const handleProjectClose = () => {
    setSelectedProject(true);
  };

  const handleFormClose = () => {
    setShowProjectForm(false);
  };

  return (
    <div className="project-page">
      <h1>Projects</h1>
      <ProjectList />
    </div>
  );
}

export default Project;
