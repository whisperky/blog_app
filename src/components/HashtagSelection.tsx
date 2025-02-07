"use client";

import HashtagButton from "./HashtagButton";

interface HashtagSectionProps {
  hashtags: string[];
}

export default function HashtagSection({ hashtags }: HashtagSectionProps) {
  return (
    <div className="flex flex-wrap mb-6">
      {hashtags.map((tag) => (
        <HashtagButton
          key={tag}
          tag={tag}
          onClick={() => {}}
          isSelected={false}
        />
      ))}
    </div>
  );
}
