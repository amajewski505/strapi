interface CardGridProps {
  children: React.JSX.Element[];
}

const CardGrid: React.FC<CardGridProps> = ({ children }) => {
  return (
    <div className="flex max-xl:space-x-0 max-xl:space-y-(--cardGrid-space-between) space-x-(--cardGrid-space-between) max-xl:flex-col max-xl:items-center">
      {children}
    </div>
  );
};

export default CardGrid;
