import { motion } from "framer-motion";
function Skills() {
  const skillGroups = [
    {
      title: "Programming Languages",
      skills: [
        "JavaScript",
        "Python",
        "Java",
        "HTML5",
        "CSS3"
      ]
    },
    {
      title: "Frontend Development",
      skills: [
        "React.js",
        "Vite",
        "Tailwind CSS",
        "Bootstrap",
        "React Router DOM",
        "Responsive Design",
        "Framer Motion",
        "React Icons"
      ]
    },
    {
      title: "Backend Development",
      skills: [
        "Node.js",
        "Express.js",
        "REST APIs"
      ]
    },
    {
      title: "Database & Data Management",
      skills: [
        "MongoDB",
        "Mongoose",
        "MySQL",
        "PostgreSQL",
        "Prisma",
        "Redis",
        "SQLite"
      ]
    },
    {
      title: "Authentication & Integration",
      skills: [
        "JWT",
        "bcrypt.js",
        "Nodemailer",
        "Axios",
        "Cloudinary",
        "Multer",
        "OpenAI API",
        "DummyJSON API"
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Postman",
        "Figma",
        "RStudio",
        "n8n",
        "Google AI Studio",
        "Telegram BotFather"
      ]
    },
    {
      title: "AI & Machine Learning",
      skills: [
        "Machine Learning",
        "Prompt Engineering",
        "Generative AI",
        "AI Tools & Integration"
      ]
    },
    {
      title: "Additional Knowledge",
      skills: [
        "Cybersecurity Fundamentals",
        "SQL Injection",
        "Cross-Site Scripting (XSS)",
        "Vulnerability Simulation",
        "Data Analysis"
      ]
    }
  ];

  return (
   <motion.section
  className="skills section"
  id="skills"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
>
      <div className="section-heading">
        <p>WHAT I WORK WITH</p>
        <h2>Technical <span>Skills</span></h2>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skill-card" key={group.title}>
            <h3>{group.title}</h3>

            <div className="skill-tags">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

export default Skills;
