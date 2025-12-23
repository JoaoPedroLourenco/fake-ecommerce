import React from 'react'
import { Link } from 'react-router-dom'

const CardProduto = ({produto, addToCart}) => {
  return (
    <div>
        <div className="w-[300px] h-[500px] flex flex-col gap-2.5 bg-[#383838] p-4 rounded-lg shadow-lg hover:scale-103 duration-200">
              <div className="w-full h-[250px] flex items-center justify-center">
                <img src={produto.image} className="max-w-[120px]" />
              </div>
              <p>{produto.category}</p>
              <p>{produto.title}</p>
              <p>${produto.price.toFixed(2)}</p>
              <button onClick={() => addToCart(produto)}>
                Adicionar ao carrinho
              </button>
              <Link to={`/produtos/${produto.id}`}>Ver detalhes</Link>
            </div>
    </div>
  )
}

export default CardProduto