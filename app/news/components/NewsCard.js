import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function NewsCard({
  title,
  link,
  pubDate,
  contentSnippet,
  source,
}) {
  return (
    <Card className="bg-slate-700">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{contentSnippet}</CardDescription>
        <CardFooter>
          {source} | {pubDate}
        </CardFooter>
      </CardHeader>
    </Card>
  );
}
