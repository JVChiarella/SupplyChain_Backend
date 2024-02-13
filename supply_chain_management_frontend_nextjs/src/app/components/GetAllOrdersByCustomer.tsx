'use client'
import React, { useEffect, useState } from 'react'

const GetAllOrdersByCustomer = () => {

    const defaultOrders : Order[] = [];
    const [gotOrders, setGotOrders] = useState(false);
    const [orders, setOrders] = useState(defaultOrders);
    const [error, setError] = useState(false);
    
    useEffect(() => {
        const getData = async () => {
            //fetch data from spring api
            const data : Order[] | any = await getOrders();

            if(data['message']){
                //handle error
                setError(true)
            } else {       
                //update state and return
                setOrders(data);
                setGotOrders(true);
                return
            }
        };
        getData();
    }, []);
  
    if(gotOrders){
        return (
            <div>
                <h1>Orders</h1>
                <div>-----------------------</div>
                <ul>
                {orders.map(order => <li key={order.id}>{order.id}</li>)}
                </ul>
            </div>
        )
    } else if(error){
        return (
            <div>
                --An Error Occured While Loading Orders--
            </div>
        )
    } else {
        return (
            <div>
                Loading Orders...
            </div>
        )
    }
}

async function getOrders(){
    const res = await fetch('/api/orders/customer/getAll', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
  
    const users = await res.json();
    return users;
}

export default GetAllOrdersByCustomer
  