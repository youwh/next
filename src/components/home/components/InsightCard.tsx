import { basePath } from '~/tempfix';
import { ArrowSvg2 } from '~/ui/svgs/arrow2';
import style from './insightcard.module.css';

export const InsightCard = ({ data }: any) => {
  return (
    <div className={`${style.card}`}>
      <div className={style.top}>
        <img className={style.image} src={basePath + data.image} />
        <div className={`${style.tag} ${style['type' + data.type]}`}>{data.category}</div>
      </div>
      <div className={style.content}>
        <div>{data.date}</div>
        <div>{data.title}</div>
        <div>{data.description}</div>
        <div className={style.author}>
          <img src={basePath + data.author.avatar} alt={`${data.author.name}`} />
          <span>{data.author.name}</span>
        </div>
      </div>
      <div className={style.arrow}>
        <a>
          <ArrowSvg2 color={undefined} />
        </a>
      </div>
    </div>
  );
};
