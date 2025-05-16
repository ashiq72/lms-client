import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="w-32 bg-gray-100 max-h-full h-screen">
      <div className="text-black">
        <Link href="/profile"> Profile</Link>
      </div>
    </div>
  );
};

export default Sidebar;
