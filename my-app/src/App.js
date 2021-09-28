import { useState } from 'react'
import Logo from './logo.svg'
import { debug, devUrl, prodUrl } from './config'
import MyButton from './components/MyButton'
import './App.css'

const imgUrl = debug ? devUrl : prodUrl

function App() {
  const [total, setTotal] = useState(0)
  // 解構賦值， [Getter(得到狀態), setter(設定狀態)] = useState(初始值)
  // 初始值的括號裡面不寫東西的話，得到的會是undefined
  // 這會導致+1後變成NaN

  return (
    <>
      {1}
      <hr />
      {'abc'}
      {/* 可以正常呈現 */}
      <hr />
      {true}
      <hr />
      {false}
      <hr />
      {null}
      <hr />
      {undefined}
      <hr />
      {/* 上面四個都不會顯示 */}

      {[1, 2, 3, 4]}
      {/* 呈現方式會像是[1, 2, 3, 4].join()，只留下字串 1234 */}
      <hr />
      {/* {{ a: 1, b: 2 }} */}
      {/* 純物件會讓程式產生錯誤，需要調整 */}
      <hr />
      {() => {
        console.log(1)
      }}
      {/* 也不會顯示 */}
      <hr />
      <h1>{total}</h1>
      <button
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setTotal(total - 1)
        }}
      >
        -
      </button>
      <br />
      <img
        src="https://www.collinsdictionary.com/images/full/book_181404689_1000.jpg"
        width="100px"
      />
      <br />

       {/* 放在public資料夾，要用http://XXXX/ */}
       <img src={`${imgUrl}/images/17.jpg`} alt="" />
      {/* --------------------- */}
      {/* 放在src資料夾，要用import(第2行) */}
      <img src={Logo} alt="" />

      <MyButton />
    </>
  )
}

export default App