import { memo } from "react";

function Section21({ data }) {
  const link = data?.link;

  if (isVideoLink(link)) {
    return (
      <video
        loading="lazy"
        src={link}
        style={{ width: "100%", height: "100vh", border: "none" }}
        muted
        autoPlay
        loop
      />
    );
  } else if (isYouTubeLink(link)) {
    const videoId = getYouTubeVideoId(link);
    return (
      <iframe
        loading="lazy"
        src={`https://www.youtube.com/embed/${videoId}`}
        style={{ width: "100%", height: "100vh", border: "none" }}
      />
    );
  } else {
    return (
      <iframe
        loading="lazy"
        src={link}
        style={{ width: "100%", height: "100vh", border: "none" }}
      />
    );
  }
}

function isVideoLink(link) {
  const videoExtensions = [
    "mp4",
    "webm",
    "ogg",
    "ogv",
    "avi",
    "mov",
    "wmv",
    "flv",
  ];
  return videoExtensions.some((extension) => link.includes(extension));
}

function isYouTubeLink(link) {
  return link.includes("youtube") || link.includes("youtu.be");
}

function getYouTubeVideoId(link) {
  return link.split("/").pop();
}

export default memo(Section21);
