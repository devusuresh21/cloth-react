import React from 'react';

const Caroussel = () => {
  const carouselImageStyle = {
    height: '700px', // Adjust carousel image height as needed
    objectFit: 'cover',
  };

 
const productImageStyle = {
    height: '100%',
    width: '100%',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  };
  
 
 
  

  const headingStyle = {
    textAlign: 'center',
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '2rem',
    marginTop: '2rem',
    fontFamily: "Dancing Script, serif",
  };

  const sectionStyle = {
    backgroundColor: '#f8f9fa',
    padding: '50px 0',
  };
  const aboutStyle = {
    fontFamily: "Dancing Script, serif",
    overflow: 'hidden',
    borderRadius: '8px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s',
  };

 

  const headStyle = {
    position: 'relative',
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#333',
    marginBottom: '20px',
    fontFamily: "Dancing Script, serif",
  };

  const lineStyle = {
    display: 'block',
    height: '4px',
    width: '50px',
    backgroundColor: '#ff7b54',
    marginTop: '8px',
  };

  const paragraphStyle = {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    color: '#555',
    fontFamily: "Dancing Script, serif",
  };

// Styles for the container and image
const imageContainerStyle = {
    overflow: 'hidden',
    borderRadius: '18px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s',
    height: '250px', // Set a consistent height for the container
    width: '100%', // Ensure container takes up available width
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
  
  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover', // Ensures image scales nicely
    transition: 'transform 0.3s ease',
  };
  const footerStyle = {
    backgroundColor: '#333', // Footer background color
    color: '#fff',
    padding: '20px 0',
    textAlign: 'center',
  };

  const iconContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '10px',
  };

  // Default color style for icons
  const iconStyle = {
    fontSize: '24px',
    color: '#fff', // Initial color for all icons
    transition: 'color 0.3s',
    cursor: 'pointer',
  };



  return (
    <div>
      {/* Carousel Section */}
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://marketplace.canva.com/EAFGKRRskMs/1/0/1600w/canva-brown-and-beige-minimalist-fashion-banner-lYcbGpUSVGo.jpg"
              className="d-block w-100"
              alt="First Slide"
              style={carouselImageStyle}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://i.ytimg.com/vi/U5Q3Du2W9a0/maxresdefault.jpg"
              className="d-block w-100"
              alt="Second Slide"
              style={carouselImageStyle}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.creativefabrica.com/wp-content/uploads/2021/04/26/Creative-Fashion-Sale-Banner-Graphics-11345601-1.jpg"
              className="d-block w-100"
              alt="Third Slide"
              style={carouselImageStyle}
            />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

{/* About us */}

<section className="about-us" style={sectionStyle}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 mb-5">
            <h2 style={headStyle}>
              About Us
              <span style={lineStyle}></span>
            </h2>
            <p style={paragraphStyle}>
  Discover the story behind our brand – a journey of quality, creativity, and style. Each piece is designed with care, made for those who value both trend and tradition. We believe that fashion should be timeless, connecting generations with pieces that tell a story. From sourcing high-quality materials to working with skilled artisans, our commitment is to bring you clothing that combines elegance and comfort.
  <br /><br />
  Our collections draw inspiration from both modern trends and classic designs, aiming to create a seamless blend that speaks to a variety of styles. Whether you're dressing for a special occasion or looking for everyday essentials, we have something to suit every wardrobe. Join us as we redefine modern fashion with a timeless touch, celebrating individuality, confidence, and the beauty of self-expression.
</p>

          </div>
          <div className="col-md-6">
            <div style={ aboutStyle}>
              <img
                src="https://tse3.mm.bing.net/th?id=OIP.pm8ESozbtyKUK_LuvClqiwHaFI&pid=Api&P=0&h=220"
                alt="Our Story"
                className="img-fluid"
                style={imageStyle}
                onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />
            </div>
          </div>
        </div>
      </div>
    </section>





{/* PRODUCTS */}


    <div className="container">
  <h2 style={headingStyle}>OUR PRODUCTS</h2>
  <div className="row mt-5 mb-5">
    <div className="col-md-3 col-sm-6 mb-4">
      <div
         className="card"
         style={imageContainerStyle}
         onMouseEnter={(e) => (e.currentTarget.firstChild.style.transform = 'scale(1.1)')}
         onMouseLeave={(e) => (e.currentTarget.firstChild.style.transform = 'scale(1)')}
       >
        <img
          src="https://www.fashiongonerogue.com/wp-content/uploads/2018/04/Gap-Spring-Summer-2018-Campaign67401.jpg"
          className="card-img-top"
          alt="Product 1"
          style={productImageStyle}
        />
      </div>
    </div>
    {/* Repeat similar blocks for other images */}
    <div className="col-md-3 col-sm-6 mb-4">
      <div
        className="card"
        style={imageContainerStyle}
        onMouseEnter={(e) => (e.currentTarget.firstChild.style.transform = 'scale(1.1)')}
        onMouseLeave={(e) => (e.currentTarget.firstChild.style.transform = 'scale(1)')}
      >
        <img
          src="https://i.pinimg.com/originals/b2/72/c5/b272c5128df0e8b914853622d7aae501.jpg"
          className="card-img-top"
          alt="Product 1"
          style={productImageStyle}
        />
      </div>
    </div>
    <div className="col-md-3 col-sm-6 mb-4">
      <div
       className="card"
       style={imageContainerStyle}
       onMouseEnter={(e) => (e.currentTarget.firstChild.style.transform = 'scale(1.1)')}
       onMouseLeave={(e) => (e.currentTarget.firstChild.style.transform = 'scale(1)')}
     >
        <img
          src="https://i.pinimg.com/originals/60/b0/a4/60b0a4ee7e032a6281444a82705a665c.jpg"
          className="card-img-top"
          alt="Product 1"
          style={productImageStyle}
        />
      </div>
    </div>
    <div className="col-md-3 col-sm-6 mb-4">
      <div
        className="card"
        style={imageContainerStyle}
        onMouseEnter={(e) => (e.currentTarget.firstChild.style.transform = 'scale(1.1)')}
        onMouseLeave={(e) => (e.currentTarget.firstChild.style.transform = 'scale(1)')}
      >
        <img
          src="https://i.pinimg.com/originals/d3/29/cf/d329cfb75d0cfef9da2f503dce539a12.jpg"
          className="card-img-top"
          alt="Product 1"
          style={productImageStyle}
        />
      </div>
    </div>
    
  </div>
</div>



{/* FOOTER */}

<footer style={footerStyle}>
      <p>Follow us on social media</p>
      <div style={iconContainerStyle}>
        <i
          className="fab fa-facebook-f"
          style={iconStyle}
          onMouseEnter={(e) => (e.target.style.color = '#3b5998')}
          onMouseLeave={(e) => (e.target.style.color = '#fff')}
        ></i>
        <i
          className="fab fa-twitter"
          style={iconStyle}
          onMouseEnter={(e) => (e.target.style.color = '#00acee')}
          onMouseLeave={(e) => (e.target.style.color = '#fff')}
        ></i>
        <i
          className="fab fa-whatsapp"
          style={iconStyle}
          onMouseEnter={(e) => (e.target.style.color = '#25D366')}
          onMouseLeave={(e) => (e.target.style.color = '#fff')}
        ></i>
        <i
          className="fab fa-instagram"
          style={iconStyle}
          onMouseEnter={(e) => (e.target.style.color = '#C13584')}
          onMouseLeave={(e) => (e.target.style.color = '#fff')}
        ></i>
      </div>
      <p style={{ marginTop: '10px', fontSize: '14px' }}>© 2024 Your Company. All rights reserved.</p>
    </footer>











 
    </div>
  );
};

export default Caroussel;
