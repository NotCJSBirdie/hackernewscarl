import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const Author = (props: any) => {
  const { author } = props;
  const [authorItem, setAuthorItem]: any = useState(null);
  const [authorloading, setAuthorLoading] = useState(true);
  const [authorerror, setAuthorError] = useState(null);

  useEffect(() => {
    const getAuthor = async () => {
      try {
        const response = await axios.get(
          `https://hacker-news.firebaseio.com/v0/user/${author}.json`
        );
        setAuthorError(null);
        setAuthorItem(response.data);
        console.log(response?.data);
      } catch (err: any) {
        setAuthorError(err.message);
        setAuthorItem(null);
      } finally {
        setAuthorLoading(false);
      }
    };
    getAuthor();
  }, []);

  return (
    <div>
      <div>Author Id: {authorItem?.id}</div>
      <div>Karma Score: {authorItem?.karma}</div>
    </div>
  );
};

export default Author;
