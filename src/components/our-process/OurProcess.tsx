import img1 from '../../assets/img/1.png';
import img2 from '../../assets/img/2.png';
import img3 from '../../assets/img/3.png';

import './OurProcess.scss'

export const OurProcess = () => {

  return (
    <div className="Title__lg__and__description process-page">
      <div className="container-process">
        <div className="title-page">
          <div className="title">
            <h1>
              <span>
                <strong>
                  Our 
                </strong>
              </span>
              <span>
                {' PROCESS'}
              </span>
            </h1>
          </div>
          <h2>Lo que hacemos</h2>
        </div>
        <div>
          <div className='wrapper-map'>
          <img className='img1' src={img1} alt="img1" />
          <img className='img2' src={img2} alt="img2" />
          </div>
          <img className='img3' src={img3} alt="img3" />
        </div>
      </div>
    </div>
  );
}