export interface Tag {
  id: number;
  name: string;
  count: number;
}

export interface Image {
  data: File;
  url: string;
}

export enum ImageUploadOptions {
  NONE = 'NONE',
  SELECTED = 'SELECTED',
  UPLOADING = 'UPLOADING',
  UPLOADED = 'UPLOADED',
}

// TODO: Consider just getting rid of the Image interface seeing as url is duplicated here
export interface AddImageState {
  uploadState: ImageUploadOptions; // TODO: Better name (don't use state!)
  url?: string;
  image?: Image;
}
