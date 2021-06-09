import React from 'react'
import './cardList.scss'
import { useSelector } from 'react-redux';
import Card from './card';

const CardList = () => {
    const products = useSelector((state) => state);

    return (
        <div className="container-cards">
            <Card />
        </div>
    )
}

export default CardList
