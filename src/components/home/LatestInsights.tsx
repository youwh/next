import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'usehooks-ts';
import { basePath } from '~/tempfix';
import { InsightCard } from './components/InsightCard';

export default function LatestInsights() {
  const { isPending, error, data } = useQuery({
    queryKey: ['insightsData'],
    queryFn: () =>
      fetch(basePath + '/data/insights.json')
        .then((res) => res.json())
        .then((res) => {
          setModeData(res);
          return res;
        }),
  });

  const [columCount, setColumnCount] = useState(0);
  const isSmall = useMediaQuery('(min-width: 765px)');
  const isMedium = useMediaQuery('(min-width: 992px)');
  const [modData, setModeData] = useState<unknown[]>([]);

  useEffect(() => {
    const newData = data?.slice();
    const moreData = { id: -1 };
    if (!isSmall) {
      setColumnCount(1);
      newData?.push(moreData);
    } else if (!isMedium) {
      setColumnCount(2);
      newData?.splice(1, 0, moreData);
    } else {
      setColumnCount(3);
      newData?.splice(1, 0, moreData);
    }
    console.log(newData);
    // adjust viewmore position
    setModeData(newData || []);
  }, [isSmall, isMedium, data]);

  return (
    <section className='latest-insights py-5'>
      <div className='container'>
        <div className='list-container' style={{ columnCount: columCount }}>
          <div className='description'>
            <h2>Latest insights</h2>
            <span className='content'>
              Lorem ipsum dolor sit amet consectetur. A aliquam pellentesque malesuada venenatis
              consectetur egestas dui.
            </span>
          </div>
          {modData.map((insight: any, idx) => {
            if (insight.id === -1) {
              return <ViewMore key={-1} />;
            }
            return (
              <div key={insight.id} style={{ paddingTop: columCount === 3 && idx === 2 ? 80 : 0 }}>
                <InsightCard data={insight} />
              </div>
            );
          })}
          {/* <ViewMore /> */}
        </div>
      </div>
    </section>
  );
}

const ViewMore = () => {
  return (
    <div className='view-more'>
      <a className='small-button'>View our blogs</a>
    </div>
  );
};
