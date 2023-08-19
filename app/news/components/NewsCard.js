import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import Link from 'next/link';

export default function NewsCard({ article, source }) {
  return (
    <Link href={`/news/${encodeURIComponent(article.isoDate)}`}>
      <Card className="bg-slate-700">
        <CardHeader>
          <CardTitle>{article.title}</CardTitle>
          <CardDescription>{source}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}
