import React, { useEffect, useState } from 'react';

const ShopInfo = () => {
  //APIから受けっとた店舗情報のstate
  const [shops, setShops] = useState([]);

  useEffect(() => {
    fetch('http://web-tas.net/shop/shop.php')
      .then(response => {
        return response.json()
      }).then(json => {
        const storeDetails = json.results.shop;
        setShops(storeDetails)
        // console.log(storeDetails)
      })
  }, []);

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