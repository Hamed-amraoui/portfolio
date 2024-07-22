import Stage from './stage';

const About = () =>{
  return(
    <section id='about' className="about">
      <span className="section-title">ABOUT ME</span>
      <p>Here you will find more information about me, what I do, Where I worked, and my current skills mostly in terms of programming and technology</p>
      <div className="grid-about">
        <div className="education">
          <h3 className='title3'>Education :</h3>
          <Stage 
              organisation='Faculty of sciences of Tunis' 
              post={'Master\'s Degree in Computer Science'} 
              src='./fst.png' 
              url='https://fst.rnu.tn/fr' 
              dateStart='SEP 2023' 
              dateEnd='PRESENT' 
              description={'A Master\'s Degree in Computer Science is a two-year undergraduate program that teaches students computer programming, software development, and problem-solving skills, preparing them for careers in IT, software development, and related fields.'} 
          />
          <Stage 
              organisation='Faculty of sciences of Tunis' 
              post={'Bachelor\'s Degree in Computer Science'} 
              src='./fst.png' 
              url='https://fst.rnu.tn/fr' 
              dateStart='SEP 2020' 
              dateEnd='JUN 2023' 
              description={'A Bachelor\'s Degree in Computer Science is a three-year undergraduate program that teaches students computer programming, software development, and problem-solving skills, preparing them for careers in IT, software development, and related fields.'} 
          />
        </div>
        <div className="experience">
          <h3 className='title3'>Work Experience :</h3>
          <Stage 
              organisation='Experts Decision (EXD)' 
              post='Fullstack JavaScript Developer' 
              src='./exd_experts_decision.jpg' 
              url='https://exd-int.com/' 
              dateStart='MAR 2024' 
              dateEnd='PRESENT' 
              description={'A Fullstack MERN position involves developing web applications using MongoDB, Express.js, React.js, and Node.js, covering both frontend and backend tasks.'} 
          />
          <Stage 
              organisation='Spotlight Events' 
              post='Fullstack JavaScript Developer' 
              src='./spotlighevents.png' 
              url='https://spotlight.tn/' 
              dateStart='FEB 2023' 
              dateEnd='JUIN 2023' 
              description={'A Fullstack MERN position involves developing web applications using MongoDB, Express.js, React.js, and Node.js, covering both frontend and backend tasks.'} 
          />
          <Stage 
              organisation='Coworky' 
              post='Intern Fullstack Mobile Developer' 
              src='./coworky.png' 
              url='https://www.coworky.org/' 
              dateStart='AUG 2022' 
              dateEnd='SEP 2022' 
              description={'The internship By Coworky is a new vision of internships developed by Coworky and evey, fogits, magaztee, the influence. The challenge is to build 4 projects in one month. the first MICRO-internship sponsors (Evey, Fogits - Odoo Silver Partner, Shop My Influence, @Think-it)'} 
          />
        </div>
      </div>
      <div className="more">
        <div className="know-me">
          <h3 className='skills-title'>Get To Know Me!</h3>
          <p className='know-me-p'> Experienced Software Developer adept in all stages of advanced web development. Knowledgeable in
          user interface, testing, and debugging processes. Bringing forth expertise in design, installation, testing, and maintenance of web systems. 
          Proficient in an assortment of technologies, including Node.js, Next.js, Express.js, React.js, Django, and MongoDB. 
          Able to effectively self-manage during independent projects, as well as collaborate in a team setting.
          </p>
        </div>
        <div   
         className="skills">
          <ul className='skills-list'>
            <li>
              <img src="./html.png" alt="html" />
            </li>
            <li>
              <img src="./css.png" alt="css" />
            </li>
            <li>
              <img src="./js.png" alt="js" />
            </li>
            <li>
              <img src="./nodejs.png" alt="nodejs" />
            </li>
            <li>
              <img src="./express.png" alt="express" />
            </li>
            <li>
              <img src="./react.png" alt="react" />
            </li>
            <li>
              <img src="./vite.png" alt="vite" />
            </li>
            <li>
              <img src="./vitest.png" alt="vitest" />
            </li>
            <li>
              <img src="./Next.js.png" alt="Next.js" />
            </li>
            <li>
              <img src="./github.png" alt="github" />
            </li>
            <li>
              <img src="./git.png" alt="git" />
            </li>
            <li>
              <img src="./postegresql.png" alt="postegresql" />
            </li>
            <li>
              <img src="./mongo.png" alt="mongo" />
            </li>
            <li>
              <img src="./aws.png" alt="aws" />
            </li>
          </ul>
          <ul className='skills-list' aria-hidden='true'>
            <li>
              <img src="./html.png" alt="html" />
            </li>
            <li>
              <img src="./css.png" alt="css" />
            </li>
            <li>
              <img src="./js.png" alt="js" />
            </li>
            <li>
              <img src="./nodejs.png" alt="nodejs" />
            </li>
            <li>
              <img src="./express.png" alt="express" />
            </li>
            <li>
              <img src="./react.png" alt="react" />
            </li>
            <li>
              <img src="./vite.png" alt="vite" />
            </li>
            <li>
              <img src="./vitest.png" alt="vitest" />
            </li>
            <li>
              <img src="./golang.png" alt="golang" />
            </li>
            <li>
              <img src="./github.png" alt="github" />
            </li>
            <li>
              <img src="./git.png" alt="git" />
            </li>
            <li>
              <img src="./postegresql.png" alt="postegresql" />
            </li>
            <li>
              <img src="./mongo.png" alt="mongo" />
            </li>
            <li>
              <img src="./aws.png" alt="aws" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About;