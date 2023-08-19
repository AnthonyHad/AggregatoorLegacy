'use client';

const domParser = new DOMParser();

const extractTextFromHtml = (html) => {
  const doc = domParser.parseFromString(html, 'text/html');
  return doc.body.textContent || '';
};

export default function Article({ article }) {
  const cleanText = extractTextFromHtml(article.content);
  return <p>{cleanText}</p>;
}
