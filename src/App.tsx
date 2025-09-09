import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Twitter, Instagram } from 'lucide-react';
import { Card } from './components/Card';
import { Section } from './components/Section';
import { ContactForm } from './components/ContactForm';
import { Navigation } from './components/Navigation';
import { ScrollReveal } from './components/ScrollReveal';

function App() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-portfolio-dark via-portfolio-darker to-portfolio-dark text-portfolio-gold">
      {/* Navigation */}
      <Navigation />

      {/* Header */}
      <header className="text-center py-24 px-8 bg-gradient-radial from-portfolio-darker/50 to-portfolio-dark">
        <div className="animate-slide-up">
          <h1 className="font-orbitron text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-portfolio-gold to-portfolio-gold-light bg-clip-text text-transparent">
            Matha Jayanth Kumar
          </h1>
          <p className="text-xl md:text-2xl text-portfolio-gold-light mb-8 font-roboto font-light">
            B.Tech CSE (Data Science) | Data Analyst 
          </p>
          <button
            onClick={scrollToContact}
            className="bg-portfolio-gold text-portfolio-dark px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 hover:bg-portfolio-gold-hover hover:scale-105 hover:shadow-lg hover:shadow-portfolio-gold/50"
          >
            Let's Connect
          </button>
        </div>
      </header>

      {/* About Me */}
      <Section title="About Me" id="about">
        <div className="text-lg leading-relaxed font-roboto text-gray-200">
          <p>
            I am a detail-oriented technology enthusiast with a proven ability to identify real-world problems and implement innovative solutions through technology. Currently pursuing Computer Science Engineering and Data Science at Dadi Institute of Engineering and Technology ANAKAPALLI (2022-2026).
            <p></p>
           <p></p> 
            Highly motivated and detail-oriented Data Science graduate seeking an entry-level position to apply my skills
            in data analysis, machine learning, and statistical modeling. Proficient in Python, SQL, and data visualization
            tools, with hands-on experience in academic projects involving real-world datasets.
          </p>
        </div>
      </Section>

      {/* Education */}
      <Section title="Education" id="education">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card delay={100}>
            <div className="text-center">
              <h3 className="font-semibold text-portfolio-gold mb-2">B.Tech in CSE (Data Science)</h3>
              <p className="text-gray-300">Dadi Institute of Engineering and Technology Anakapalli
