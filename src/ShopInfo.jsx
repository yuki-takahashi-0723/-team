import React, { useEffect, useState } from 'react';

const ShopInfo = () => {
  //APIから受けっとた店舗情報のstate
  const [shops, setShops] = useState([]);
  const [position, setPosition] = useState([]);

  // const select = (position) => {
  //   console.log('hello')
  // }

  useEffect(() => {
    fetch('http://web-tas.net/shop/shop.php' + position)
      .then(response => {
        return response.json()
      }).then(json => {
        const storeDetails = json.results.shop;
        setShops(storeDetails)
        console.log(storeDetails)
      })

      //成功
      const succes = (pos) => {
        setPosition(pos)
        console.log(pos)
      }
      //失敗
      const fail = (error) => {
        // setPosition(error)
        console.log(error)
      }
    navigator.geolocation.getCurrentPosition(succes, fail);

  }, []);
  // return (
  //   <h1>aaa</h1>
  // )
  
  return (
    shops.map((shop, index) => {
      //店舗名、住所、営業時間をオブジェクトに指定している
      const ShopInfoArray = {
        shopName: shop.name,
        shopAddress: shop.address,
        shopOpen: shop.open
      }
      console.log(ShopInfoArray)
      return (
        <div key={index.toString()}>
          {/* オブジェクトから値を取り出している */}
          <p>{ShopInfoArray.shopName}</p>
          <p>{ShopInfoArray.shopAddress}</p>
          <p>{ShopInfoArray.shopOpen}</p>
        </div>
      )
    }
    )
  )
}

export default ShopInfo;