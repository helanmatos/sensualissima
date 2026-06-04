import NextImage, { type ImageProps } from "next/image";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Img({ src, ...props }: ImageProps) {
  const resolved =
    typeof src === "string" && src.startsWith("/")
      ? `${BASE}${src}`
      : src;
  return <NextImage src={resolved} {...props} />;
}
