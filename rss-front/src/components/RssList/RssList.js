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
            <div className="rss-item-title">
              <h2>
                <a href={`/${item.title.replaceAll(" ", "-").toLowerCase()}`}>{item.title}</a>
              </h2>
              <p>
                {item.author} on {item.date}
              </p>
            </div>
            <a href={item.link}>Leer Completo</a>
          </div>
        );
      })}
    </div>
  );
}
