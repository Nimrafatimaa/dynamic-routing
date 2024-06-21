import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Mainnav from './Mainnav';
import CardDetails from './CardDetails';

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const dummyData = [
      {
        id: 1,
        title: 'Card 1', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, facere perspiciatis. Molestias, at nostrum. Consectetur!',
        image: ' https://media.istockphoto.com/id/1502883170/photo/redhead-caucasian-teenage-girl-using-mobile-phone-while-sitting-on-the-sofa.webp?b=1&s=612x612&w=0&k=20&c=mOWMUH1a9E-VBsu2AOKZXhIZFf65yB5mVpKPXT6Zre4='
      },
      {
        id: 2,
        title: 'Card 2', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, facere perspiciatis. Molestias, at nostrum. Consectetur!',
        image: ' https://cdn.pixabay.com/photo/2024/02/04/18/27/woman-8552807_640.jpg'
      },
      {
        id: 3,
        title: 'Card 3', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, facere perspiciatis. Molestias, at nostrum. Consectetur!',
        image: 'https://cdn.pixabay.com/photo/2022/07/06/12/58/woman-7305089_960_720.jpg'
      },
      {
        id: 4,
        title: 'Card 4', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, facere perspiciatis. Molestias, at nostrum. Consectetur!',
        image: ' https://cdn.pixabay.com/photo/2015/07/09/00/29/woman-837156_640.jpg'
      },
      {
        id: 5,
        title: 'Card 5', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, facere perspiciatis. Molestias, at nostrum. Consectetur!',
        image: 'https://cdn.pixabay.com/photo/2019/02/24/10/53/woman-4017330_640.jpg'
      },
      {
        id: 6,
        title: 'Card 6', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, facere perspiciatis. Molestias, at nostrum. Consectetur!',
        image: ' https://cdn.pixabay.com/photo/2017/08/09/13/35/model-2614569_640.jpg'
      },
      {
        id: 7,
        title: 'Card 7', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, facere perspiciatis. Molestias, at nostrum. Consectetur!',
        image: 'https://cdn.pixabay.com/photo/2016/11/14/04/57/woman-1822656_640.jpg'
      },
      {
        id: 8,
        title: 'Card 8', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, facere perspiciatis. Molestias, at nostrum. Consectetur!',
        image: 'https://cdn.pixabay.com/photo/2022/09/28/21/07/woman-7486045_640.jpg'
      },
      {
        id: 9,
        title: 'Card 9', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, facere perspiciatis. Molestias, at nostrum. Consectetur!',
        image: 'https://cdn.pixabay.com/photo/2021/03/30/08/56/woman-6136425_640.jpg'
      }
    ];
    setData(dummyData);
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Mainnav data={data} />} />
          <Route path="/card/:id" element={<CardDetails data={data} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;