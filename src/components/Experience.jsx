import { motion } from "framer-motion";
function Experience() {
  const internships = [
    {
      company: "Codveda Technologies",
      role: "Frontend Development Intern",
      duration: "May 2026 – June 2026",
      mode: "Remote",
      description:
        "Worked on frontend development tasks and practical projects, gaining hands-on experience in building user interfaces and improving web development skills."
    },
    {
      company: "Prodigy Infotech",
      role: "Full Stack Web Development Intern",
      duration: "June 2026",
      mode: "Remote",
      description:
        "Explored full-stack development through practical assignments and projects, strengthening knowledge of frontend and backend technologies."
    },
    {
      company: "Elevate Labs",
      role: "Web Development Intern",
      duration: "June 2025 – July 2025",
      mode: "Remote | Bangalore",
      description:
        "Gained practical exposure to web development through assigned tasks and projects, improving technical knowledge and development skills."
    }
  ];

  return (
    <motion.section
  className="experience section"
  id="experience"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
>

      <div className="section-heading">
        <p>MY PROFESSIONAL JOURNEY</p>
        <h2>Internship <span>Experience</span></h2>
      </div>

      <div className="experience-list">
        {internships.map((item, index) => (
          <div className="experience-card" key={index}>

            <div className="experience-dot"></div>

            <div className="experience-content">
              <div className="experience-top">
                <div>
                  <h3>{item.role}</h3>
                  <h4>{item.company}</h4>
                </div>

                <span className="experience-mode">
                  {item.mode}
                </span>
              </div>

              <p className="experience-date">
                {item.duration}
              </p>

              <p className="experience-description">
                {item.description}
              </p>
            </div>

          </div>
        ))}
      </div>

    </motion.section>
  );
}

export default Experience;
