import { useMemo, useState } from "react";

import ScrollContainer from "react-indiana-drag-scroll";
import { Tweet } from "react-tweet";
import axios from "@utils/axios";
import useGetLanguage from "@utils/useGetLanguage";
import useQuery from "@utils/useQuery";

export default function Tweets() {
  const language = useGetLanguage();

  const { data: tweets } = useQuery("/tweets/list");

  const [tweetsLimit, setTweetsLimit] = useState(2);

  const memoizedTweets = useMemo(
    () => tweets?.filter((tweet) => tweet?.deletedAt === null),
    [tweets],
  );

  return (
    <>
      <ScrollContainer
        className="blog__container__content__right__content"
        style={{
          marginTop: "-3rem",
        }}
      >
        {memoizedTweets?.slice(0, tweetsLimit)?.map((item) => (
          <div
            key={item._id}
            onLoad={() =>
              axios.put(`/analytics/tweet/${item._id}`, {
                type: "views",
              })
            }
            onClick={() =>
              axios.put(`/analytics/tweet/${item._id}`, {
                type: "clicks",
              })
            }
          >
            <Tweet key={item._id} id={item.link.split("/").pop()} />
          </div>
        ))}
      </ScrollContainer>
      {memoizedTweets?.length > tweetsLimit && (
        <div
          className="blog__container__content__right__button"
          onClick={() => setTweetsLimit(tweetsLimit + 2)}
        >
          {language.loadMore}
        </div>
      )}
    </>
  );
}
