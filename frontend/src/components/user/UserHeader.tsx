import { useAppSelector } from "../../app/hook";

const UserHeader = () => {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 p-8 text-white shadow-xl">
      {/* Background Decoration */}
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10" />
      <div className="absolute -bottom-12 left-20 h-32 w-32 rounded-full bg-white/10" />

      <div className="relative z-10">
        <h1 className="text-4xl font-bold">👋 Welcome Back, {user?.name}</h1>

        <p className="mt-2 text-indigo-100 text-lg">
          Find trusted nearby service providers in seconds.
        </p>
      </div>
    </div>
  );
};

export default UserHeader;
