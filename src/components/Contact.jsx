import { motion } from "framer-motion";
function Contact() {
  return (
    <motion.section
  className="contact section"
  id="contact"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
>
      <div className="section-heading">
        <p className="section-subtitle">GET IN TOUCH</p>
        <h2>Let's Connect</h2>
        <p>
          I'm always interested in learning, collaborating and exploring
          new opportunities. Feel free to reach out!
        </p>
      </div>

      <div className="contact-cards">
        <a
          href="mailto:aswiniaswini1303@gmail.com"
          className="contact-card"
        >
          <span className="contact-icon">✉</span>
          <h3>Email</h3>
          <p>Send me an email</p>
        </a>

        <a
          href="https://www.linkedin.com/in/ashwini-v-52b71a353/"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <span className="contact-icon">in</span>
          <h3>LinkedIn</h3>
          <p>Connect professionally</p>
        </a>

        <a
          href="https://github.com/Aswini-V-13"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <span className="contact-icon">⌘</span>
          <h3>GitHub</h3>
          <p>Explore my projects</p>
        </a>
      </div>
    </motion.section>
  );
}

export default Contact;
