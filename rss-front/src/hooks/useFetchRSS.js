import { useEffect, useState } from "react";

export default function useFetchRSS(url) {
  const [items, setItems] = useState(null);

  useEffect(() => {
    (async function () {
      try {
        const res = await fetch(`https://api.allorigins.win/get?url=${url}`);
        const { contents } = await res.json();
        const feed = new window.DOMParser().parseFromString(contents, "text/xml");
        const items = feed.querySelectorAll("item");
        const feedItems = [...items].map((i, index) => ({
          link: i.querySelector("link").innerHTML,
          title: i.querySelector("title").innerHTML,
          author: i.querySelector("author").innerHTML,
          description: i.querySelector("description").innerHTML,
          date: i.querySelector("pubDate").innerHTML.slice(0, -15),
          image: "https://picsum.photos/200/300",
          id: index,
        }));
        setItems(feedItems);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return { items };
}
