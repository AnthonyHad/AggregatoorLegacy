import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function NewsCard({ article, source }) {
  return (
    <Card className="bg-slate-700">
      <CardHeader>
        <CardTitle>{article.title}</CardTitle>
        <CardDescription>{source}</CardDescription>
      </CardHeader>
    </Card>
  );
}
