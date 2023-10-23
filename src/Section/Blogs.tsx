import React, { useEffect, useState } from 'react';
import { Carousel } from '@trendyol-js/react-carousel';
import '../styles/blogs.css'
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIos from '@mui/icons-material/ArrowBackIos';

interface properties {
  title: string;
  description: string;
  image: string;
  key: number;
}

const data = [
  {
    id: 1,
    title: 'Blog Title 1',
    description: 'Blog Description 1',
    image: 'https://picsum.photos/600',
  },
  {
    id: 2,
    title: 'Blog Title 2',
    description: 'Blog Description 2',
    image: 'https://picsum.photos/600',
  },
  {
    id: 3,
    title: 'Blog Title 3',
    description: 'Blog Description 3',
    image: 'https://picsum.photos/600',
  },
  {
    id: 4,
    title: 'Blog Title 4',
    description: 'Blog Description 4',
    image: 'https://picsum.photos/600',
  },
  {
    id: 5,
    title: 'Blog Title 5',
    description: 'Blog Description 5',
    image: 'https://picsum.photos/600',
  },
]

const LeftArrow = () => {
  return (
    <div className='Arrow' style={{paddingLeft: '3px'}}>
      <ArrowBackIos htmlColor='white'/>
    </div>
  )
}

const RightArrow = () => {
  return (
    <div className='Arrow'>
      <ArrowForwardIos htmlColor='white'/>
    </div>
  )
}

export default function Blogs() {

    return(
      <section id='Blogs' className='blogs panel'>
          <div>
            <div className='header'>
              <img src={'https://picsum.photos/200'} />
              <h2>Profile Name</h2>
            </div>
            <div className='crouselContainer'>
              <Carousel
              className='crouselStyle'
              show={3}
              infinite
              responsive={true}
              slide={1} swiping={true}
              leftArrow={<LeftArrow />}
              rightArrow={<RightArrow />}>
                {data.map((item) => {
                  return (
                    <BlogItem
                      key={item.id}
                      title={item.title}
                      description={item.description}
                      image={item.image}
                    />
                  );
                })}
              </Carousel>
            </div>
          </div>
      </section>
    )
  }

const BlogItem = (props: properties) => {

  const ClickHandler = (e: string) => {
    console.log(e);
  }
  return(
    <div className='itemContainer' >
      <img src={props.image} alt={props.image} />
      <div className='itemDetails'>
        <div className='itemTextContainer'>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </div>
        <div className='itemBtn'
        onClick={()=> {ClickHandler(props.title)}}>
          <p>Read More</p>
        </div>
      </div>
    </div>
  )
}