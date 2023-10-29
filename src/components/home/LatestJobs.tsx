import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'usehooks-ts';
import Carousel from '~/components/Carousel';
import { basePath } from '~/tempfix';
import { JobCard } from './components/JobCard';

export default function LatestJobs() {
  const { isPending, error, data } = useQuery({
    queryKey: ['jobsData'],
    queryFn: () => fetch(basePath + '/data/jobs.json').then((res) => res.json()),
  });

  const [perPage, setPerPage] = useState<number>(0);
  const isSmall = useMediaQuery('(min-width: 580px)');
  const isMedium = useMediaQuery('(min-width: 992px)');

  useEffect(() => {
    if (!isSmall) {
      setPerPage(1);
    } else if (!isMedium) {
      setPerPage(2);
    } else {
      setPerPage(3);
    }
  }, [isSmall, isMedium]);

  return (
    <section className={'latest-jobs py-5'}>
      <div className='container'>
        <h2 className='text-center'>Latest Jobs</h2>
        <Carousel perPage={perPage} arrowColor='#0E2152'>
          {data?.map((job: any) => {
            return <JobCard key={job.id} data={job} />;
          })}
        </Carousel>
      </div>
    </section>
  );
}
