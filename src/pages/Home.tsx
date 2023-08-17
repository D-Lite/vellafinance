import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import Header from '../components/Header';
import HomePage from '../components/HomePageMain';
import Footer from '../components/Footer';


import { useDispatch, useSelector } from './../store';
import { getProducts } from '../store/slices/product';


const Home: React.FC = () => {
  const dispatch = useDispatch();

  const [rows, setRows] = React.useState([]);

  const { products } = useSelector((state: any) => state.product);

  React.useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  React.useEffect(() => {
    setRows(products);
  })


  return (
    <IonPage>
      <IonContent fullscreen className="relative">
        <div className=''>
          <Header />
          <HomePage products={rows} />
          <Footer />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
