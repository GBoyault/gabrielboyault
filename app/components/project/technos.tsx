type TechnosProps = {
  technos: string[];
};

export const Technos = ({ technos }: TechnosProps) => {
  return (
    <div className="flex gap-2 md:gap-3 flex-wrap content-start">
      {technos.map((techno) => (
        <Techno key={techno} techno={techno} />
      ))}
    </div>
  );
};

type TechnoProps = {
  techno: string;
};

const Techno = ({ techno }: TechnoProps) => {
  return (
    <div className="bg-purple-transparent text-purple-light text-[10px] md:text-xs rounded-xl px-2 md:px-4 md:py-1 font-semibold h-max">
      {techno}
    </div>
  );
};
