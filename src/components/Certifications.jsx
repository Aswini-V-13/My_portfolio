import { motion } from "framer-motion";
import { useState } from "react";

const certificates = [
  // AWS
  {
    title: "Introduction to Cloud 101",
    issuer: "Amazon Web Services",
    category: "AWS",
    image: "/certificates/aws/aws-Cloud.jpeg",
  },
  {
    title: "Introduction to Generative AI",
    issuer: "Amazon Web Services",
    category: "AWS",
    image: "/certificates/aws/aws-AI.jpeg",
  },
  {
    title: "Machine Learning Foundations",
    issuer: "Amazon Web Services",
    category: "AWS",
    image: "/certificates/aws/aws-ML.jpeg",
  },
  {
    title: "Cloud Practitioner Practice Exam",
    issuer: "Amazon Web Services",
    category: "AWS",
    image: "/certificates/aws/aws-cloud-practitioner.jpg",
  },

  // IBM and AI
  {
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM SkillsBuild",
    category: "AI & IBM",
    image: "/certificates/ibm/ibm ai.png",
  },
  {
    title: "Large Language Model Basics",
    issuer: "IBM SkillsBuild",
    category: "AI & IBM",
    image: "/certificates/ibm/ibm-LLM.png",
  },
  {
    title: "Mastering the Art of Prompting",
    issuer: "IBM SkillsBuild",
    category: "AI & IBM",
    image: "/certificates/ibm/ibm-prompting.png",
  },
  {
    title: "Troubleshoot Your Code Using IBM Bob",
    issuer: "IBM SkillsBuild",
    category: "AI & IBM",
    image: "/certificates/ibm/ibm-bob.png",
  },
  {
    title: "Generative AI",
    issuer: "GUVI",
    category: "AI & IBM",
    image: "/certificates/ibm/guvi.png",
  },

  // Internships
  {
    title: "Frontend Development Internship",
    issuer: "Codveda Technologies",
    category: "Internships",
    image: "/certificates/internships/codveda.png",
  },
  {
    title: "Web Development Internship",
    issuer: "Elevate Labs",
    category: "Internships",
    image: "/certificates/internships/elevate.jpeg",
  },
  {
    title: "Full Stack Web Development Internship",
    issuer: "Prodigy Infotech",
    category: "Internships",
    image: "/certificates/internships/prodigy.png",
  },

  // Programming
  {
    title: "Python 3.x Programming (Hands-On)",
    issuer: "SkillRack",
    category: "Programming",
    image: "/certificates/python/skillrack py.jpeg",
  },

  // Web development
  {
    title: "Angular Course Completion",
    issuer: "Infosys Springboard",
    category: "Web Development",
    image: "/certificates/web-development/angular.jpeg",
  },
  {
    title: "Full Stack Development MasterClass",
    issuer: "NoviTech",
    category: "Web Development",
    image: "/certificates/web-development/fsd.png",
  },
  {
    title: "React.js MasterClass",
    issuer: "NoviTech",
    category: "Web Development",
    image: "/certificates/web-development/react.png",
  },
  {
    title: "UI/UX Design MasterClass",
    issuer: "NoviTech",
    category: "Web Development",
    image: "/certificates/web-development/uiux.png",
  },

  // Workshops
  {
    title: "Operating System and Linux Security",
    issuer: "Defsecone",
    category: "Workshops",
    image: "/certificates/workshops/cyber.png",
  },
  {
    title: "AI/ML Bootcamp – Certificate of Participation",
    issuer: "Pantech Solutions",
    category: "Workshops",
    image: "/certificates/workshops/genai.jpeg",
  },
  {
    title: "MERN Stack with MongoDB",
    issuer: "Naan Mudhalvan",
    category: "Workshops",
    image: "/certificates/workshops/nm.png",
  },
  {
    title: "Full Stack Web Developer Webinar",
    issuer: "Don Bosco Vazhikaatti",
    category: "Workshops",
    image: "/certificates/workshops/web-dev-training.png",
  },
];

const categories = [
  "All",
  "AWS",
  "AI & IBM",
  "Internships",
  "Programming",
  "Web Development",
  "Workshops",
];

function Certifications() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCertificates =
    activeCategory === "All"
      ? certificates
      : certificates.filter(
          (certificate) => certificate.category === activeCategory
        );

  return (
    <motion.section
  className="certifications section"
  id="certifications"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
>
      <div className="section-heading">
        <p className="section-subtitle">MY LEARNING JOURNEY</p>
        <h2>Certifications & Achievements</h2>
        <p>
          A collection of courses, professional training, internships
          and learning experiences.
        </p>
      </div>

      <div className="certificate-filters">
        {categories.map((category) => (
          <button
            key={category}
            className={
              activeCategory === category ? "filter-btn active" : "filter-btn"
            }
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="certificates-grid">
        {filteredCertificates.map((certificate, index) => (
          <article className="certificate-card" key={index}>
            <a
              href={certificate.image}
              target="_blank"
              rel="noreferrer"
              className="certificate-image-link"
            >
              <img
                src={certificate.image}
                alt={`${certificate.title} certificate`}
                className="certificate-image"
                loading="lazy"
              />
            </a>

            <div className="certificate-info">
              <span className="certificate-category">
                {certificate.category}
              </span>

              <h3>{certificate.title}</h3>
              <p>{certificate.issuer}</p>

              <a
                href={certificate.image}
                target="_blank"
                rel="noreferrer"
                className="certificate-link"
              >
                View Certificate ↗
              </a>
            </div>
          </article>
        ))}
      </div>
    </motion.section>
  );
}

export default Certifications;
