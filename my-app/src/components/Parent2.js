import React, { useState } from 'react'
import ChildA from './ChildA'
import ChildB from './ChildB'
import ChildC from './ChildC'

function Parent2() {
  // 將資料傳送到 ChildA
  //[得到狀態, 設定狀態] = useState(初始值)
  const [parentData, setParentData] = useState('Parent Data')

  // 為了要給 ChildB 設定資料到 Parent
  const [data, setData] = useState('')

  return (
    <>
      {/* 父母元件就會有階層關係 */}
      <ChildA parentData={parentData} />
      <ChildB setData={setData} />
      <p>由ChildB來的資料：{data}</p>
      <ChildC data={data} />
    </>
  )
}

export default Parent2
