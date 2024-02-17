import "./FeaturedProject.css";

function FeaturedProject() {
  return (
    <>
      <h2 style={{ color: "white" }}>Featured Project</h2>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ color: "white" }}>
          <h3 className="featured-project-title">
            Virtual Assistant Services for Busy Entrepreneur
          </h3>
          <p className="featured-project-description">Description</p>
          <div className="featured-project-footer">
            <span className="featured-project-author">By</span>
            <span className="featured-project-category">Category</span>
          </div>
        </div>
        <div style={{ color: "white" }}>
          <h3 className="featured-project-title">
            Graphic Design for Product Packaging
          </h3>
          <p className="featured-project-description">Description</p>
          <div className="featured-project-footer">
            <span className="featured-project-author">By</span>
            <span className="featured-project-category">Category</span>
          </div>
        </div>
        <div style={{ color: "white" }}>
          <h3 className="featured-project-title">
            Mobile App Development for Local Business
          </h3>
          <p className="featured-project-description">Description</p>
          <div className="featured-project-footer">
            <span className="featured-project-author">By</span>
            <span className="featured-project-category">Category</span>
          </div>
        </div>
        <div style={{ color: "white" }}>
          <h3 className="featured-project-title">
            Social Media Management for Startup Fashion Brand
          </h3>
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
