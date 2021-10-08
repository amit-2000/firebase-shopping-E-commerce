import React, { useState } from 'react'
import firebase from 'firebase'

const InputData = () => {
    const [img, setImg] = useState('')
    const [price, setPrice] = useState(0)
    const [qty, setQty] = useState(0)
    const [title, setTitle] = useState('')
    const onchangeImg = (e) => {
        setImg(e.target.value);
    }
    const onchangePrice = (e) => {
        setPrice(e.target.value)
    }
    const onchangeQty = (e) => {
        setQty(e.target.value)
    }
    const onchangeTitle = (e) => {
        setTitle(e.target.value)
    }


    const addProduct = () => {
        firebase
            .firestore()

            .collection('products')
            .add({
                img: img,
                price: price,
                qty: qty,
                title: title
            })
            .then((docref) => {
                console.log('Product has been added', docref)
            })
            .catch((err) => {
                console.log("error", err)
            })

    }



    return (
        <div>
            <form>
                <input placeholder="img url" onChange={onchangeImg} />
                <input placeholder="price" onChange={onchangePrice} />
                <input placeholder="Qty" onChange={onchangeQty} />
                <input placeholder="title" onChange={onchangeTitle} />
            </form>
            <button onClick={addProduct} style={{ padding: '10px', margin: '10px' }}> Add a products</button>
        </div>
    )
}

export default InputData
