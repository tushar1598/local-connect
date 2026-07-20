import BusinessPerformance from "./BusinessPerformance";
import MyServices from "./MyServices";
import Notifications from "./Notifications";
import OwnerHero from "./OwnerHero";
import QuickActions from "./QuickActions";
import QuickStats from "./QuickStats";
import RecentBookings from "./RecentBookings";
import RevenueChart from "./RevenueChart";
import TodayActivity from "./TodayActivity";

const OwnerDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl space-y-8 px-6 py-8">
        <OwnerHero />
        <QuickStats />
        <MyServices />
        <QuickActions />
        <TodayActivity />
        <RecentBookings />
        <Notifications />
        <BusinessPerformance />
        <RevenueChart />
      </div>
    </div>
  );
};

export default OwnerDashboard;
