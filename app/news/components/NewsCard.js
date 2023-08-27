import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';

export default function NewsCard({
  title,
  link,
  pubDate,
  contentSnippet,
  source,
}) {
  const currentTime = new Date().getTime();
  const timeDifference = currentTime - pubDate;
  const minsAgo = Math.floor(timeDifference / (1000 * 60));
  const hoursAgo = Math.floor(minsAgo / 60);
  const daysAgo = Math.floor(hoursAgo / 24);

  let timeAgoText = '';
  if (daysAgo > 0) {
    timeAgoText = `${daysAgo} ${daysAgo === 1 ? 'day' : 'days'} ago`;
  } else if (hoursAgo > 0) {
    timeAgoText = `${hoursAgo} ${hoursAgo === 1 ? 'hour' : 'hours'} ago`;
  } else if (minsAgo > 0) {
    timeAgoText = `${minsAgo} ${minsAgo === 1 ? 'minute' : 'minutes'} ago`;
  } else {
    timeAgoText = 'Just now';
  }

  return (
    <Link href={link} target="_blank">
      <Card className="bg-slate-700">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{contentSnippet}</CardDescription>
          <CardFooter>
            {source} | {timeAgoText}
          </CardFooter>
        </CardHeader>
      </Card>
    </Link>
  );
}
