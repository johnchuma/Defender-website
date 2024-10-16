interface TileItem {
  title: string;
  icon: JSX.Element;
  price: string;
}

interface TilesProps {
  tilesItems: TileItem[];
}

const Tiles: React.FC<TilesProps> = ({ tilesItems }) => {
  return (
    <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-5">
      {tilesItems.map((tile, index) => (
        <div
          className="space-y-4 w-full md:w-1/5 rounded-lg bg-white p-4 items-start"
          key={index}
        >
          <div className="flex justify-between space-x-3">
            <p className="text-mutedText text-sm">{tile.title}</p>
            <div>{tile.icon}</div>
          </div>
          <p className="text-xl text-black font-semibold">TZS {tile.price}</p>
          <p className="text-mutedText text-sm">this week</p>
        </div>
      ))}
    </div>
  );
};

export default Tiles;
