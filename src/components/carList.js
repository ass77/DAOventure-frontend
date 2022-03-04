import React from 'react'

const Carlist = ({ data }) => {
    return (
        <ul>
            {data.map((car, index) => (
                <li key={index} style={{
                    flexDirection: 'row',
                    cursor: 'pointer',
                    listStyle: 'none',
                    margin: '10px',
                    padding: '10px',
                    border: '1px solid black',
                    borderRadius: '5px',
                    backgroundColor: '#f5f5f5',
                }}
                    onClick={() => console.log(car._id)}
                >
                    <div style={{
                        flexDirection: 'column',
                    }}>
                        <h3>Model: {car.model}</h3>
                        <p>Name: {car.name}</p>
                        <p>SKU: {car.sku}</p>
                        <p>PRICE: {car.price}</p>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default Carlist