import React, { useState, useEffect } from "react";
import useFetchRSS from "../../hooks/useFetchRSS";

export default function RssList() {
  const rssURL = "https://www.microsiervos.com/index.xml";
  const { items, error, loading } = useFetchRSS(rssURL);

  if (error) {
    console.log(error);
  }

  return (
    <div className="rss-container">
      {loading && <div>Loading...</div>}
      {items?.map((item, index) => {
        return (
          <div key={index} className="rss-item">
            <div className="rss-item-card">
              <div className="rss-item-col">
                <img src={`${item.image}?=${item.id}`} width="100" height="70" className="rss-item-image"></img>
              </div>
              <div className="rss-item-col">
                <h2 className="rss-item-title">
                  <a href={`/${item.title.replaceAll(" ", "-").toLowerCase()}`}>{item.title}</a>
                </h2>
                <div className="rss-item-row">
                  <p className="rss-item-author ">
                    {item.author} on {item.date}
                  </p>
                  <a href={item.link} target="_blank">
                    <img src={require("../../assets/icon-new-tab.png")} width="16" height="16" alt="Open Original in new tab" className="rss-item-outlink"></img>
                  </a>
                </div>
                <div className="rss-item-row rss-item-description">
                  <a href={`/${item.title.replaceAll(" ", "-").toLowerCase()}`}>{item.description.substring(300, 500)}</a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
