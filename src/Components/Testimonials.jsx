import "./Testimonials.css";

/* eslint-disable react/no-unescaped-entities */
function Testimonials() {
  return (
    <section className="testimonials">
      <h2 className="testimonials-title">What our users say about us</h2>
      <div className="testimonials-container">
        <div className="testimonial">
          <blockquote className="testimonial-text">
            "This platform has made it so much easier for me to find freelance
            work and connect with other professionals in my field. I highly
            recommend it!"
          </blockquote>
          <cite className="testimonial-author">- John Doe, Web Developer</cite>
        </div>
        <div className="testimonial">
          <blockquote className="testimonial-text">
            "I've been able to find some amazing freelancers for my projects
            through this platform. The quality of work has been top-notch and
            the communication has been seamless."
          </blockquote>
          <cite className="testimonial-author">
            - Jane Smith, Business Owner
          </cite>
        </div>
        <div className="testimonial">
          <blockquote className="testimonial-text">
            "The community on this platform is incredibly supportive and
            helpful. I've learned so much from other freelancers and have been
            able to grow my business as a result."
          </blockquote>
          <cite className="testimonial-author">
            - Bob Johnson, Graphic Designer
          </cite>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
