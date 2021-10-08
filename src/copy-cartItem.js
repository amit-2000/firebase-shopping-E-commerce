import React, { Component } from 'react';

class CartItem extends React.Component {


    IncreaseQty = () => {
        // using props
        // Method 1
        // this.setState({qty : this.state.qty + 1})

        // Method 2 : only use if we want prev state.
        // this.setState((prevState) => {
        //     return {
        //         qty: prevState.qty + 1
        //     }
        // }, () => {
        //     console.log(this.state.qty)
        // });
        // this.setState((prevState) => {
        //     return {
        //         price: prevState.price + this.state.price
        //     }
        // });


    }
    DecreaseQty = () => {
        if (this.state.qty > 0) {
            this.setState({ qty: this.props.qty - 1 })
        }
    }
    Delete = () => {
        this.setState({ qty: this.state.qty = 0 })
        // this.setState({ price : this.state.price =})
    }

    render() {
        const { price, title, qty } = this.props.product
        return (
            <div className='cart-item' style={{ border: '1px', border: 'solid' }} >
                <div className='left-block'><img style={styles.image} /></div>
                <div className='right-block'>
                    <div style={{ fontSize: 25 }} >{title}</div>
                    <div style={{ color: 'red' }}>Rs {price}</div>
                    <div style={{ color: 'red' }}>Qty : {qty}</div>
                    <div className='cart-item-actions'>
                        {/* Buttons */}
                        <img onClick={this.IncreaseQty} alt='Increase' className="action-icons" src="https://t4.ftcdn.net/jpg/01/07/62/07/240_F_107620769_UwNVSoXnKS4VNcOKoZjPohlEPn83oE38.jpg" ></img>
                        <img onClick={this.DecreaseQty} alt='Decrease' className='action-icons' src='https://t3.ftcdn.net/jpg/03/73/49/86/240_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg' ></img>
                        <img onClick={this.Delete} alt='Delete' className='action-icons' src='https://t4.ftcdn.net/jpg/01/90/89/15/240_F_190891550_N7uKp2aHE3mOc20dmtDytj7atgvbhdOu.jpg'></img>
                    </div>
                </div>
            </div>
        );
    }

}
const styles = {
    color: 'red',
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem