import React from "react";
import Image from "next/image";

interface ArticleAuthorProps {
  authorName: string;
  date: string;
  readTime: string;
  authorImageUrl: string;
}

const ArticleAuthor: React.FC<ArticleAuthorProps> = ({
  authorName,
  date,
  readTime,
  authorImageUrl,
}) => {
  return (
    <div className="flex gap-x-4">
      <div className="h-12 w-12 overflow-hidden rounded-full bg-center">
        <Image
          src={authorImageUrl}
          objectPosition="center bottom"
          alt="Author Avatar"
          height={50}
          width={50}
          className="h-full w-full object-cover"
        />
      </div>
      <div>
        <p className="text-lg font-semibold">{authorName}</p>
        <div className="inline-flex gap-x-4 text-xs text-mutedText">
          <p>{date}</p>
          <p>|</p>
          <div className="inline-flex gap-x-1">
            <Image
              src="/images/icons/clock.svg"
              alt="Article Read Time icon"
              width={12}
              height={12}
            />
            <p>{readTime}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleAuthor;
