import { useEffect, useState } from "react";

export default function useFetchRSS(url) {
  const [items, setItems] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        const res = await fetch(`https://api.allorigins.win/get?url=${url}`);
        const { contents } = await res.json();
        const feed = new window.DOMParser().parseFromString(contents, "text/xml");
        console.log(feed);
        const items = feed.querySelectorAll("item");
        const feedItems = [...items].map((i, index) => ({
          link: i.querySelector("link").innerHTML,
          title: i.querySelector("title").innerHTML,
          author: i.querySelector("author").innerHTML,
          description: i.querySelector("description").innerHTML,
          date: i.querySelector("pubDate").innerHTML,
          id: index,
        }));
        setItems(feedItems);
        console.log(feedItems);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { items, error, loading };
}
