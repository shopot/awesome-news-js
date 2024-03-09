export type Source = {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
};

export type SourcesDto = {
  status: string;
  sources: Source[];
};

export type SourceState = {
  sources: Source[];
};
