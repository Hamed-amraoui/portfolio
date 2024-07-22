import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Props {
  name: string,
  date: string,
  tech: string[],
  description: string,
  role: string
}

const ProjectDescription = (props: Props) => {
  const technologies = (techs: string[]) => {
    return techs.map(tech => (
      <div className="d-inline-block me-2" key={tech}>
        <div className="d-flex justify-content-center align-items-center bg-white border border-secondary rounded p-2" style={{ height: '80px', width: '80px' }}>
          <Image src={`/${tech}.png`} width={50} height={50} alt={tech} />
        </div>
      </div>
    ));
  };

  return (
    <div className="p-3 border rounded shadow-sm">
      <h3 className="fs-5 fw-bold">{props.name}</h3>
      <p className="mb-2 text-muted">{props.date}</p>
      <p className="mb-3 fs-6">{props.role}</p>
      <p className="mb-3 text-secondary" style={{ fontSize: '16px', lineHeight: '25px' }}>
        {props.description}
      </p>
      <div>
        <strong className="me-2">Technologies:</strong>
        {technologies(props.tech)}
      </div>
    </div>
  );
};

export default ProjectDescription;
