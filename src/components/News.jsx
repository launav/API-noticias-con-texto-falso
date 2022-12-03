import React from 'react'
import { useCounter } from '../hooks/useCounter'
import { useFetch } from '../hooks/useFetch'
import { New } from './New'

const News = () => {

    const { counter, handleNext, handlePrevious } = useCounter()//conectara con el complemento counter para los botones que pasan las noticias
    const { data } = useFetch(`https://jsonplaceholder.typicode.com/posts/${counter}`)


    return (
        <div>
            
            <New data={data} />


            <div className='button'>

                <button
                    onClick={handlePrevious}
                    disabled={counter <= 1}>
                    Anterior
                </button>
                <p>{counter}</p>
                <button
                    onClick={handleNext}>
                    Siguiente
                </button>

            </div>
        </div>
    )
}

export default News
