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
  return (
    <Link href={link} target="_blank">
      <Card className="bg-slate-700">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{contentSnippet}</CardDescription>
          <CardFooter>
            {source} | {pubDate}
          </CardFooter>
        </CardHeader>
      </Card>
    </Link>
  );
}
