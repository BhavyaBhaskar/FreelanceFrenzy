import "./ProjectForm.css";

import { useState } from "react";

function ProjectForm(onSave = null, initialValues = null) {
  const [title, setTitle] = useState(initialValues?.title || "");
  const [description, setDescription] = useState(
    initialValues?.description || ""
  );
  const [deadline, setDeadline] = useState(initialValues?.deadline || "");
  const [budget, setBudget] = useState(initialValues?.budget || "");
  const [assignedFreelancers, setAssignedFreelancers] = useState(
    initialValues?.assignedFreelancers || []
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ title, description, deadline, budget, assignedFreelancers });
  };

  return (
    <form onSubmit={handleSubmit} className="project-form">
      <h2>{initialValues ? "Edit Project" : "Create New Project"}</h2>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label htmlFor="deadline">Deadline:</label>
      <input
        type="date"
        id="deadline"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />
      <label htmlFor="budget">Budget:</label>
      <input
        type="number"
        id="budget"
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
      />
      <label htmlFor="assignedFreelancers">Assigned Freelancers:</label>
      <select
        id="assignedFreelancers"
        value={assignedFreelancers}
        onChange={(e) => setAssignedFreelancers(e.target.value.split(","))}
        multiple
      >
        <option value="">Select freelancers...</option>
        <option value="freelancer1">Freelancer 1</option>
        <option value="freelancer2">Freelancer 2</option>
        <option value="freelancer3">Freelancer 3</option>
      </select>
      <button type="submit">Save</button>
    </form>
  );
}

export default ProjectForm;
