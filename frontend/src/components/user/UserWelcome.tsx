import { useAppSelector } from "../../app/hook";

const UserHeader = () => {
  const { user } = useAppSelector((state) => state.auth);

  const hour = new Date().getHours();

  const greeting =
    hour < 12 ? "Good Morning" : hour < 18 ? "Good Afternoon" : "Good Evening";

  return (
    <section className="flex flex-col gap-2">
      <h1 className="text-3xl font-bold text-gray-900">
        👋 {greeting}, {user?.name}
      </h1>

      <p className="text-gray-500 text-lg">What are you looking for today?</p>
    </section>
  );
};

export default UserHeader;
