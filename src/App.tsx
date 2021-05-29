import React from "react";
// import { tw } from "twind";
// import logo from "static/logo.svg";
import GlobalStyles from "components/GlobalStyles";
import "./App.css";
import { atom, useAtom } from "jotai";

const url = atom<string>(
  "https://hacker-news.firebaseio.com/v0/topstories.json"
);
const fetchUrlAtom = atom(async (get) => {
  const response = await fetch(get(url));
  const json = await response.json();

  const requests = json.slice(0, 10).map(async (id: number) => {
    const post = await fetch(
      `https://hacker-news.firebaseio.com/v0/item/${id}.json`
    );
    const result = await post.json();
    return result;
  });
  console.log(requests);
  const resultFinal = await Promise.all(requests);
  console.log(resultFinal);
  return resultFinal;
});

function App() {
  const [posts] = useAtom(fetchUrlAtom);

  return (
    <>
      <GlobalStyles />
      <h1>Top 10 HackerNews posts</h1>
      <div className="App">
        <ul>
          {posts.map((data: any) => (
            <li>
              <a href={data.url} rel="noreferrer" target="_blank">
                {data.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
