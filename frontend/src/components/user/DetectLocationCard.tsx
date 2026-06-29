import { CheckCircle, Loader2, XCircle } from "lucide-react";

interface Props {
  status: "loading" | "success" | "error";
}

const DetectLocationCard = ({ status }: Props) => {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div
          className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
            status === "loading"
              ? "bg-yellow-100"
              : status === "success"
                ? "bg-green-100"
                : "bg-red-100"
          }`}
        >
          {status === "loading" && (
            <Loader2 className="animate-spin text-yellow-600" size={28} />
          )}

          {status === "success" && (
            <CheckCircle className="text-green-600" size={28} />
          )}

          {status === "error" && <XCircle className="text-red-600" size={28} />}
        </div>

        {/* Text */}
        <div className="flex-1">
          {status === "loading" && (
            <>
              <h2 className="text-xl font-semibold">
                Detecting Your Location...
              </h2>

              <p className="mt-2 text-gray-500">
                Please wait while we find nearby businesses around you.
              </p>
            </>
          )}

          {status === "success" && (
            <>
              <h2 className="text-xl font-semibold text-green-700">
                Location Detected
              </h2>

              <p className="mt-2 text-gray-500">
                Showing businesses near your current location.
              </p>
            </>
          )}

          {status === "error" && (
            <>
              <h2 className="text-xl font-semibold text-red-600">
                Location Permission Required
              </h2>

              <p className="mt-2 text-gray-500">
                Please enable location access from your browser settings to
                discover nearby businesses.
              </p>
            </>
          )}
        </div>

        {/* Badge */}
        <div>
          <span
            className={`rounded-full px-3 py-1 text-sm font-medium ${
              status === "loading"
                ? "bg-yellow-100 text-yellow-700"
                : status === "success"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
            }`}
          >
            {status === "loading"
              ? "Detecting"
              : status === "success"
                ? "Ready"
                : "Permission Needed"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DetectLocationCard;
