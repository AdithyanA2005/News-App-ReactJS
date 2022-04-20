import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    return (
      <>
        <div className="flex flex-col bg-white dark:bg-slate-600 w-72 rounded-xl">
          <img className="object-cover h-44 rounded-t-xl" src={this.props.imageUrl} alt="Cover" />
          <div className="flex flex-1 flex-col justify-between gap-3 items-start p-5">
            <h1 className="font-medium text-slate-900 dark:text-white text-xl">
              {this.props.title}
            </h1>
            <p className="text-slate-800 dark:text-slate-200">{this.props.description}</p>

            <a
              className="text-slate-900 mt-2 bg-slate-200 dark:text-white dark:bg-gray-400 w-36 py-2 text-center rounded-md hover:scale-105 duration-200"
              href={this.props.newsUrl}
              rel="noreferrer"
              target="_blank"
            >
              Read More
            </a>
          </div>
        </div>
      </>
    );
  }
}
