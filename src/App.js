import React from 'react';
// import CartItem from './CartItem'
import Cart from './Cart'
import Navbar from './component/Navbar'
import Totalcount from './Totalcount'
import firebase from 'firebase'
import InputData from './InputData'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      products: [],
      loading: true
    }


    // create shortcut for firebase.firestore() within constructor.
    this.db = firebase.firestore()
  }

  componentDidMount() {
    // firebase
    //   .firestore()
    //   .collection('products')
    //   .get()
    //   .then((snapshot) => {
    //     console.log(snapshot);
    //     snapshot.docs.map((doc) => {
    //       console.log(doc.data())
    //     })
    //     const products = snapshot.docs.map(doc => {
    //       doc.data();
    //       const data = doc.data();
    //       data['id'] = doc.id
    //       return data;
    //     })

    //     this.setState({
    //       products :products,
    //       loading : false
    //     })
    //   })


    // firebase
    //   .firestore()
    this.db
      .collection('products')
      // quering Data

      // .where('price', '==', 999)
      // .where('title', '==', 'Mobile')

      // Data in order

      .orderBy('price')

      // ** onSnapshot**  : It is a listerner for firestore  means , if any value is changed in data base it will immediately reflected in database.
      .onSnapshot((snapshot) => {
        console.log(snapshot);
        // this is callback
        snapshot.docs.map((doc) => {
        return  console.log(doc.data())
        })
        const products = snapshot.docs.map(doc => {
          doc.data();
          const data = doc.data();
          data['id'] = doc.id
          return data;
        })

        this.setState({
          products: products,
          loading: false
        })
      })

  }

  IncreaseQty = (product) => {
    console.log("hello this is handle click on increase event");
    const { products } = this.state
    const index = products.indexOf(product);
    // products[index].qty += 1
    // this.setState({
    //   products: products
    // }) 
    const docref = this.db.collection('products').doc(products[index].id)
    docref
      .update({
        qty: products[index].qty + 1
      })
      .then(() => {
        console.log("document updated successfully")
      })
      .catch((err) => {
        console.log("error", err)
      })
  }
  DecreaseQty = (product) => {
    console.log("hello this is handle click on Decrease event")
    const { products } = this.state
    const index = products.indexOf(product);
    if (products[index].qty > 0) {
      // products[index].qty -= 1
      // this.setState({
      //   products: products
      // })
      const docref = this.db.collection('products').doc(products[index].id)
      docref
        .update({
          qty: products[index].qty - 1
        })
        .then(() => {
          console.log('Decrease item qty successfully')
        })
        .catch((err) => {
          console.log('Error occured ', err)
        })
    }
  }
  DeleteItem = (id) => {
    const { products } = this.state;
    // what is filter ? when condition is true then it will not print that value
    // const items = products.filter((item) => item.id !== id)
    // this.setState({
    //   products: items
    // })
    const docref = this.db.collection('products').doc(id)

    docref
      .delete()
      .then(() => {
        console.log('deleted successfully')
      })
      .catch((err) => {
        console.log('error', err)
      })
  }
  getCount = () => {
    const { products } = this.state
    let count = 0;

    products.forEach((product) => {

      count += product.qty
    })
    console.log(count)
    return count

  }
  totalPrice = () => {
    const { products } = this.state
    let total = 0;

    products.map((product) => {
      total = total + product.qty * product.price
      return ''
    })

    return total;
  }
  
  render() {
    const { products, loading } = this.state;
    return (
      <div className="App">
        {/* <CartItem/> */}
        <Navbar count={this.getCount()} />
      
        <InputData/>

        <Cart
          products={products}
          onIncrease={this.IncreaseQty}
          onDecrease={this.DecreaseQty}
          onDelete={this.DeleteItem} />
        <Totalcount total={this.totalPrice()} />
        {loading && <h1> Loading...</h1>}
      </div>
    );
  }
}

export default App;
