import SidebarTopCard from './components/SidebarTopCard';
import SidebarNavCard from './components/SidebarNavCard';

export default function App() {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#121214]">
      {/* Left Sidebar Area */}
      <aside className="p-5 flex flex-col gap-4 shrink-0 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <SidebarTopCard />
        <SidebarNavCard />
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 overflow-y-auto">
        <h1 className="text-2xl font-bold text-white tracking-tight">Dashboard</h1>
      </main>
    </div>
  );
}