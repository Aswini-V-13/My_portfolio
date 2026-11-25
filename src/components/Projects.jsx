import { motion } from "framer-motion";
function Projects() {
  const projects = [
    {
      title: "CyberSec Academy",
      category: "Cybersecurity Learning Platform",
      description:
        "An interactive cybersecurity learning platform featuring SQL Injection and XSS simulation labs, structured learning progression, achievement badges and a SOC monitoring dashboard.",
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Prisma",
        "Redis",
        "JWT",
        "SQLite"
      ],
      github: null,
      linkedin: null
    },
    {
      title: "Kartl",
      category: "Full-Stack E-Commerce Application",
      description:
        "A full-stack e-commerce application featuring product search, category filtering, user authentication, cart and wishlist management, OTP-based password recovery and email notifications.",
      technologies: [
        "React.js",
        "JavaScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "bcrypt.js",
        "Nodemailer",
        "Vite"
      ],
      github: "https://github.com/Aswini-V-13/Realtime_website",
      linkedin: "https://lnkd.in/p/g_FGdPuV"
    },
    {
      title: "Full-Stack Social Media Platform",
      category: "MERN Stack Application",
      description:
        "A social media application with user profiles, post creation, image uploads, likes, comments, following features and an interactive social feed.",
      technologies: [
        "React.js",
        "React Router",
        "Axios",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "JWT",
        "Cloudinary",
        "Multer"
      ],
      github: "https://github.com/Aswini-V-13/Prodigy_Task5",
      linkedin: "https://lnkd.in/p/gjQibWUR"
    },
    {
      title: "AcademiX – Attendance & Student Progress Tracker",
      category: "AI & Academic Analytics",
      description:
        "A student progress tracking solution designed to monitor attendance and academic performance, identify potential academic risks and support timely interventions.",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Node.js",
        "Express.js",
        "n8n",
        "Google AI Studio",
        "Telegram BotFather"
      ],
      github: "https://github.com/Aswini-V-13/GenAI_Task",
      linkedin: "https://lnkd.in/p/gM_PWYrv"
    },
    {
      title: "FitFlex",
      category: "Fitness Application",
      description:
        "A responsive fitness application with reusable UI components and interactive features designed to provide a smooth user experience.",
      technologies: [
        "React.js",
        "Vite",
        "JavaScript",
        "CSS"
      ],
      github: "https://github.com/Aswini-V-13/Fitflex_UG_project",
      linkedin: null
    },
    {
      title: "Weather Prediction",
      category: "Machine Learning",
      description:
        "A machine learning project that explores weather prediction using suitable ML algorithms and data analysis.",
      technologies: [
        "Python",
        "Machine Learning"
      ],
      github: "https://github.com/Aswini-V-13/weather_prediction_UG_project",
      linkedin: null
    }
  ];

  return (
    <motion.section
  className="projects section"
  id="projects"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
>
      <div className="section-heading">
        <p>MY RECENT WORK</p>
        <h2>Featured <span>Projects</span></h2>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={project.title}>
            <div className="project-number">
              PROJECT {String(index + 1).padStart(2, "0")}
            </div>

            <h3>{project.title}</h3>

            <p className="project-category">
              {project.category}
            </p>

            <p className="project-description">
              {project.description}
            </p>

            <div className="project-tags">
              {project.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <div className="project-actions">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  View GitHub ↗
                </a>
              )}

              {project.linkedin && (
                <a
                  href={project.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  View Project Post ↗
                </a>
              )}

              {!project.github && !project.linkedin && (
                <span className="project-link project-link-disabled">
                  Repository link coming soon
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;
