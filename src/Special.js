import React, { useEffect, useState } from 'react'
import ButtonKit from './uikit/ButtonKit'

//apiのjsonデータを取得して、表示させるのが課題
const Special = () => {

    const [features, setFeatures] = useState([])

    useEffect(() => {
        fetch('http://web-tas.net/shop/feature.php')
            .then(response => {
                //console.log(response.json())
                return response.json()
            }).then(json => {
                console.log(json)
                const featureDetails = json.results.special
                setFeatures(featureDetails)
                console.log(json)

            })
    }, [])

    return (
        features.map((feature, index) => { //mapを使用する際は原則keyが必要
            //code,名前をオブジェクトと指定している
            const FeaturesArray = {
                featureCode: feature.code,
                featureName: feature.name
            }
            console.log(FeaturesArray)
            return ( //tostring()はオブジェクトを表す文字列を返します
                features.map(feature => {
                    <div key={index.toString()}>
                        <p>{FeaturesArray.featureCode}</p>
                        <p>{FeaturesArray.featureName}</p>
                    </div>
                    return (<ButtonKit label={feature.name} onClick=
                        {() => console.log(feature.name)} key={feature.code} />
                    )
                })
            )
        })
    )
}

export default Special