import React, { useState } from 'react'
import { useContext } from "react";
import { getImgUrl } from '../Utilities/cineUtility'
import Star from "../assets/star.svg";
import Tag from "../assets/tag.svg";
import Rating from '../Components/Rating';
import MoviedetailsModal from '../Modals/MoviedetailsModal';
import { MovieContext } from '../Context/indexx';
const MovieCard = ( { movie } ) => {
 const [showModal, setShowModal] = useState(false);
 const [selectedMovie, setSelectedMovie] = useState(null)
 const {cartData, setCartData} = useContext(MovieContext);

 const handleAddToCart = (event, movie) => {
  event.stopPropagation();
  const found = cartData.find((item) =>{
    return item.id === movie.id
  })
  if(!found){
    setCartData([...cartData, movie])
  } else{
    alert(`The movie ${movie.title} has been added to the  cart alrready`);
  }
}
 const handleModalClose = () => {
  setSelectedMovie(null);
  setShowModal(false);
 }
 const handleMovieSelection = () => {
  setSelectedMovie(movie);
  setShowModal(true);
 }
  return (
    <>
    {
      showModal && 
      <MoviedetailsModal 
        movie={selectedMovie}
        onClose = { handleModalClose }
        onCartAdd={handleAddToCart}
      />
     }
    <figure id= { movie.id } className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">

    <a href="#" onClick={() => handleMovieSelection(movie)}>

            <img className="w-full object-cover" src={getImgUrl( movie.cover )} alt="" />
            <figcaption className="pt-4">
              <h3 className="text-left text-xl mb-1">{ movie.title }</h3>
              <p className="text-left text-[#575A6E] text-sm mb-2">
                { movie.genre }
              </p>
              <div className="flex items-center space-x-1 mb-5">
                <Rating value={movie.rating} />
              </div>
              <a
                className="bg-[#00d991] rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                href="#"
                onClick={(e) => handleAddToCart(e , movie)}
              >
                <img src={Tag} alt="" />
                <span> { movie.price } | Add to Cart</span>
              </a>
            </figcaption>
            </a>
          </figure>
    </>
  )
}

export default MovieCard
