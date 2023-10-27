import style from './sectorcard.module.css';

export const SectorCard = ({ data }: any) => {
  return (
    <div className={style.card}>
      <img className={style.image} src={data.img}></img>
      <div className={style.content}>
        <span className={style.title}>{data.title}</span>
        <a className={`big-button ${style.button}`}>View more</a>
      </div>
    </div>
  );
};
