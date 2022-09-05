import React from 'react';

import CategoryCard from '../components/CategoryCard';

const HomeScreen = () => {


  const categorie =  [{
    id : "1" , title : "homme ", desc : "mode pour homme ", image : "https://picsum.photos/id/100/300/200"  },
   { id : "2" , title : "femme ", desc : "mode pour femme ", image : "https://picsum.photos/id/101/300/200"},
    { id : "3" , title : "enfant ", desc : "mode pour enfant ", image : "https://picsum.photos/id/102/300/200"},
    { id : "4" , title : "baby  ", desc : "mode pour baby ", image : "https://picsum.photos/id/103/300/200"} ]
  
    const categoriElements = categorie.map(category => 
      <div className='d-flex '> <CategoryCard key={category.id} title={category.title} desc={category.desc} image={category.image}/>
          </div> 
          );

  
   

    return (
     <>
           <h1>Florian Wartelle</h1>
         <div > {categoriElements}
         
          </div>


     </>
    );
};

export default HomeScreen;