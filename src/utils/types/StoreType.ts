export type Video = {
  id?: string | undefined;
  title?: string;
  url?: string;
  judul?: string;
  deskripsi?: string;
  thumbnail?: string;
  kategori?: string;
  harga?: string;
};

export type Data = {
  data: Video[];
  loading: boolean;
  error: string | null;
};
