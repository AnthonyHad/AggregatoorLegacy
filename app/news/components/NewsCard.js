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

  let timeAgoText = '';
  if (hoursAgo === 0) {
    if (minsAgo <= 1) {
      timeAgoText = 'Just now';
    } else {
      timeAgoText = `${minsAgo} minutes ago`;
    }
  } else if (hoursAgo === 1) {
    timeAgoText = '1 hour ago';
  } else {
    timeAgoText = `${hoursAgo} hours ago`;
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
