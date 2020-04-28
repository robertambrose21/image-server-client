export interface Tag {
  id: number;
  name: string;
  count: number;
}

export interface Image {
  imageSource: string;
  imageAlt: string;
}

export interface AddImageState {
  imageUrl: string;
}
