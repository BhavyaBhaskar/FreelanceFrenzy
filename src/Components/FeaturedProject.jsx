import "./FeaturedProject.css";

function FeaturedProject() {
  return (
    <>
      <h2>Featured Project</h2>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <h3 className="featured-project-title">Title</h3>
          <p className="featured-project-description">Description</p>
          <div className="featured-project-footer">
            <span className="featured-project-author">By</span>
            <span className="featured-project-category">Category</span>
          </div>
        </div>
        <div>
          <h3 className="featured-project-title">Title</h3>
          <p className="featured-project-description">Description</p>
          <div className="featured-project-footer">
            <span className="featured-project-author">By</span>
            <span className="featured-project-category">Category</span>
          </div>
        </div>
        <div>
          <h3 className="featured-project-title">Title</h3>
          <p className="featured-project-description">Description</p>
          <div className="featured-project-footer">
            <span className="featured-project-author">By</span>
            <span className="featured-project-category">Category</span>
          </div>
        </div>
        <div>
          <h3 className="featured-project-title">Title</h3>
          <p className="featured-project-description">Description</p>
          <div className="featured-project-footer">
            <span className="featured-project-author">By</span>
            <span className="featured-project-category">Category</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturedProject;
