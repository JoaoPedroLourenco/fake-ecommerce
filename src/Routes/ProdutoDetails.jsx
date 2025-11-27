import React from 'react'
import { useFetchData } from '../hooks/useFetchData'
import { useParams } from 'react-router-dom'

const ProdutoDetails = () => {
    const {idProduto} = useParams()
    console.log(idProduto)

    const {data: produto, loading, error} = useFetchData(`https://fakestoreapi.com/products/${idProduto}`)


  return (
    <>
        <h1>Produto:</h1>
    <div className='w-full h-full flex items-center  my-5'>
        <div  className='w-full h-full flex items-center justify-center my-5'>
            {produto ? (
                <div className="flex h-full">
                <div className='w-1/2 flex items-center justify-center'>
                    <img src={produto.image} alt="" className='self-center'/>
                </div>
                <div className='w-1/2 h-full flex flex-col justify-center gap-4'>
                    <div className='flex gap-2'>
                        <p className='flex gap-2 items-center'><i className='fa-solid fa-star'></i>{produto.rating?.rate}</p>
                        <p>({produto.rating?.count})</p>
                    </div>
                    <h1 className='text-4xl'>{produto.title}</h1>
                    <h1 className='text-5xl font-bold'>${produto.price}</h1>
                </div>
                </div>
            ) : ""}
        </div>
    </div>
    </>
  )
}

export default ProdutoDetails