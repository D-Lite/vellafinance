import { FunctionComponent } from "react";
import React from 'react';
import { IonContent } from '@ionic/react';
import { useHistory } from 'react-router-dom';

// import { useSelector } from 'react-redux'
import { RootState, useDispatch, useSelector } from './../store';
import { changeQuantity } from "../store/slices/cart";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
  description: string;
  category: string;
}

const Cart: FunctionComponent = () => {

  const dispatch = useDispatch();

  const cart = useSelector((state: RootState) => state.cart.cart)
  const history = useHistory();

  const [totalPrice, setTotalPrice] = React.useState(0);

  React.useEffect(() => {
    const newTotalPrice = cart.reduce((total: number, product: Product) => total + (product.price * product.quantity), 0).toFixed(2);
    setTotalPrice(Number(newTotalPrice));
  }, [cart, dispatch]);

  const handleQuantityChange = (quantity: number, id: number) => {
    // console.log(quantity)
    // console.log(id)
    return dispatch(changeQuantity({ quantity, id }))
  }
  return (
    <IonContent fullscreen className="relative">
      <div className="w-full h-full bg-black bg-opacity-90 top-0 overflow-y-auto overflow-x-hidden fixed sticky-0" id="chec-div">
        <div className="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700" id="checkout">
          <div className="flex md:flex-row flex-col justify-end" id="cart">
            <div className=" w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white overflow-y-auto overflow-x-hidden h-screen" id="scroll">
              <div className="flex items-center text-gray-500 hover:text-gray-600 cursor-pointer" onClick={(e) => {
                e.preventDefault();
                history.push('/home');
              }} >
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <polyline points="15 6 9 12 15 18" />
                </svg>
                <p className="text-sm pl-2 leading-none">Back</p>
              </div>
              <p className="text-5xl font-black leading-10 text-gray-800 pt-3">Cart</p>
              {cart.map((product: Product) => {
                return (
                  <div key={product.id} className="md:flex items-center mt-14 py-8 border-t border-gray-200">
                    <div className="w-1/4">
                      <img src={product.image} alt={product.title} className="w-full h-full object-center object-cover" />
                    </div>
                    <div className="md:pl-3 md:w-3/4">
                      <div className="flex items-center justify-between w-full pt-1">
                        <p className="text-base font-black leading-none text-gray-800">{product.title}</p>
                        <select className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none" onChange={(event) => handleQuantityChange(event.target.value, product.id)}>
                          <option value={product.quantity}>{product.quantity}</option>
                          {[1, 2, 3, 4, 5].map(option => (
                            // Render the option only if it's not equal to the current quantity
                            product.quantity !== option && (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            )
                          ))}
                        </select>
                      </div>
                      <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white"> {product.category}</h5>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.description}</p>

                      <div className="flex items-center justify-between pt-5 pr-6">
                        <div className="flex itemms-center">
                          <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">Remove</p>
                        </div>
                        <p className="text-base font-black leading-none text-gray-800">NGN {product.price}</p>
                      </div>

                      <div className="flex items-center justify-between pt-5 pr-6">
                        <div className="flex itemms-center">
                          <p className="text-lg leading-3 pl-5 cursor-pointer">Total</p>
                        </div>
                        <p className="text-base font-black leading-none text-gray-800">NGN {product.price * product.quantity}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="xl:w-1/2 md:w-1/3 xl:w-1/3 w-full bg-gray-100 h-full">
              <div className="flex flex-col md:h-screen px-14 py-20 justify-between overflow-y-auto">
                <div>

                </div>
                <div>
                  <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                    <p className="text-2xl leading-normal text-gray-800">Total</p>
                    <p className="text-2xl font-bold leading-normal text-right text-gray-800">NGN {totalPrice}</p>
                  </div>
                  <button className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </IonContent>
  );
};

export default Cart;
