export type TTag = 'party' | 'uni' | 'edu' | 'help' | 'job' | 'event' | 'sponsored' | 'other' | string;

export const tags: Record<'label', TTag>[] = [
  { label: 'party' },
  { label: 'uni' },
  { label: 'edu' },
  { label: 'help' },
  { label: 'job' },
  { label: 'event' },
  { label: 'other' }
];

export interface IPost {
  id: number;
  tag: TTag;
  username: string;
  content: string;
  publishDate: string;
  commentsCount?: number;
  votes?: number;
  previewVersion?: boolean;
}

export type TCategoryColors = Record<TTag, string>;

export type TVote = -1 | 0 | 1;
