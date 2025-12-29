
export interface Artist {
  id: string;
  name: string;
  handle: string;
  description: string;
  imageUrl: string;
}

export interface BookingFormData {
  artistId: string;
  name: string;
  email: string;
  phone: string;
  idea: string;
  date: string;
}
