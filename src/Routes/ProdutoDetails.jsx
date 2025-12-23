import React from 'react'
import { useFetchData } from '../hooks/useFetchData'
import { Link, useParams } from 'react-router-dom'

const ProdutoDetails = () => {
    const {idProduto} = useParams()
    console.log(idProduto)

    const {data: produto, loading, error} = useFetchData(`https://fakestoreapi.com/products/${idProduto}`)


  return (
    <>
    <Link to="/produtos" className='w-[100px] flex gap-2 items-center justify-center my-4 mx-12 p-2 bg-[#383838] rounded-lg hover:bg-[#383838]/50 cursor-pointer'>
        <i className='fa-solid fa-arrow-left' style={{fontSize: "15px"}}></i>
        Voltar
    </Link>
    <div className='w-full h-full flex items-center  my-5'>
        <div  className='w-full h-full flex items-center justify-center mt-20'>
            {produto ? (
                <div className="flex flex-col h-full">
                <div className='max-w-7xl flex'>
                    <div className='w-1/2 flex items-center justify-center'>
                    <img src={produto.image} alt="" className='w-[300px] self-center'/>
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
                <hr className='my-10'/>
                <div className='max-w-7xl flex flex-col gap-2'>
                    <h1 className='text-2xl'>Description:</h1>
                    <p className='text-lg'>{produto.description}</p>
                </div>
                </div>
            ) : ""}
        </div>
    </div>
    </>
  )
}

export default ProdutoDetails