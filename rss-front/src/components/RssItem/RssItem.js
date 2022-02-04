// import React, { useState, useEffect } from "react";
import useFetchRSS from "../../hooks/useFetchRSS";
import { useParams } from "react-router-dom";

export default function RssItem() {
  const rssURL = "https://www.microsiervos.com/index.xml";
  const { items, error, loading } = useFetchRSS(rssURL);

  let params = useParams();
  console.log(params);

  const findItem = () => {
    return items?.find((item) => item.title.replaceAll(" ", "-").toLowerCase() == params.title);
  };

  const result = findItem();
  console.log(result);

  return (
    <div className="rss-item-viewer">
      <p>{result?.description}</p>
    </div>
  );
}
