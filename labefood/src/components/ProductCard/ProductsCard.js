import React from "react"

const ProductsCard = (props) => {
    
    const { products, addFunction, RemoveProduct } = props
    return (
        <>
            {products && products.map ((product)=>{
                return(
                    <>
                    {/* <img src={product.photoUrl}/> */}
                    <p>{product.name}</p>
                    </>
                    
                )
            })
            
            }
                    
                
        </>

    )

}

export default ProductsCard