
interface CategoryProps {
  activeTab: number;
  setActiveTab: (tab: number) => void;
}

export default function OrderCategory({
  activeTab,
  setActiveTab,
}: CategoryProps) {
  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div className="flex justify-start space-x-7 md:space-x-14 px-3">
        {["All", "Pending", "Delivered"].map((category, index) => (
          <div
            onClick={() => handleTabClick(index)}
            key={index}
            className={`flex cursor-pointer items-center space-x-2 border-b-2 pb-3 hover:text-primaryColor ${
              activeTab === index
                ? "border-primaryColor text-primaryColor"
                : "border-transparent"
            }`}
          >
            <div>{category}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
