import { useState } from 'react';
import styles from '../Image/Image.module.css';

export interface IPropsImage {
  url: string;
  title: string;
}

export const Image = ({ url, title }: IPropsImage) => {
  const [toggle, setToggle] = useState<boolean>(false);

  const onClickAdd = () => {
    setToggle(!toggle);
  };

  return (
    <div style={{ maxWidth: '150px', position: 'relative' }}>
      {toggle ? (
        <img
          className={styles.imageScale}
          src={url}
          alt=''
          onClick={onClickAdd}
        />
      ) : (
        <img className={styles.image} src={url} alt='' onClick={onClickAdd} />
      )}
      <p>{title}</p>
    </div>
  );
};
