import { User } from "../user/types"
import { Article } from "./types"

export const filterUnrelatedContent = (fetchedArticles: Article[], userRelatedContent: Article[]) => {
  return fetchedArticles.filter(
    article => !(userRelatedContent
      .map(art => art.sys.id)
      .includes(article.sys.id)))
}