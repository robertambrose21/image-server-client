export interface Tag {
  id: number;
  name: string;
  count: number;
}

export enum ImageUploadOptions {
  NONE = 'NONE',
  UPLOADING = 'UPLOADING',
  UPLOADED = 'UPLOADED',
}

export interface AddImageState {
  uploadStatus: ImageUploadOptions;
  url?: string;
  data?: File;
}
