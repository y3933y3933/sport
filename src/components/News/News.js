import { useEffect, useState } from "react";
import useFetch from "../../hooks/use-fetch";
import NewsItem from "./NewsItem";

const News = () => {
  const [news, setNews] = useState([]);

  const { loading, error, fetchData } = useFetch();

  useEffect(() => {
    const transFormNews = (data) => {
      setNews(data.data);
    };
    fetchData("data/news/news.json", transFormNews);
  }, [fetchData]);

  const NewsList = () => {
    return news.map((item) => <NewsItem key={item.id} {...item} />);
  };

  return (
    <div>
      <h2 className="text-primary-1 font-bold text-xl text-center mb-2">
        最新消息
      </h2>
      <div className="bg-white rounded lg:w-3/5 md:w-2/3 mx-auto px-4 py-2 shadow-md h-44">
        <NewsList />
      </div>
    </div>
  );
};

export default News;