</p>
              <p className="text-portfolio-gold-light font-medium">CGPA: 7.20</p>
            </div>
          </Card>
          <Card delay={200}>
            <div className="text-center">
              <h3 className="font-semibold text-portfolio-gold mb-2">12th - MPC</h3>
              <p className="text-gray-300">Bharath Defence Academy Kothavalasa </p>
              <p className="text-portfolio-gold-light font-medium">75%</p>
            </div>
          </Card>
          <Card delay={300}>
            <div className="text-center">
              <h3 className="font-semibold text-portfolio-gold mb-2">10th</h3>
              <p className="text-gray-300">Andhra Public School Haripalam </p>
              <p className="text-portfolio-gold-light font-medium">75%</p>
            </div>
          </Card>
        </div>
      </Section>

      {/* Experience */}
      <Section title="Experience" id="experience">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         
          <Card delay={100}>
            <h3 className="font-semibold text-portfolio-gold mb-3">AWS Cloud Virtual Internship</h3>
            <p className="text-gray-300 mb-2">Hands-on with AWS tools</p>
            <p className="text-portfolio-gold-light text-sm">May-July 2023</p>
             </Card>
        
             <Card delay={200}>
            <h3 className="font-semibold text-portfolio-gold mb-3">Data Valley Internship</h3>
            <p className="text-gray-300 mb-2">Python, ML, NLP, Deployment</p>
            <p className="text-portfolio-gold-light text-sm">May-June 2024</p>
          </Card>
          <Card delay={300}>
            <h3 className="font-semibold text-portfolio-gold mb-3">Google AI & ML Virtual</h3>
            <p className="text-gray-300 mb-2">AI Applications, Model Optimization</p>
            <p className="text-portfolio-gold-light text-sm">Jan-Mar 2025</p>
          </Card>
        </div>
      </Section>

      {/* Projects */}
      <Section title="Projects" id="projects">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card delay={100}>
            <h3 className="font-semibold text-portfolio-gold mb-3">Online UPI Fraud Detection</h3>
            <p className="text-gray-300 mb-2">Machine Learning project for detecting fraudulent UPI transactions using advanced algorithms and data analysis</p>
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="bg-portfolio-gold/20 text-portfolio-gold px-2 py-1 rounded text-xs">Python</span>
              <span className="bg-portfolio-gold/20 text-portfolio-gold px-2 py-1 rounded text-xs">Machine Learning</span>
              <span className="bg-portfolio-gold/20 text-portfolio-gold px-2 py-1 rounded text-xs">Data Analysis</span>
            </div>
          </Card>
        </div>
      </Section>

      {/* Skills & Tools */}
      <Section title="Skills & Tools" id="skills">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {['Python', 'MySQL', 'HTML/CSS/JS', 'Data Analytics', 'Power BI', 'VS Code'].map((skill, index) => (
            <Card key={skill} className="text-center py-4" delay={index * 100}>
              <span className="font-medium text-portfolio-gold">{skill}</span>
            </Card>
          ))}
        </div>
      </Section>

      {/* Certifications */}
      <Section title="Certifications" id="certifications">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card delay={100}>
            <div className="flex items-center gap-2">
              <ExternalLink size={16} className="text-portfolio-gold" />
              <span>Data Science & ML – Data Valley</span>
            </div>
          </Card>
          <Card delay={200}>
            <div className="flex items-center gap-2">
              <ExternalLink size={16} className="text-portfolio-gold" />
              <span>Web Design – GUVI / APSSDC</span>
            </div>
          </Card>
          <Card delay={300}>
            <div className="flex items-center gap-2">
              <ExternalLink size={16} className="text-portfolio-gold" />
              <span>NoSQL Basics – IBM</span>
            </div>
          </Card>
        </div>
      </Section>

      {/* Contact */}
      <Section title="Contact Me" id="contact">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-6 mb-8">
          <Card className="flex items-center gap-3" delay={100}>
            <Mail size={20} className="text-portfolio-gold" />
            <span className="text-sm">mjkumar455@gmail.com</span>
          </Card>
          <Card className="flex items-center gap-3" delay={150}>
            <Phone size={20} className="text-portfolio-gold" />
            <span className="text-sm">+91 7730856398</span>
          </Card>
          <Card className="flex items-center gap-3" delay={200}>
            <MapPin size={20} className="text-portfolio-gold" />
            <span className="text-sm">Anakapalli, AP</span>
          </Card>
          <Card delay={250}>
            <a 
              href="https://www.linkedin.com/in/matha-jayanth-kumar-5a39bb2b6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-portfolio-gold hover:text-portfolio-gold-hover transition-colors"
            >
              <Linkedin size={20} />
              <span className="text-sm">LinkedIn</span>
            </a>
          </Card>
          <Card delay={300}>
            <a 
              href="https://github.com/mjayanth03" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-portfolio-gold hover:text-portfolio-gold-hover transition-colors"
            >
              <Github size={20} />
              <span className="text-sm">GitHub</span>
            </a>
          </Card>
          <Card delay={350}>
            <a 
              href="https://x.com/MJAYANTH_03?t=_YypuTrMcxhLCcNApksAMg&s=09" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-portfolio-gold hover:text-portfolio-gold-hover transition-colors"
            >
              <Twitter size={20} />
              <span className="text-sm">Twitter</span>
            </a>
          </Card>
          <Card delay={400}>
            <a 
              href="https://www.instagram.com/__jayanth__03?igsh=c2syNGllNnE0eWNi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-portfolio-gold hover:text-portfolio-gold-hover transition-colors"
            >
              <Instagram size={20} />
              <span className="text-sm">Instagram</span>
            </a>
          </Card>
        </div>
        
        <ScrollReveal direction="up" delay={500}>
          <ContactForm />
        </ScrollReveal>
      </Section>

      {/* Footer */}
      <footer className="text-center py-8 px-8 bg-portfolio-darker text-gray-400 text-sm">
        <p>&copy; 2025 Matha Jayanth Kumar. Designed with ✨ for impact.</p>
      </footer>
    </div>
  );
}

export default App;