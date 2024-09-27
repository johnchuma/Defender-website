import { useEffect, useRef, useState } from "react";

export default function VideoPlayer() {
  return (
    <div >
    <iframe
    className="rounded-lg"
        width="600"
        height="428"
        src="https://www.youtube.com/embed/d_pV8TGKfMc?autoplay=1"
        title="How a Mechanical Watch Works | Explained in 5 Minutes"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    ></iframe>
  </div>
  );
}

