

const MangagedPorpfoliosCard = ({title, text}:{title: string, text: string}) => {
  return (
    <div className="managed-portfolio-card">
      <h1 className="text-xl font-bold text-center">{title}</h1>
      <p>{text}</p>
    </div>
  );
};

export default MangagedPorpfoliosCard;
