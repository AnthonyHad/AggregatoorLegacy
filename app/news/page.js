import Parser from 'rss-parser';
import NewsCard from './components/NewsCard';
// import fs from 'fs';

const parser = new Parser({
  customFields: {
    feed: ['author'],
  },
});

const fetchNews = async () => {
  const feed = await parser.parseURL('https://blockworks.co/feed/');
  // fs.writeFileSync('output.json', JSON.stringify(feed, null, 2));
  return feed;
};

export default async function News() {
  const feed = await fetchNews();
  return (
    <>
      <h1>News Page</h1>
      <div>
        {feed.items.map((item) => (
          <NewsCard
            key={item.isoDate}
            article={item}
            source={feed.author.name[0]}
          />
        ))}
      </div>
    </>
  );
}

//
