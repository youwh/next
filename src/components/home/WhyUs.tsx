import { basePath } from '~/tempfix';

export default function WhyUs() {
  return (
    <section className='why-us py-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 text-center '>
            <button className='vid'>
              <img
                src={basePath + '/assets/home/51bdf281c76d73d9d6a484fb91557515.jpg'}
                className='img-fluid image'
                alt='Image'
              />
              <img
                src={basePath + '/assets/carbon_play-filled.svg'}
                className='play-icon'
                height={84}
              />
            </button>
          </div>
          <div className='col-lg-6 info'>
            <h2>Why us?</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Tellus purus cras ornare placerat enim at ut.
              Lorem egestas aliquam dis dignissim. Mauris ultricies tortor netus purus proin. Amet
              cursus posuere velit odio nibh auctor. Id nulla vitae ipsum morbi tellus eget lacus
              aliquet faucibus. Varius donec arcu placerat augue eget.
            </p>
            <div className='text-center text-lg-start mt-4'>
              <button className='small-button'>More about us</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
