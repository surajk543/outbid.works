"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * Thumbnails are built from the video id without checking they exist, so a
 * deleted, private, or mistyped video answers 404 and the browser draws a
 * broken-image icon. Fall back to the provider placeholder instead.
 */
export function VideoThumbnail({
  src,
  label,
}: {
  src: string | null;
  label: string;
}) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <span className="flex h-full items-center justify-center bg-accent-soft text-xs font-semibold text-accent">
        {label}
      </span>
    );
  }

  return (
    <Image
      src={src}
      alt=""
      fill
      sizes="128px"
      className="object-cover"
      onError={() => setFailed(true)}
    />
  );
}
