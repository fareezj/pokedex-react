export const PokeProperties = ({
  title,
  details,
}: {
  title: string;
  details: string;
}) => {
  return (
    <div className="poke-details">
      <h5>{title}</h5>
      <p className="poke-details-item">{details}</p>
    </div>
  );
};
