import React, { useState, useContext, useEffect } from "react";
import {
  ContentContextInterface,
  Pagination,
  Article,
  Celebrity,
  Ad,
} from "./types";
import { UserContext } from "../user/UserContext";
import * as API from "./api";
import { filterUnrelatedContent } from "./utils";

export const ContentContext =
  React.createContext<ContentContextInterface | null>(null);

const ContentContextProvider: React.FC = (props) => {

  const { token } = useContext(UserContext)!;
  const [articles, setArticles] = useState<Article[]>([]);
const [celebrities, setCelebrities] = useState<Celebrity[]>([]);
  const [ads, setAds] = useState<Ad[]>([]);
  const [contentError, setContentError] = useState(false);
  const [pagination, setPagination] = useState<Pagination>({
    skip: 0,
    limit: 5,
    next: 5
  })

  useEffect(() => {
    if (token) {
      (async () => {
        const response = await API.getArticles(pagination, token);

        if (response) {          
          setArticles(response.articles)
          setPagination(response.pagination)
        }        
      })();
    }
  }, [token]);


  useEffect(() => {
    (async () => {
      const fetchedCelebrities = await API.getCelebrities();

      if (fetchedCelebrities) {
        setCelebrities(fetchedCelebrities);
      }
    })();
  }, []);

  const fetchNextArticles = async () => {   
    if (!pagination.next || pagination.next! >= pagination.total!) return
    
    pagination.skip = pagination.next!

    const response = await API.getArticles(pagination, token!);
        if (response) {    
          setArticles([...articles, ...response.articles])
          setPagination(response.pagination)
        }
  }

  const getCelebrityArticles = async (celebrityId: string) => {
    const celebArticles = await API.getCelebArticles(celebrityId, token!);

    return celebArticles || [];
  };

  useEffect(() => {
    (async () => {
      const fetchedAds = await API.getAds();

      if (fetchedAds) {
        setAds(fetchedAds);
      }
    })();
  }, []);

  const contentContext: ContentContextInterface = {
    articles,
    fetchNextArticles,
    celebrities,
    ads,
    getCelebrityArticles,
    setContentError,
    contentError,
  };

  return (
    <ContentContext.Provider value={contentContext}>
      {props.children}
    </ContentContext.Provider>
  );
};

export default ContentContextProvider;

