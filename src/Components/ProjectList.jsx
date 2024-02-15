/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import supabase from "../supabase";
import "./ProjectList.css";

/* eslint-disable react/prop-types */
function ProjectList() {
  const [query, setQuery] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function getFacts() {
      const { data, error } = await supabase.from("Project").select("*");

      if (isMounted && !error) {
        setQuery(data);
      }
    }

    getFacts();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="project-list">
      <h2>Project List</h2>
      {query ? (
        <ul className="project" style={{ padding: "4px" }}>
          {query.map((project) => (
            <li key={project.id}>
              <h3>{project.Title}</h3>
              <p>{project.Description}</p>
              <p>{project.BudgetRange}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ProjectList;
