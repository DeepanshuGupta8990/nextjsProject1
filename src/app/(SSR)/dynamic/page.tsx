import { UnsplashImage } from "@/modals/unsplash-image";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Alert } from "@/components/bootstrap";

export const metadata: Metadata = {
  title: "Dynamic Page",
};

// export const revalidate = 0

export default async function Page() {
  const response = await fetch(
    "https://api.unsplash.com/photos/random?client_id=" +
      process.env.UNSPLASH_ACCESS_KEY,
      {
        // cache:"no-cache"
         next:{revalidate:0}
      }
  );
  const image: UnsplashImage = await response.json();
  // console.log('Image value',image.urls)
  const width = Math.min(500, image.width);
  const height = (width / image.width) * image.height;

  return (
    <div className="d-flex flex-column align-items-center">
      <Alert>This page Fetches data dynamically . Every time you refresh the page, you get a new image from the unspalsh API</Alert>
      <Image
        src={image.urls.raw}
        width={width}
        height={height}
        alt={image.description}
        className="rounded shadow mw-100 h-100"
      />
      by{" "}
      <Link href={"/users/" + image.user.username}>{image.user.username}</Link>
    </div>
  );
}
