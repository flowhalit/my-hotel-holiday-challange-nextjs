import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import HotelListComponent from "../components/hotelListComponent";
const fetchData= ()=>{
  return new Promise((resolve,reject )=>{
     fetch("/api/list").then(res=>res.json()).then((data)=>{
        resolve(data);
     })
  })
}
const useFetchData=()=>{
  const [data,setData]=useState([])
  useEffect(()=>{
    fetchData().then(result=>{
      setData(result);
    })
  },[]);
  return [ data,setData];
}


export default function Home() {
  const [ items ]=useFetchData();
  return (
    <>
    <Head>
        <title>Antalya Otel Listeleri - Challenge -Nextjs</title>
    </Head>
    <section className="hotel-container">
      <div className="container">
        <div className="row">
          <div className="hotel-wrapper">
            <HotelListComponent items={items} />
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
