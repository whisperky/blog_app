"use client";

interface HashtagButtonProps {
  tag: string;
  isSelected?: boolean;
  onClick: (tag: string) => void;
}

export default function HashtagButton({
  tag,
  isSelected = false,
  onClick,
}: HashtagButtonProps) {
  return (
    <button
      onClick={() => onClick(tag)}
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2 ${
        isSelected
          ? "bg-indigo-100 text-indigo-800"
          : "bg-gray-100 text-gray-800 hover:bg-gray-200"
      }`}
    >
      #{tag}
    </button>
  );
}
