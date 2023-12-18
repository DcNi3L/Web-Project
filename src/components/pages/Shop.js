import React, { useState } from 'react'
import { FaEye } from "react-icons/fa";
import { IoHeart, IoClose } from "react-icons/io5";

//css
import './Shop.css';


const Shop = ({shop, Filter, AllProd, AddToCart}) => {
    const[showDetail, setShowDetail] = useState(false)
    const[detail, setDetail] = useState([])

    const detailPage = (p) =>
    {
        const detailData = ([{p}])
        const prodData = detailData[0]['p']

        setDetail(prodData)
        setShowDetail(true)
    }

    const closeDetail = () =>
    {
        setShowDetail(false)
    }

    return (
        <>
            {
                showDetail ?
                <>
                    <div className='product-detail'>
                        <button className='close-btn' onClick={closeDetail}><IoClose /></button>
                        <div className='container'>
                            <div className='img-box'>
                                <img src={detail.img} alt=''></img>
                            </div>

                            <div className='info'>
                                <h4>{detail.cat}</h4>
                                <h2>{detail.name}</h2>
                                <p>{detail.description}</p>
                                <h3>{detail.price}₸</h3>
                                <button onClick={() => AddToCart (detail)}>Add To Cart</button>
                            </div>
                        </div>
                    </div>
                </>
                : null
            }

            <main className='shop'>
                <h2>shop</h2>
                <p>Home . shop</p>

                <div className='container'>
                    <section className='left-box'>
                        <div className='category'>
                            <div className='header'>
                                <h3>All categories</h3>
                            </div>

                            <div className='box'>
                                <ul>
                                    <li onClick={() => AllProd ()}>all</li>
                                    <li onClick={() => Filter ("tv")}>tv</li>
                                    <li onClick={() => Filter ("laptop")}>laptop</li>
                                    <li onClick={() => Filter ("watch")}>watch</li>
                                    <li onClick={() => Filter ("speaker")}>speaker</li>
                                    <li onClick={() => Filter ("electronics")}>electronics</li>
                                    <li onClick={() => Filter ("headphone")}>headphone</li>
                                    <li onClick={() => Filter ("phone")}>phone</li>
                                </ul>
                            </div>
                        </div>

                        <div className='banner'>
                            <div className='img-box'>
                                <img src='images/shop_left.avif' alt=''></img>
                            </div>
                        </div>
                    </section>

                    <section className='right-box'>
                        <div className='banner'>
                            <div className='img-box'>
                                <img src='images/shop_top.webp' alt=''></img>
                            </div>
                        </div>

                        <div className='product-box'>
                            <h2>Shop Product</h2>

                            <div className='product-container'>

                                {
                                    shop.map((current) =>
                                    {
                                        return(
                                            <>
                                                <div className='box'>
                                                    <div className='img-box'>
                                                        <img src={current.img} alt=''></img>
                                                        <div className='icon'>
                                                            <div className='icon-box' onClick={() => detailPage (current)}>
                                                                <FaEye />
                                                            </div>
                                                            <div className='icon-box'>
                                                                <IoHeart />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className='detail'>
                                                        <h3>{current.name}</h3>
                                                        <p>{current.price}₸</p>
                                                        <button onClick={() => AddToCart (current)}>Add To Cart</button>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                }

                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}

export default Shop;