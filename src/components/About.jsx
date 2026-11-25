
import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      className="about section"
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="section-heading">
        <p>GET TO KNOW ME</p>
        <h2>
          About <span>Me</span>
        </h2>
      </div>

      <div className="about-content">

        {/* Left Side - About Information */}
        <div className="about-text">
          <h3>Aspiring Software Developer</h3>

          <p>
            I'm an MCA student with a strong interest in
            software development and modern web technologies.
            I enjoy transforming ideas into practical and
            user-friendly digital solutions.
          </p>

          <p>
            Through internships and academic projects,
            I've gained hands-on experience in frontend
            and full-stack development. I'm passionate
            about exploring new technologies, improving
            my problem-solving skills and continuously
            growing as a developer.
          </p>

          <div className="about-details">
            <div>
              <strong>Education</strong>
              <span>Master of Computer Applications</span>
            </div>

            <div>
              <strong>Interests</strong>
              <span>Web Development, AI & Technology</span>
            </div>

            <div>
              <strong>Currently Learning</strong>
              <span>Modern Web Development</span>
            </div>
          </div>
        </div>

        {/* Right Side - Journey Card */}
        <div className="about-card">
          <h3>My Journey</h3>

          <p>
            Learning, building, experimenting and
            growing through every opportunity.
          </p>

          <div className="journey-icon">✦</div>
        </div>

      </div>
    </motion.section>
  );
}

export default About;
