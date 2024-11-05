import toast from "react-hot-toast"

//get all product from local stroage
  const getAllFavorites =()=>{
    const all=localStorage.getItem('favorites')
   
    if(all){
        const favorites=JSON.parse(all)
        return favorites
    }
    else{
        return []
    }

  }

  const addFavorite=(prodect)=>{
//get all previously save product data

     const favorites=getAllFavorites()
     const isExist=favorites.find(item=>item.product_id==prodect.product_id)
     if(isExist) return toast.error('prodect already exists!');
     favorites.push(prodect)
     localStorage.setItem('favorites',JSON.stringify(favorites))
     toast.success('Successfully added')
  }




//add a product to local stroge




// remove a product from stroage







export{addFavorite,getAllFavorites}