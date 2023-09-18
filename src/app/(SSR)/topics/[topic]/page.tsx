import { UnsplashImage } from "@/modals/unsplash-image";
import Image from "next/image";
import styles from './TopicPage.module.css'

interface PageProps {
  params: { topic: string };
  // searchParams: {[key: string]: string | string[] | undefined}
}

// export const revalidate = 0

export default async function Page({ params: { topic } }: PageProps) {
  const response = await fetch(
    `https://api.unsplash.com/photos/random?query=${topic}&count=30&client_id=${process.env.UNSPLASH_ACCESS_KEY}`
  );
  const images: UnsplashImage[] = await response.json();

  return (
    <div>
      <h1>{topic}</h1>
      <div className={styles.container}>
      {images.map((image) => {
        return (
       <div style={{overflow:'hidden',width:'250px',height:'250px',margin:'0.25rem'}}> 
             <Image
              src={image.urls.raw}
              width={250}
              height={250}
              alt={image.description}
              //   className="rounded shadow mw-100 h-100"
              className={styles.image}
              key={image.urls.raw} 
              />
       </div>
        );
    })}
    </div>
    </div>
  );
}
