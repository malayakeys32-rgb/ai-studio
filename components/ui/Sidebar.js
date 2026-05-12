const sections = [
  { label: "Chat", active: true },
  { label: "Code", active: false },
  { label: "Documents", active: false },
  { label: "Images", active: false },
  { label: "History", active: false },
  { label: "Settings", active: false },
];

export default function Sidebar() {
  return (
    <div className="h-full flex flex-col">
      <div className="px-4 py-4 border-b border-gray-800">
        <div className="text-sm font-semibold tracking-wide text-gray-200">
          AI STUDIO
        </div>
        <div className="text-xs text-gray-500">Dashboard</div>
      </div>

      <nav className="flex-1 px-2 py-4 space-y-1 text-sm">
        {sections.map((item) => (
          <button
            key={item.label}
            className={`w-full text-left px-3 py-2 rounded-md transition ${
              item.active
                ? "bg-blue-600/80 text-white"
                : "text-gray-300 hover:bg-gray-800"
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <div className="px-4 py-4 border-t border-gray-800 text-xs text-gray-500">
        <div className="font-medium text-gray-300">Workspace</div>
        <div>malayakeys32-rgb</div>
      </div>
    </div>
  );
}
