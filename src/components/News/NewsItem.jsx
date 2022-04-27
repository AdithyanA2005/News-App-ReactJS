import React from "react";
import PropTypes from "prop-types";

export default function NewsItem(props) {
  return (
    <>
      <div className="flex flex-col overflow-hidden bg-white dark:bg-slate-600 w-72 rounded-xl">
        <img
          className="object-cover rounded-t-xl p-h-full font-bold text-xl text-center h-44 bg-slate-400 text-slate-200 dark:bg-slate-500 dark:text-slate-300"
          src={props.imageUrl}
          alt="News Promo "
        />
        <div className="flex flex-1 flex-col justify-between gap-3 items-start p-5">
          <h1 className="font-medium text-slate-900 dark:text-white text-xl">
            <abbr title={props.titleAbbr}>
              <a href={props.newsUrl} rel="noreferrer" target="_blank">
                {props.title}
              </a>
            </abbr>
          </h1>
          <p className="text-slate-800 dark:text-slate-200">{props.description}</p>
          <abbr title="View full news">
            <a
              className="text-slate-900 mt-2 bg-slate-200 dark:text-white dark:bg-gray-400 w-36 py-2 text-center rounded-md hover:scale-105 duration-200"
              href={props.newsUrl}
              rel="noreferrer"
              target="_blank"
            >
              Read More
            </a>
          </abbr>
        </div>
      </div>
    </>
  );
}

NewsItem.propTypes = {
  title: PropTypes.string.isRequired,
  titleAbbr: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  newsUrl: PropTypes.string.isRequired,
};
