import React, { Component } from 'react';


const CartItem = (props) => {

    const { price, title, qty, img } = props.product
    const { product, onDecrease, onIncrease, onDelete } = props;
    return (
        <div className="container">
            <div className='cart-item' style={{ border: '1px',border: 'solid' , margin : '10px'}} >
                <div className='left-block'><img style={styles.image} src={img} />
                </div>
                <div className='right-block'>
                    <div style={{ fontSize: 25 }} >{title}</div>
                    <div style={{ color: 'red' }}>Rs {price}</div>
                    <div style={{ color: 'red' }}>Qty : {qty}</div>
                    <div className='cart-item-actions'>
                        {/* Buttons */}
                        <img onClick={() => onIncrease(product)} alt='Increase' className="action-icons" src="https://t4.ftcdn.net/jpg/01/07/62/07/240_F_107620769_UwNVSoXnKS4VNcOKoZjPohlEPn83oE38.jpg" ></img>
                        <img onClick={() => onDecrease(product)} alt='Decrease' className='action-icons' src='https://t3.ftcdn.net/jpg/03/73/49/86/240_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg' ></img>
                        <img onClick={() => onDelete(product.id)} alt='Delete' className='action-icons' src='https://t4.ftcdn.net/jpg/01/90/89/15/240_F_190891550_N7uKp2aHE3mOc20dmtDytj7atgvbhdOu.jpg'></img>
                    </div>
                </div>
            </div>
        </div>
    );


}
const styles = {
    color: 'red',
    image: {
        height: ' 100%',
        width: 110,
        borderRadius: 4,
        // background: '#ccc'
    }
}

export default CartItem