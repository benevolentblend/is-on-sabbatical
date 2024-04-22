"use client";

import { type TripStatus } from "~/types";

interface GifProps {
  status: TripStatus;
}

const getGifUrlFromStatus = (status: TripStatus): string => {
  switch (status) {
    case "before":
      return "https://giphy.com/embed/l0HlBO7eyXzSZkJri";
    case "active":
      return "https://giphy.com/embed/QMHoU66sBXqqLqYvGO";
    case "after":
      return "https://giphy.com/embed/j0qSbeNFuzjhXKFVSP";
  }
};

const Gif: React.FC<GifProps> = ({ status }) => {
  const url = getGifUrlFromStatus(status);

  return (
    <iframe
      src={url}
      className="aspect-video w-full md:w-1/2"
      allowFullScreen
    ></iframe>
  );
};

export default Gif;
