import React from 'react'
import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Testimonials() {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
          slidesToSlide: 1// optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
  return (
    <div className='bg-[#ef8172] px-[15%] py-[7%]'>
<Carousel
  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay= {true}
  autoPlaySpeed={1500}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-90-px"
> 

  <div className='flex flex-col items-center justify-center text-center text-white'>
    <h2 className='font-montserrat font-bold text-4xl md:text-6xl pb-8'>I no longer sniff other dogs for love. I`ve found the hottest Corgi on TinDog. Woof</h2>
    <Image src='/images/dog-img.jpg' alt= 'dog profile' width='100' height = '100' className='rounded-full'/>
    <em>Pebbles, New York</em>
  </div>

  <div className='flex flex-col items-center justify-center text-center text-white'>
    <h2 className='font-montserrat font-bold text-4xl md:text-6xl pb-8'>My dog used to be lonely, but with TinDog`s help, the`ve found the love of their life.</h2>
    <Image src='/images/lady-img.jpg' alt= 'dog profile' width='100' height = '100' className='rounded-full'/>
    <em className='pb-4'>Beverly, Illinois</em>
  </div>
  
</Carousel>;
    </div>
  )
}

export default Testimonials