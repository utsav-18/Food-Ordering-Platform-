import { useEffect, useState } from 'react'


function App() {
  
  const [order, setOrder] = useState(null);
  
  useEffect(()=>{
    fetch("http://localhost:8080/orders")
    .then((response)=>response.json())
    .then((data)=>{
      setOrder(data);
    })
  },[]);

  return (
    <>
      <div>
          <h1>Food Odering Website</h1>
          {order &&(
            <div>
              <h2>{order.food}</h2>
              <p>Price:${order.price}</p>
              
            </div>
          )}
      </div>

      
    </>
  )
}

export default App
