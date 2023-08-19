import Parser from 'rss-parser';
import Article from './components/Article';

const parser = new Parser();

const fetchArticle = async (date) => {
  const feed = await parser.parseURL('https://blockworks.co/feed/');
  const article = feed.items.find((item) => item.isoDate === date);
  return article;
};

export default async function NewsPage({ params }) {
  console.log(params.slug);
  const article = await fetchArticle(decodeURIComponent(params.slug));

  return <Article article={article} />;
}
