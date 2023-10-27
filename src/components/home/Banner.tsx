import { useEffect, useState } from 'react';
import style from './banner.module.css';
import { Particles } from './components/particles';

export default function Banner() {
  const [isMedium, setIsMedium] = useState(false);

  useEffect(() => {
    const onChange = (event: MediaQueryListEvent) => {
      setIsMedium(event.matches);
    };

    const query = matchMedia('(min-width: 992px)');
    query.addEventListener('change', onChange);

    const initialQuery = window.matchMedia('(min-width: 992px)');
    setIsMedium(initialQuery.matches);

    return () => {
      query.removeEventListener('change', onChange);
    };
  }, []);

  return (
    <section className={style.banner}>
      {isMedium && (
        <div className={style['banner-bg']}>
          <Particles />
        </div>
      )}
      {!isMedium && (
        <img
          src='/assets/home/9e7463bd63b976b8b0101bf9fc4e0467.jpg'
          alt='banner'
          className={style['background-image']}
        />
      )}
      <div className='container'>
        <div className={`row ${style.content}`}>
          <div className='col-lg-6'>
            <div style={{ fontWeight: 400, marginBottom: 60 }}>
              Software Recruitment Specialists
            </div>
            <h1 className={style.title}>Elevate your career</h1>
            <div className={style['search-input']}>
              <input className={style.input} />
              <button className={style.button}>Search jobs</button>
            </div>
          </div>
          <div className={`col-lg-6 text-end ${style['image-container']}`}>
            {isMedium && (
              <img
                src='/assets/home/9e7463bd63b976b8b0101bf9fc4e0467.jpg'
                alt='banner'
                className={`img-fluid ${style.image}`}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
