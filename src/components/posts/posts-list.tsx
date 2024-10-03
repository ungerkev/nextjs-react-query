import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Post } from "@/lib/api";

type Props = {
  data?: Post[];
};

const PostsList = ({ data }: Props) => {
  return (
    <div className="space-y-4">
      {data?.map((data) => (
        <div key={data.title}>
          <Card>
            <CardHeader>
              <CardTitle>{data.title}</CardTitle>
              <CardDescription>{data.subtitle}</CardDescription>
            </CardHeader>
          </Card>
        </div>
      ))}

      {!data || data.length === 0 ? <div className="text-center p-3 my-3 bg-slate-100">No data available!</div> : null}
    </div>
  );
};

export default PostsList;
