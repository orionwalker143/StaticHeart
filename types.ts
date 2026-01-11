
export interface Album {
  id: string;
  title: string;
  date: string;
  coverUrl: string;
  tracks: string[];
  description: string;
}

export interface Photo {
  id: string;
  url: string;
  category: string;
  caption: string;
}

export interface MediaEntry {
  id: string;
  type: 'file' | 'link';
  file?: File;
  url?: string;
}

export interface Member {
  id: string;
  name: string;
  position: string;
  photoUrl: string;
  bio: string;
  stats: {
    sync: string;
    freq: string;
    role: string;
  };
  personalLog: string;
}

export interface AuditionForm {
  name: string;
  birthYear: string;
  birthday: string;
  email: string;
  country: string;
  gender: string;
  specialty: 'vocal' | 'dance' | 'rap' | 'visual';
  socialPlatform: string;
  socialHandle: string;
  bio: string;
  photos: MediaEntry[];
  videos: MediaEntry[];
}
