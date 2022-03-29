import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { ContentContextInterface, Article, Plan } from "./types";
import { UserContext } from "../user/UserContext";

export const ContentContext =
  React.createContext<ContentContextInterface | null>(null);

const ContentContextProvider: React.FC = (props) => {
  const { token } = useContext(UserContext)!;

  const [articles, setArticles] = useState<Article[]>([]);
  const [plans, setPlans] = useState<Plan[]>([]);

  useEffect(() => {
    if (token) {
      axios
        .get("http://localhost:3000/api/content/articles", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setArticles(response.data.content);
        });
    }
  }, [token]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/content/plans").then((response) => {
      console.log(response.data.content)
      setPlans(response.data.content);
    });
  }, []);

  const contentContext: ContentContextInterface = { articles,plans };
  return (
    <ContentContext.Provider value={contentContext}>
      {props.children}
    </ContentContext.Provider>
  );
};

export default ContentContextProvider;
