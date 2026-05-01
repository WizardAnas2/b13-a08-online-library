const Sidebar = ({ setCategory, activeCategory }) => {
  const categories = ["All", "Story", "Tech", "Science"];

  return (
    <aside className="w-full md:w-64 bg-base-200 p-4 rounded-lg h-fit shadow-sm">
      <h3 className="font-bold mb-4 text-lg border-b pb-2">Filter by Category</h3>
      <ul className="menu menu-vertical px-0">
        {categories.map((cat) => (
          <li key={cat}>
            <button
              onClick={() => setCategory(cat)}
              className={`${
                activeCategory === cat ? "active bg-primary text-white" : ""
              } mb-1`}
            >
              {cat}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;