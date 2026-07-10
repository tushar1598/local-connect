import UserHeader from "./UserHeader";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useAppDispatch } from "../../app/hook";
import { getNearbyBusinesses } from "../../features/business/businessThunk";
import SearchDiscovery from "./newlook/SearchDiscovery";
import NearbyBusinesses from "./newlook/NearbyBusinesses";
import RecommendedBusinesses from "./newlook/RecommendedBusinesses";
import RecentlyViewed from "./newlook/RecentlyViewed";

const UserDashboard = () => {
  const dispatch = useAppDispatch();

  const [locationStatus, setLocationStatus] = useState<
    "loading" | "success" | "error"
  >("loading");

  console.log(locationStatus);

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocationStatus("error");
      toast.error("Geolocation is not supported.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          await dispatch(
            getNearbyBusinesses({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            }),
          ).unwrap();

          setLocationStatus("success");
        } catch (error: any) {
          setLocationStatus("error");
          toast.error(error);
        }
      },

      () => {
        setLocationStatus("error");
        toast.error("Please allow location access.");
      },

      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 300000, // 5 Minutes
      },
    );
  }, [dispatch]);

  return (
    // <div className="max-w-7xl mx-auto p-6 mt-6">
    //   <UserHeader />

    //   {/* Location Status */}
    //   <div className="mt-8">
    //     <DetectLocationCard status={locationStatus} />
    //   </div>

    //   <div className="mt-8">
    //     <SearchBar />
    //   </div>

    //   <div className="mt-10">
    //     <ServiceCategories />
    //   </div>

    //   <div className="mt-10">
    //     <NearbyBusinesses />
    //   </div>
    // </div>

    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl space-y-8 px-6 py-8">
        <UserHeader />
        {/* SearchDiscovery */}
        <SearchDiscovery />
        {/* Nearby */}
        <NearbyBusinesses />
        {/* Recommended */}
        <RecommendedBusinesses />
        {/* Recent */}
        <RecentlyViewed />
      </div>
    </div>
  );
};

export default UserDashboard;
