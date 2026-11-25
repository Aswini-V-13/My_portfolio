
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">

        {/* Left Side - Introduction */}
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="hero-greeting">Hello, I'm</p>

          <h1>
            Ashwini <span>V.</span>
          </h1>

          <h2>Aspiring Software Developer</h2>

          <p className="hero-description">
            MCA student with a passion for software development
            and modern technologies. I enjoy building practical
            applications and exploring new technologies through
            projects and continuous learning.
          </p>

          {/* Action Buttons */}
          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View My Projects
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>

            <a
              href="/resume/Resume_Latest_IT_photo.pdf"
              target="_blank"
              rel="noreferrer"
              className="secondary-btn"
            >
              View Resume
            </a>

            <a
              href="/resume/Resume_Latest_IT_photo.pdf"
              download="Resume_Latest_IT_photo.pdf"
              className="secondary-btn"
            >
              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="social-links">
            <a
              href="https://github.com/Aswini-V-13"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/ashwini-v-52b71a353/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>

        {/* Right Side - Profile Image */}
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            duration: 0.9,
            delay: 0.2,
            ease: "easeOut"
          }}
        >
          <img
            src="/images/profile.jpg"
            alt="Ashwini V - Profile"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;
