import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "../Spinner";
import PropTypes from "prop-types";

export default function News(props) {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pageNo, setPageNo] = useState(1);

  useEffect(() => {
    const getData = async () => {
      let url = `https://newsapi.org/v2/top-headlines?&country=${props.country}&page=${pageNo}&pageSize=${props.pageSize}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;
      let rawData = await fetch(url);
      let data = await rawData.json();
      setArticles(data.articles);
      setIsLoading(false);
    };
    getData();
  }, []);
  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      let url = `https://newsapi.org/v2/top-headlines?&category=${props.category}&country=${props.country}&page=${pageNo}&pageSize=${props.pageSize}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;
      let rawData = await fetch(url);
      let data = await rawData.json();
      setArticles(data.articles);
      setIsLoading(false);
    };
    getData();
  }, [props.category, props.country, props.pageSize, pageNo]);

  return (
    <>
      {isLoading && <Spinner />}
      <div>
        <h1 className="font-medium text-center text-slate-800 dark:text-white text-3xl">
          {props.title}
        </h1>
        <div className="flex flex-wrap justify-center mt-10 gap-8">
          {articles.map((article, index) => {
            if (
              article.title !== null &&
              article.description !== null &&
              article.url !== null &&
              article.urlToImage !== null
            )
              return (
                <NewsItem
                  key={index}
                  title={`${article.title.slice(0, 45)}${article.title.length > 50 && "..."}`}
                  description={`${article.description.slice(0, 120)}${
                    article.description.length > 120 && "..."
                  }`}
                  newsUrl={article.url}
                  imageUrl={article.urlToImage}
                />
              );
            else return null;
          })}
        </div>
      </div>
    </>
  );
}

News.defaultProps = {
  category: "",
  country: "in",
  pageSize: 20,
};

News.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string,
  country: PropTypes.string,
  pageSize: PropTypes.number,
};
