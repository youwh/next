import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'usehooks-ts';
import Carousel from '~/components/Carousel';
import { basePath } from '~/tempfix';
import { SectorCard } from './components/SectorCard';

export default function OurSectors() {
  const { isPending, error, data } = useQuery({
    queryKey: ['sectorsData'],
    queryFn: () => fetch(basePath + '/data/sectors.json').then((res) => res.json()),
  });

  const [perPage, setPerPage] = useState<number>(0);
  const matches = useMediaQuery('(min-width: 992px)');

  useEffect(() => {
    setPerPage(matches ? 2 : 1);
  }, [matches]);

  return (
    <section className='our-sectors py-5'>
      <div className='container'>
        <h2 className='text-center'>Our Sectors</h2>
        {perPage && (
          <Carousel perPage={perPage} arrowColor='#5C5C5C'>
            {data?.map((sector: any) => {
              return <SectorCard key={sector.id} data={sector} />;
            })}
          </Carousel>
        )}
      </div>
    </section>
  );
}
