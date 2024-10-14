import React from "react";
import Image from "next/image";
import Avatar from "@/app/_components/avatar";

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
      {/* Avatar */}
      <Avatar src={authorImageUrl} />

      {/* Author details */}
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
