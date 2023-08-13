import Parser from 'rss-parser';
import NewsCard from './components/NewsCard';

const parser = new Parser();

const fetchNews = async () => {
  const feed = await parser.parseURL('https://blockworks.co/feed/');

  return feed.items;
};

export default async function News() {
  const feed = await fetchNews();
  return (
    <>
      <h1>News Page</h1>
      <div>
        {feed.map((item) => (
          <NewsCard key={item.isoDate} article={item} />
        ))}
      </div>
    </>
  );
}

//
