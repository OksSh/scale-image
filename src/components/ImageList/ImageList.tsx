import { useEffect, useState } from 'react';
import { Image } from '../Image/Image';
import styles from '../ImageList/ImageList.module.css';

export interface IPropsImage {
  url: string;
  title: string;
  id: string;
}

export const ImageList = () => {
  const url = 'https://jsonplaceholder.typicode.com/photos';
  const [imageList, setImageList] = useState<IPropsImage[]>([]);

  async function getImageList(url: string) {
    const response = await fetch(url);
    const data = await response.json();
    setImageList(data);
  }

  useEffect(() => {
    getImageList(url);
  });

  return (
    <div className={styles.wrapper}>
      {imageList.map((item: IPropsImage) => {
        return <Image title={item.title} url={item.url} key={item.id} />;
      })}
    </div>
  );
};
