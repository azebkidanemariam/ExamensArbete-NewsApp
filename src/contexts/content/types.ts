export interface ContentContextInterface {
  articles: Article[];
  plans:Plan[]
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
    body: object;
    images: ContentImage[];
    featureImage: ContentImage;
    tags: Tag[];
  };
}

export interface ContentImage extends Content {
  fields: {
    file: {
      url: string;
    };
  };
}

export interface Celebrity extends Content {
  fields: {
    name: string;
    bio: object;
    images: ContentImage[];
    articles: Article[];
  };
}

export interface Tag extends Content {
  fields: {
    name: string;
  };
}

export interface Category extends Content {
  fields: {
    title: string;
    tags: Tag[];
  };
}
export interface Plan extends Content {
  fields: {
    title: string;
    price:number;
    descriptionList:string[];
    uspList:string[];
  };
}
