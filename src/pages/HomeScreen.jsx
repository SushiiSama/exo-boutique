import React from 'react';

import CategoryCard from '../components/CategoryCard';

const HomeScreen = () => {

  
   

    return (
     <>
           <h1>Florian Wartelle</h1>
         <div className='d-flex'> <CategoryCard title={"homme"} desc={"la mode pour homme"} image={"https://picsum.photos/id/100/300/200"}/>
          <CategoryCard title={"femme"} desc={"la mode pour femme"} image={"https://picsum.photos/id/101/300/200"}/>
          </div>


     </>
    );
};

export default HomeScreen;