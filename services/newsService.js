import Parser from 'rss-parser';
import fs from 'fs';

const parser = new Parser({
  customFields: {
    feed: ['author'],
  },
});

const feedUrls = ['https://blockworks.co/feed', 'https://decrypt.co/feed'];

export const fetchNewsFromFeeds = async () => {
  const feeds = await Promise.all(
    feedUrls.map(async (url) => {
      const feed = await parser.parseURL(url);
      return feed;
    })
  );

  return fs.writeFileSync('output.json', JSON.stringify(feeds, null, 2));
};

async function main() {
  try {
    await fetchNewsFromFeeds();
    console.log('Data written to output.json');
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

// Call the async function to run the code
main();
