import { CDN_URL } from "@/utils/constant";

const imageLoader = ({ src, width, quality }: any) => {
  return `${CDN_URL}/${src}?w=${width}&q=${quality || 75}`;
};

export default imageLoader;
