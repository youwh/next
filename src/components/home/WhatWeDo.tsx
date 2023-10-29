import { basePath } from '~/tempfix';

export default function WhatWeDo() {
  return (
    <section className='what-we-do py-5'>
      <div className='container'>
        <div className='row flex-column-reverse flex-lg-row'>
          <div className='col-lg-6 info'>
            <h2>What we do?</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Tellus purus cras ornare placerat enim at ut.
              Lorem egestas aliquam dis dignissim. Mauris ultricies tortor netus purus proin. Amet
              cursus posuere velit odio nibh auctor. Id nulla vitae ipsum morbi tellus eget lacus
              aliquet faucibus. Varius donec arcu placerat augue eget.
            </p>
            <div className='text-center text-lg-start mt-4'>
              <button className='small-button'>View our services</button>
            </div>
          </div>
          <div className='col-lg-6 text-center'>
            <img
              src={basePath + '/assets/home/ac2de4cd9dcb0714c66d81e5c526e78e.jpg'}
              className='img-fluid'
              alt='Image'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
