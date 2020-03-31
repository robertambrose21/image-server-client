export interface Tag {
  id: number;
  name: string;
  count: number;
}

export interface Tags {
  tags: Tag[];
}

export interface Image {
  imageSource: string;
  imageAlt: string;
}
