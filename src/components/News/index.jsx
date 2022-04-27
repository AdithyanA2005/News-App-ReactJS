import React, { useContext, useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "../Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import LoaderContext from "../../context/Loader/LoaderContext";

export default function News(props) {
  const [articles, setArticles] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [pageNo, setPageNo] = useState(1);
  const loaderContext = useContext(LoaderContext);
  const truncate = (data, end, start = 0) => {
    return data.slice(start, end) + (data.length > end ? "..." : "");
  };
  const getNews = async (page = pageNo) => {
    let url =
      "https://newsapi.org/v2/top-headlines?" +
      `page=${page}` +
      `${props.category !== undefined ? "&category=" + props.category : ""}` +
      `${props.country !== undefined ? "&country=" + props.country : ""}` +
      `${props.language !== undefined ? "&language=" + props.language : ""}` +
      `${props.pageSize !== undefined ? "&pageSize=" + props.pageSize : ""}` +
      `&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;
    loaderContext.setProgress(10);
    let rawData = await fetch(url);
    loaderContext.setProgress(60);
    let data = await rawData.json();
    loaderContext.setProgress(80);
    setArticles(articles.concat(data.articles));
    setTotalResults(data.totalResults);
    setIsLoading(false);
    loaderContext.setProgress(100);
  };
  const getMoreNews = () => {
    getNews(pageNo + 1);
    setPageNo((prev) => prev + 1);
  };

  useEffect(() => {
    document.title = props.title + " - AdiNews";
    getNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    document.title = props.title + " - AdiNews";
    setIsLoading(true);
    setArticles([]);
    getNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.category, props.country, props.pageSize, props.language, props.title]);

  return (
    <>
      {isLoading && <Spinner isFull />}
      <div>
        <h1 className="font-medium text-center text-slate-800 dark:text-white text-3xl">
          {props.title} News
        </h1>

        <InfiniteScroll
          className="overflow-hidden h-full flex-1 w-full"
          style={{ height: "100%" }}
          dataLength={articles.length}
          next={getMoreNews}
          hasMore={
            !isLoading && pageNo < totalResults / props.pageSize && articles.length < totalResults
          }
          loader={<Spinner />}
        >
          <div className="flex flex-wrap justify-center mt-10 gap-8">
            {articles.map((article, index) => {
              if (article && article.description && article.url && article.urlToImage) {
                return (
                  <NewsItem
                    key={index}
                    title={truncate(article.title, 45)}
                    titleAbbr={article.title}
                    description={truncate(article.description, 120)}
                    newsUrl={article.url}
                    imageUrl={article.urlToImage}
                  />
                );
              }
              return null;
            })}
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
}

News.defaultProps = {
  pageSize: "20",
};

News.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string,
  country: PropTypes.string,
  language: PropTypes.string,
  pageSize: PropTypes.string,
};
