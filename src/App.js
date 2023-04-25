import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import img1 from "./Components/Assets/Images/handimg.jpg";
import building from "./Components/Assets/Images/building.jpeg";
import facebook from "./Components/Assets/Images/facebook.webp";
import utube from "./Components/Assets/Images/utube.webp";
import linkdin from "./Components/Assets/Images/linkdin.webp";
import img4 from "./Components/Assets/Images/4.png";
import whatsppp from "./Components/Assets/Images/whatsppp.png";
import hand from "./Components/Assets/Images/hand.png";
import girl from "./Components/Assets/Images/girl.jpeg";
import cloud from "./Components/Assets/Images/cloud.jpeg";
import factory from "./Components/Assets/Images/factory.jpg";
import inventory from "./Components/Assets/Images/inventory.jpg";


function App() {


  return (
    <>
      <video autoplay loop className="video-background" muted plays-inline>
        <source src="https://video-private-assets.canva.com/VAFdtiMtEe0/v/8b0b0c1fbd.mp4?exp=1682503320000&cf-ck=BcdkFHoFOGhccMOyRH--xAYk7hx1mdfy9TL8bOcKNT8&cf-sig=jb-EBmDXhspZcyi-yeDiHCk2MPJhY_MLQ2wi4TbXNs0&cf-sig-kid=CO7cCjZ_YiI=&sig=Pff2NSunM1_ZniC8IpUWo5cdP0jBF4t0gonbEJpZZf4&sig-kid=GzFgFdhXD-Q=" />
      </video>
      <div>
        <div className='h-200vh'>
          {/* <div className='video'>
            <video className='w-100 h-100' controls autoplay>
              <source src="https://video-private-assets.canva.com/VAFdtiMtEe0/v/8b0b0c1fbd.mp4?exp=1682503320000&cf-ck=BcdkFHoFOGhccMOyRH--xAYk7hx1mdfy9TL8bOcKNT8&cf-sig=jb-EBmDXhspZcyi-yeDiHCk2MPJhY_MLQ2wi4TbXNs0&cf-sig-kid=CO7cCjZ_YiI=&sig=Pff2NSunM1_ZniC8IpUWo5cdP0jBF4t0gonbEJpZZf4&sig-kid=GzFgFdhXD-Q=" />
            </video>
          </div> */}
          <img src={img1} className='img1' />
          <div className="w-580 heading1">
            <p className='norwester my-5'>Smartb Solutions</p>
            <p className='small-heading my-5'>You Focus on The Business,</p>
            <p className='small-heading my-5'>
              We'll Focus On The Technology</p>
            <div className='line1 my-5'></div>
            <div className='d-inline-flex w-100'>
              <img src={facebook} className='logoSize' alt="" />
              <img src={utube} className='logoSize' alt="" />
              <img src={linkdin} className='logoSize' alt="" />
              <img src={img4} className='logoSize' alt="" />
              <img src={whatsppp} className='logoSize' alt="" />
            </div>
          </div>
        </div>
        {/* <div className='video1'>
            <video className='w-100 h-100' controls autoplay>
              <source src="https://video-private-assets.canva.com/VAFdtiMtEe0/v/8b0b0c1fbd.mp4?exp=1682503320000&cf-ck=BcdkFHoFOGhccMOyRH--xAYk7hx1mdfy9TL8bOcKNT8&cf-sig=jb-EBmDXhspZcyi-yeDiHCk2MPJhY_MLQ2wi4TbXNs0&cf-sig-kid=CO7cCjZ_YiI=&sig=Pff2NSunM1_ZniC8IpUWo5cdP0jBF4t0gonbEJpZZf4&sig-kid=GzFgFdhXD-Q=" />
            </video>
          </div> */}
        <div className=''>
          <div className='portion2 row '>
            <div className='col-11 height-90 ms-auto row'>
              <div className='col-4 flex-column position-message'>
                <p className='text-white futura mb-5'>Message</p>
                <p className='fs-32 text-white my-5 fw-bolder'>Digitize & Grow Your Business Today</p>
                <p className='norwester text-white fs-24'>Amazon was the first company to create a 1-click ordering.
                  How about you? What are you doing to automate your business today?</p>
                <div className='text-canter w-100 text-center mt-5'>
                  <button className='btn-theme btn-style'>MOre --></button>
                </div>
              </div>
              <div className='col-6 ms-auto'>
                <img src={hand} className='message-img w-100' alt="" />
              </div>
            </div>
          </div>
          <div className='portion3 row '>
            <div className='col-11 height-90 row me-auto'>
              <div className='col-6 me-auto'>
                <img src={girl} className='about-img ' alt="" />
              </div>
              <div className='col-4 ms-auto flex-column'>
                <p className='text-white futura my-5'>About</p>
                <p className='fs-32 text-white mb-3 fw-bolder my-5'>We aim to help all our customers become smarter</p>
                <p className='norwester text-white fs-24 my-5'>SmartB is grown from a team of Technology Fanatics who are passionately crazy about helping our customers grow. </p>
                <div className='text-canter w-100 text-center mt-5'>
                  <button className='btn-theme btn-style'>MOre --></button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='portion4 row'>
          <div className='col-11 height-90 row ms-auto'>
            <div className='col-4 flex-column'>
              <p className='text-white futura my-5'>Service</p>
              <p className='fs-32 text-white mb-3 fw-bolder my-5'>We Provide our best services to you</p>
              <p className='norwester text-white fs-24 my-5'>Digital Transformation is a Journey. Our aim is to move SMEs towards this national goals. </p>
              <div className='text-canter w-100 text-center mt-5'>
                <button className='btn-theme btn-style'>MOre --></button>
              </div>
            </div>
            <div className='col-6 ms-auto'>
              <img src={building} className='building-img' alt="" />
            </div>
          </div>
          <div className='col-10 row mx-auto'>
            <div className='col-md-4 cloud'>
              <img src={cloud} className='mx-auto' alt="" />
            </div>
            <div className='col-md-4 factory'>
              <img src={factory} className='mx-auto' alt="" />
            </div>
            <div className='col-md-4 img-container'>
              <p className='centered'>centered</p>
              <img src={inventory} className='mx-auto inventory' alt="" />
            </div>
          </div>
        </div>
        <div className='portion5 row'>
          <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="..." className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="..." className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="..." className="d-block w-100" alt="..." />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
