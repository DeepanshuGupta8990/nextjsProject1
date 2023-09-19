import { UnsplashImage } from "@/modals/unsplash-image";
import Image from "next/image";
import styles from './TopicPage.module.css'
import {Alert} from '@/components/bootstrap';
import { Metadata } from "next";

interface PageProps {
  params: { topic: string };
  // searchParams: {[key: string]: string | string[] | undefined}
}

// export const revalidate = 0
export function generateMetadata({params:{topic}}:PageProps):Metadata{
   return {
    title: topic + " - Nextjs 13.4 image gallery"
   }
}

export const dynamicParams = false;

export function generateStaticParams(){
  return ["health","fitness","coding"].map((topic)=>({topic}))
}

export default async function Page({ params: { topic } }: PageProps) {
  const response = await fetch(
    `https://api.unsplash.com/photos/random?query=${topic}&count=30&client_id=${process.env.UNSPLASH_ACCESS_KEY}`
  );
  const images: UnsplashImage[] = await response.json();

  return (
    <div>
     <Alert>
        This page uses <strong>generateStaticProps</strong> to render and cache pages at build time, even though the url has a dynamic parameter. Pages that are not included in generateStaticParams will be fetched & rendered on first access and then <strong>cached subsequent requests</strong>(this can be disabled)
      </Alert>
      <h1>{topic}</h1>
      <div className={styles.container}>
      {images.map((image) => {
        return (
       <div   key={image.urls.raw}  style={{overflow:'hidden',width:'250px',height:'250px',margin:'0.25rem'}}> 
             <Image
              src={image.urls.raw}
              width={250}
              height={250}
              alt={image.description}
              //   className="rounded shadow mw-100 h-100"
              className={styles.image}
              />
       </div>
        );
    })}
    </div>
    </div>
  );
}
