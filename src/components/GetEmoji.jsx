import axios from "axios";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";

const httpClient = axios.create();

export const GetEmoji = () => {
  const [emojiesResults, setEmojiesResults] = useState([]);
  const [searchText, setsearchText] = useState("");

  const searchEmojis = () => {
    httpClient
      .get(`https://emojihub.yurace.pro/api/search?q=${searchText}`)
      .then((result) => {
        setEmojiesResults(result.data);
      });
  };

  useEffect(() => {
    searchEmojis();
  }, []);

  return (
    <div className="flex flex-col gap-10">
      <div className="text-4xl text-blue-500">Emoji!</div>
      <div>
        <input
          className="p-3 bg-sky-500 w-30 rounded-full"
          type="text"
          value={searchText}
          onChange={(event) => {
            setsearchText(event.target.value);
          }}
        />
        <button
          onClick={() => {
            searchEmojis();
          }}
        >
          search text
        </button>
        {emojiesResults.slice(0, 30).map((emoji) => {
          return (
            <div key={emoji.name}>
              <span
                className="text-4xl"
                dangerouslySetInnerHTML={{ __html: emoji.htmlCode }}
              ></span>
              {emoji.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};
