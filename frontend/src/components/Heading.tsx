interface HeadingProps {
  headline: string;
  description: string;
}

const Heading: React.FC<HeadingProps> = ({ headline, description }) => {
  return (
    <header className="heading">
      <h2 className="h2">{headline}</h2>
      <p className="text-light-18-18">{description}</p>
    </header>
  );
};

export default Heading;
