import Portfolio from './portfolio';

async function getData() {
  const res = await fetch(
    'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@gabriel.Valle'
  );
  return res.json();
}

export default async function Home() {
  const data = await getData();
  const articles = data.items.slice(0, 5);
  return <Portfolio articles={articles} />;
}
