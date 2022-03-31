export interface ContentContextInterface {
  articles: Article[];
  fetchNextArticles: () => void;
  celebrities: Celebrity[];
  ads: Ad[];
  getCelebrityArticles: (celebrityId: string) => Promise<Article[]>;
  setContentError: React.Dispatch<React.SetStateAction<boolean>>;
  contentError: boolean;
}

export interface Pagination {
  total?: number;
  skip: number;
  limit: number;
  next?: number;
}

export interface Content {
  sys: {
    id: string;
    createdAt: string;
    updatedAt: string;
  };
}

export interface Article extends Content {
  fields: {
    headline: string;
    preamble: string;
    body: {
      content: any;
    };
    images?: ContentImage[];
    featureImage: ContentImage;
    ads: Ad[];
    video?: ContentVideo;
    featuredContent?: string[]
  };
}

export interface ContentImage extends Content {
  fields: {
    file: {
      url: string;
    };
  };
}
export interface ContentVideo extends Content {
  fields: {
    file: {
      url: string;
    };
  };
}

export interface Celebrity extends Content {
  fields: {
    name: string;
    bio: { content: any[] };
    image: ContentImage;
    articles: Article[];
  };
}

export interface Ad extends Content {
  fields: {
    text: string;
    image: ContentImage;
    url: string;
  };
}
