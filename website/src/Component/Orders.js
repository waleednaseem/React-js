import React,{useEffect,useState} from 'react'
import {db} from './Firebase'
import {useStateValue} from '../StateProvider'
import Order from './Order'

export default function Orders(){
    const [{basket ,user},dispatch] = useStateValue();
    const [orders,setOrders] =useState([]);
    useEffect(() => {
      if(user){
        db
        .collection('users')
        .doc(user?.uid)
        .collection('orders')
        .orderBy('created','desc')
        .onSnapshot(snapshot =>(
            setOrders(snapshot.docs.map(doc =>({
                id: doc.id,
                data: doc.data()
            })))
        ))}else{
            setOrders([])
        }
        }, [user])
      
    return(
        <div>
            <div>
                {orders?.map(order =>(
                    <Order order={order} />
                ))}
            </div>
        </div>
    )
}