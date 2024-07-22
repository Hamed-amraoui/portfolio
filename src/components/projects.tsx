import ProjectDescription from './ProjectDescription';
import 'bootstrap/dist/css/bootstrap.min.css';

const Projects = () => {
  return (
    <section id='projects' className='my-5'>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fs-4 fw-bold">PROJECTS</h2>
        </div>
        <div className="row">
          <div className="col-md-6 mb-4">
            <ProjectDescription 
              name='Call Center Software Project'
              date='2024'
              description='Developed a comprehensive call center software solution featuring automated dialing, real-time monitoring, call recording, and detailed reporting. Implemented user authentication and role-based access control.'
              role='Fullstack JavaScript Developer'
              tech={['react', 'express', 'postgresql']}
            />
          </div>
          <div className="col-md-6 mb-4">
            <ProjectDescription 
              name='LMS Platform (e-Medra)'
              date='2023'
              description='Built a courses platform like Udemy, featuring user OTP verification, JWT-based authentication, Stripe payment gateway integration, and an admin dashboard for managing courses and users.'
              role='Fullstack JavaScript Developer'
              tech={['Next.js', 'express', 'mongo', 'stripe', 'aws']}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
