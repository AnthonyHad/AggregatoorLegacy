import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function NewsCard({ article }) {
  return (
    <Card className="bg-slate-700">
      <CardHeader>
        <CardTitle>{article.title}</CardTitle>
        <CardDescription>{article.author}</CardDescription>
      </CardHeader>
    </Card>
  );
}
