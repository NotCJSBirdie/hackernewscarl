import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Author from "./Author";
import "../sass/Data.scss";

const Data = () => {
  const [data, setData]: any = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [storydataArray, setStoryDataArray]: any = useState([]);

  const insertItem = (data: any) => {
    data.map((x: any) => {
      axios
        .get(`https://hacker-news.firebaseio.com/v0/item/${x}.json`)
        .then((response) => {
          console.log(response.data);
          pushItemToArray(response.data);
        });
    });
  };

  const pushItemToArray = (newstory: any) => {
    setStoryDataArray((storydata: any) => [...storydata, newstory]);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://hacker-news.firebaseio.com/v0/topstories.json`
        );
        setError(null);
        insertItem(response.data);
        console.log(response?.data);
      } catch (err: any) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  const convertToDate = (time: any) => {
    var date = new Date(time);

    return (
      <span>
        {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}{" "}
        {date.getHours()} {date.getMinutes()} {date.getSeconds()}
      </span>
    );
  };

  return (
    <div id="grid-news">
      {storydataArray
        .sort((a: any, b: any) =>
          a.score < b.score ? 1 : a.score > b.score ? -1 : 0
        )
        .map((storyitem: any) => {
          return (
            <div id="individual-news">
              <div id="news-title">{storyitem?.title}</div>
              <div id="news-author">
                <Author author={storyitem?.by} />
              </div>
              <div id="news-score">Score: {storyitem?.score}</div>
              <div id="news-time">Time: {convertToDate(storyitem?.time)}</div>
              <div id="news-url">{storyitem?.url}</div>
            </div>
          );
        })
        .splice(0, 10)}
    </div>
  );
};

export default Data;
