import React from 'react'
import ButtonKit from './uikit/ButtonKit'

const TopPage = ({history}) => {
    return (
        <>
            <h2>グルメーサーチ</h2>
            <ButtonKit 
                label='現在地の周辺の飲食店　一覧を表示する'
                onClick={()=>history.push('/shopinfo')}    
            />
            <ButtonKit 
                label='ジャンル別に検索する'
                onClick={()=>history.push('/genre')}    
            />
           
        </>
    )
}

export default TopPage