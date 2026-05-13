export default function DashboardLayout({ sidebar, header, children }) {
  return (
    <div className="min-h-screen bg-[#050509] text-gray-100 flex">
      <aside className="w-64 border-r border-gray-800 bg-black/40 backdrop-blur">
        {sidebar}
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="border-b border-gray-800 bg-black/40 backdrop-blur">
          {header}
        </header>

        <main className="flex-1 overflow-y-auto">
          <div className="max-w-6xl mx-auto px-6 py-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
