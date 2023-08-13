import "./App.css";
import About from "./components/About";
import Banner from "./components/Banner";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  // constant
  const introduction = "Hello, I'm Shahid and I am a";
  const jobTitle="Software Developer";
  const appTitle = "MalikShahid";
  const footerBio =
    "I am a Software Developer, currently working as a front-end developer at GraphicWeave Srinagar, Kashmir from last one year.";
  const about = [
    {
      paragraph: `👋My name is Shahid, a passionate software developer with a keen interest in crafting elegant and efficient solutions in the world of technology. Welcome to my corner of the digital universe!`,
      order: 1
    },
    {
      paragraph: `🎓 With a Master's degree in Computer Applications under my belt, I've been immersing myself in the realm of coding for the past 4 to 5 years. What began as a fascination quickly grew into a deep-seated passion, leading me on a journey of continuous learning and exploration.`,
      order: 2      
    },
    {
      paragraph: `💼 My journey as a software developer has taken me on some remarkable
      paths, and I'm currently proud to call GraphicWeave Srinagar Kashmir
      my professional home. Over the course of nearly a year, I've been
      fortunate to contribute my skills and ideas to a dynamic team, helping
      to shape innovative solutions that meet real-world challenges. `,
      order: 3
    },
    {
      paragraph: ` 🚀 Beyond my professional experience, my journey has been enriched by
      my dedication to personal projects. I've embarked on numerous coding
      adventures, breathing life into ideas and crafting digital experiences
      that come to life on the screen. You can find a selection of these
      projects on my GitHub profile, where every line of code represents a
      step forward in my coding odyssey.`,
      order: 4
    },
    {
      paragraph: `🌟 Whether I'm diving into complex algorithms, crafting intuitive user
      interfaces, or troubleshooting to perfection, my dedication to the
      craft of coding shines through. I relish every opportunity to create
      meaningful and impactful software that makes lives easier and more
      enjoyable.`,
      order: 5
    },
    {
      paragraph: `🌐 As technology continues to evolve, I'm committed to staying at the
      forefront of innovation, learning, and adapting to new challenges. The
      journey is never-ending, and I'm excited to see where each new line of
      code takes me.`,
      order: 6
    },
    {
      paragraph: `Feel free to explore my portfolio and connect with me. Let's
      collaborate, innovate, and shape the future together!`,
      order: 7
    },
    {
      paragraph: `Happy coding! 🚀`,
      order: 8
    },
  ];

  return (

    <>
      <Router>
        <Header appTitle={appTitle}  />
        <Banner  introduction={introduction} jobTitle={jobTitle}/>
        <About about = {about}  />
        <Projects />
        <Certifications/>
        <Footer appTitle={appTitle} footerBio={footerBio} />
      </Router>
    </>
  );
}

export default App;
