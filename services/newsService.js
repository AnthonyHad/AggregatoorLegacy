import Parser from 'rss-parser';
// import fs from 'fs';

const parser = new Parser({
  customFields: {
    feed: ['author'],
  },
});

export const fetchNews = async () => {
  const feed = await parser.parseURL('https://blockworks.co/feed/');
  // fs.writeFileSync('output.json', JSON.stringify(feed, null, 2));
  return feed;
};
