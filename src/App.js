import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Carlist from './components/carList';

function App() {

  const [sales, setSales] = useState([]);
  const [price, setPrice] = useState(0);
  const [sku, setSKU] = useState('');
  const [model, setModel] = useState('');
  const [name, setName] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    const data = [...sales];
    data.push({
      sku,
      model,
      name,
      price,
    });

    try {
      axios.post(`${process.env.REACT_APP_DAO_ENDPOINT}/api/v1/cars/addcar`, {
        sku,
        model,
        name,
        price,
      })

    } catch (error) {
      console.log(error);
    }

    setSales(data);
    setSKU('');
    setModel('');
    setName('');
    setPrice(0);

  };

  useEffect(() => {
    console.log(process.env.REACT_APP_DAO_ENDPOINT);
    const getCars = async () => {
      try {

        axios.get(`${process.env.REACT_APP_DAO_ENDPOINT}/api/v1/cars/allcars`)
          .then(res => {
            console.log(res.data)
            setSales(res.data);
          })

      } catch (error) {
        console.log(error)
      }

    }
    getCars();
  }, []);



  return (
    <div className="App">
      <h2>Car Sales MERN DAOventure</h2>
      <h4>List of car sales</h4>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <Carlist data={sales} />
      </div>
      <h2>Add a new car</h2>
      <form onSubmit={onSubmit}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <label>SKU: </label>
          <input required type="text" value={sku} onChange={(e) => setSKU(e.target.value)} />
          <label>Model:</label>
          <input required type="text" value={model} onChange={(e) => setModel(e.target.value)} />
          <label>Name:</label>
          <input required type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <label>Price:</label>
          <input required type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
          <button style={{ marginTop: '30px' }} type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
