import {memo} from 'react';

export const ChildArea=memo(({open,onClickClose})=>{
//memo propsが変更しない限り際レンダリングしない。

  const data=[...Array(2000).keys()];
  data.forEach(() => console.log("レンダリング"))
//   console.log(data)
  return(
    open ? (
    <div style={style}>
      <p>子コンポーネント</p>
      <button onClick={onClickClose}>閉じる</button>
    </div>
    ):null
  )
})

const style={
  width:'100%',
  height:'200px',
  backgroundColor:'khaki',
}
