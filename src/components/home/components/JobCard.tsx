import Image from 'next/image';
import PythonSvg from '~/assets/svgs/python.svg';
import style from './jobcard.module.css';

export const JobCard = ({ data }: any) => {
  return (
    <div className={`${style.card} ${style['type' + data.type]}`}>
      <div className={style.skills}>
        <span>
          <Image src={PythonSvg} alt={'python'} width={18} height={18} />
          Python
        </span>
      </div>
      <div className={style.title}>{data.title}</div>
      <div>
        <div className={style.info}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            className='bi bi-geo-alt-fill'
            viewBox='0 0 16 16'
          >
            <path d='M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z' />
          </svg>
          {data.location}
        </div>
        <div className={style.info}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            className='bi bi-cash'
            viewBox='0 0 16 16'
          >
            <path d='M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z' />
            <path d='M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2H3z' />
          </svg>
          {data.salary}
        </div>
      </div>
      <div>{data.description}</div>
      <div>
        <a href='#' className={style.button} role='button'>
          View this job
        </a>
      </div>
      <div className={style['date-posted']}>{data.datePosted}</div>
    </div>
  );
};
