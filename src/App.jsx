import React from 'react'
import Button from './components/Button'
import Productcard from './components/Productcard';
import laptop from "./assets/labtop.jfif";
import phone from "./assets/phone.jfif";
import headphones from "./assets/download.jfif";

export default function App() {
  const products = [
    { id: 1, name: "Laptop", description: "Good for work", image: laptop },
    { id: 2, name: "Phone", description: "Nice camera", image: phone },
    { id: 3, name: "Headphones", description: "Great sound", image: headphones },
    { id: 4, name: "Laptop", description: "Good for work", image: laptop },
    { id: 5, name: "Phone", description: "Nice camera", image: phone },
    { id: 6, name: "Headphones", description: "Great sound", image: headphones },
    { id: 7, name: "Laptop", description: "Good for work", image: laptop },
    { id: 8, name: "Phone", description: "Nice camera", image: phone },
    { id: 9, name: "Headphones", description: "Great sound", image: headphones },
  ];
  return (
    <>

     <div className='min-h-screen bg-gray-100 flex flex-wrap justify-center gap-6 p-6'>
     {products.map((product)=>(
      <Productcard 
      key={product.id}
      name={product.name}
      description={product.description}
      image={product.image}
      />
     ))}
       </div>
      <h1>welcome</h1>
      
    </>
  )
}
