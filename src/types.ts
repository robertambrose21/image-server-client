export interface Tag {
  id: number;
  name: string;
  count: number;
}

export interface Image {
  data: File;
  url: string;
}

export interface AddImageState {
  image?: Image;
}
