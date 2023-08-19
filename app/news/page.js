import NewsCard from './components/NewsCard';
import { fetchNews } from '@/services/newsService';

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
