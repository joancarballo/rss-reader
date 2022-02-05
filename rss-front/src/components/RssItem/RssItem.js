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
    <div className="rss-article-view">
      <div className="rss-article-back">
        <a href="/">
          <img src={require("../../assets/left-arrow.png")} width="16" height="16" alt="Open Original in new tab" className="rss-article-backarrow"></img>Back to list
        </a>
      </div>
      <div className="rss-article-head-row">
        <div className="rss-article-head-col">
          <img src={`${result?.image}?=${result?.id}`} width="300px" height="200px" className="rss-article-image"></img>
        </div>
        <div className="rss-article-head-col">
          <h2>{result?.title}</h2>
          <p className="rss-articld-author ">
            {result?.author} on {result?.date}
          </p>
        </div>
      </div>
      <div className="rss-article-description">
        <p>{result?.description}</p>
      </div>
      <div className="rss-article-back">
        <a href="/">
          <img src={require("../../assets/left-arrow.png")} width="16" height="16" alt="Open Original in new tab" className="rss-article-backarrow"></img>Back to list
        </a>
      </div>
    </div>
  );
}
