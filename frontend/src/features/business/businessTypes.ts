export interface Business {
  _id: string;
  businessName: string;
  serviceType: string;
  address: string;
  city: string;
  state: string;
  phone: string;
  description: string;

  location: {
    type: "Point";
    coordinates: number[];
  };

  owner: string;
  businessAvatar: string;
  isActive: boolean;

  rating: number;

  createdAt: string;
  updatedAt: string;
}

export interface BusinessState {
  businesses: Business[];
  selectedBusiness: Business | null;
  nearbyBusinesses: Business[];
  loading: boolean;
  error: string | null;
}

export interface UpdateBusinessData {
  businessName: string;
  serviceType: string;
  address: string;
  city: string;
  state: string;
  phone: string;
  description: string;
  location: {
    type: "Point";
    coordinates: number[];
  };
}
