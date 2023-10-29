import { basePath } from '~/tempfix';

export default function Partners() {
  return (
    <section className='partners py-5'>
      <div className='mb-3'>Who we work with</div>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-2 col-md-4 col-6'>
            <img
              src={basePath + '/assets/home/partners/microsoft.png'}
              alt={'microsoft'}
              className='img-fluid'
            />
          </div>
          <div className='col-lg-2 col-md-4 col-6'>
            <img
              src={basePath + '/assets/home/partners/oracle.svg'}
              alt={'oracle'}
              className='img-fluid'
            />
          </div>
          <div className='col-lg-2 col-md-4 col-6'>
            <img
              src={basePath + '/assets/home/partners/atlassian.svg'}
              alt={'atlassian'}
              className='img-fluid'
            />
          </div>
          <div className='col-lg-2 col-md-4 col-6'>
            <img
              src={basePath + '/assets/home/partners/cloudflare.png'}
              alt={'cloudflare'}
              className='img-fluid'
            />
          </div>
          <div className='col-lg-2 col-md-4 col-6'>
            <img
              src={basePath + '/assets/home/partners/vmware.png'}
              alt={'vmware'}
              className='img-fluid'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
