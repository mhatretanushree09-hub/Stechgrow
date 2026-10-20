import SidebarTopCard from './components/SidebarTopCard';
import SidebarNavCard from './components/SidebarNavCard';
import UploadCard from './components/UploadCard';
import TopSearchBar from './components/TopSearchBar';
import AiButton from './components/AiButton';
import ProfileAvatar from './components/ProfileAvatar';

export default function App() {
  return (
    <div className="flex h-screen w-screen overflow-x-auto overflow-y-hidden bg-[#121214]">
      {/* Left Sidebar Area */}
      <aside className="p-5 flex flex-col gap-4 shrink-0 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <SidebarTopCard />
        <SidebarNavCard />
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 pt-[19.96px] pl-0 pr-5 pb-6 overflow-y-auto">
        <div className="flex flex-col gap-[33.66px]">
          {/* Top Actions Row */}
          <div className="flex items-center gap-[24px]">
            <UploadCard />
            <TopSearchBar />
            <AiButton className="ml-auto" />
            <ProfileAvatar className="ml-[127px]" />
          </div>

          <h1 className="w-[236px] h-[58px] text-[48px] font-medium leading-[58px] text-white">
            Dashboard
          </h1>
        </div>
      </main>
    </div>
  );
}