import './HomePage.css'
import hero from '../../image/hero-img.png'
import about from '../../image/about.png'
import i1 from '../../image/Picture1.jpg'
import i2 from '../../image/Picture2.jpg'
import i3 from '../../image/Picture3.jpg'
import i4 from '../../image/Picture4.jpg'
import i5 from '../../image/Picture5.jpg'
import i6 from '../../image/Picture6.jpg'
import { useEffect } from 'react'
export default function HomePage() {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    });
  }, [])
  const post = [
    {
      id: 1,
      image: i1,
      title:"Mobile Mechanisms",
      desc:"service for your car"
    },
    {
      id: 2,
      image: i2,
      title:"Cleaners",
      desc:"We clean, you rest"
    },
    {
      id: 3,
      image: i3,
      title:"Home Maintance",
      desc:"We fixe your ideas"
    },
    {
      id: 4,
      image: i4,
      title:"Barber",
      desc:"We take care of your hair"
    },
    {
      id: 5,
      image: i5,
      title:"Pets Care",
      desc:"We give your pets love"
    },
    {
      id: 6,
      image: i6,
      title:"Electronics",
      desc:"We fix your electronics"
    }
  ]
  const rate = [1, 1, 1]
  return (
    <>
      <section id="hero" class="hero d-flex align-items-center">

        <div class="container">
          <div class="row">
            <div class="col-lg-6 d-flex flex-column justify-content-center">
              <h1 data-aos="fade-up">We offer modern solutions to solve your problems</h1>
              <h2 data-aos="fade-up" data-aos-delay="400">We are the connecter between you and the best service provider</h2>
              <div data-aos="fade-up" data-aos-delay="600">
                <div class="text-center text-lg-start">
                  <a href="#about" class="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                    <span>Get Started</span>
                    <i class="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay="200">
              <img src={hero} class="img-fluid" alt="" />
            </div>
          </div>
        </div>

      </section>


      <section id="about" class="about">

        <div class="container" data-aos="fade-up">
          <div class="row gx-0">

            <div class="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
              <div class="content">
                <h3>Who We Are</h3>
                <h2>Our aim is to deliver the best services for the best price.</h2>
                <p>
                  The service provider can add a post describing their sitution and needs. In the addition the vistor can check the review of any service provider.
                </p>
                <div class="text-center text-lg-start">
                  <a href="#" class="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
                    <span>Read More</span>
                    <i class="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
              <img src={about} class="img-fluid" alt="" />
            </div>

          </div>
        </div>

      </section>


      <section id="portfolio" class="portfolio">

        <div class="container" data-aos="fade-up">

          <header class="section-header">
            <h2>Posts</h2>
            <p>Check our categories</p>
          </header>




          <div class="row gy-4 portfolio-container" data-aos="fade-up" data-aos-delay="200">

            {post.map((p) => (

              <div class="col-lg-4 col-md-6 portfolio-item filter-app mb-3">
                <div class="portfolio-wrap">
                  <img src={p.image} class="img-fluid" alt="" />
                  <div class="portfolio-info">
                    <h4>{p.title}</h4>
                    <p>{p.desc}</p>
                    {/* <div class="portfolio-links">
                      <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" class="portfokio-lightbox" title="Read more"><i class="bi bi-eye"></i></a>
                      <a href="portfolio-details.html" title="contact"><i class="bi bi-whatsapp" ></i></a>
                    </div> */}
                  </div>
                </div>
              </div>
            ))}
          </div>


        </div>
      </section>



      <section id="testimonials" class="testimonials">

        <div class="container" data-aos="fade-up">

          <header class="section-header">
            <h2>Testimonials</h2>
            <p>What our vistors say</p>
          </header>

          <div class="row gy-4 portfolio-container" data-aos="fade-up" data-aos-delay="200">
            <div class="swiper-wrapper row">

              {rate.map((r =>
                <div class="col-lg-4 col-md-6 portfolio-item filter-app mb-3 box" style={{ width: "35%" }}>
                  <div class="testimonial-item">
                    <div class="stars">
                      <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                    </div>
                    <p>
                      Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                    </p>
                    <div class="profile mt-auto">
                      {/* <img src="assets/img/testimonials/testimonials-1.jpg" class="testimonial-img" alt=""> */}
                      <h3>Saul Goodman</h3>
                      <h4>Ceo &amp; Founder</h4>
                    </div>
                  </div>
                </div>
              ))}




            </div>
            <div class="swiper-pagination"></div>
          </div>

        </div>

      </section>






    </>
  );
}