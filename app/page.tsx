import Portfolio from './portfolio';

async function getData() {
  const res = await fetch(
    'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@gabriel.Valle'
  );
  return res.json();
}

export default async function Home() {
  const data = await getData();
  const articles = [data.items[0], data.items[1], data.items[2], data.items[3]];
  return <Portfolio articles={articles} />;
}
