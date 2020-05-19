export interface Tag {
  id: number;
  name: string;
  count: number;
}

export enum ImageUploadOptions {
  NONE = 'NONE',
  SELECTED = 'SELECTED',
  UPLOADING = 'UPLOADING',
  UPLOADED = 'UPLOADED',
}

export interface AddImageState {
  uploadState: ImageUploadOptions; // TODO: Better name (don't use state!)
  url?: string;
  data?: File;
}
