import NewsCard from './components/NewsCard';
import { fetchNewsFromFeeds } from '@/services/newsService.mjs';

export default async function News() {
  const feeds = await fetchNewsFromFeeds();
  return (
    <>
      <h1>News Page</h1>

      <div>
        {feeds.map((item) => (
          <NewsCard
            key={item.id}
            title={item.title}
            link={item.link}
            pubDate={item.pubDate}
            contentSnippet={item.contentSnippet}
            source={item.source}
          />
        ))}
      </div>
    </>
  );
}
