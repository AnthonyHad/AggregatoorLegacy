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

      const normalizedFeed = feed.items.map((item) => {
        const normalizedItem = {
          id: item.id || item.guid || null,
          title: item.title,
          link: item.link,
          pubDate: item.pubDate,
          contentSnippet: item.contentSnippet,
          source: feed.title,
        };

        return normalizedItem;
      });

      // returns an array of feeds and each feed is an array of objects
      return normalizedFeed;
    })
  );

  return feeds;

  // return fs.writeFileSync(
  //   'normalizedOutput.json',
  //   JSON.stringify(feeds, null, 2)
  // );
};

// async function main() {
//   try {
//     await fetchNewsFromFeeds();
//     console.log('Data written to output.json');
//   } catch (error) {
//     console.error('An error occurred:', error);
//   }
// }

// main();
