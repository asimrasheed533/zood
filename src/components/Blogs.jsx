import BlogCard from "@components/BlogCard";
import { useMemo } from "react";
import useQuery from "@utils/useQuery";

export default function Blogs() {
  const { data } = useQuery("/blogs/list");

  const memoizedData = useMemo(
    () => data?.filter((data) => data?.deletedAt === null),
    [data],
  );

  return memoizedData?.map((item) => <BlogCard key={item._id} data={item} />);
}
