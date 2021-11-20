/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';

//emotion/reactを使うときは必ず上の二つもセットする。
export const Emotional=()=>{
	const containerStyle = css`
	  border:solid 2px #392eff;
	  border-radius:20px;
	  padding: 8px;
	  margin: 8px;
	  display: flex;
    justify-content: space-around;
	  align-items: center;
	`
	const titleStyle = css({
		margin:0,
		color:"#3d84a8",
	});

	const buttonStyle = css({
    backgroundColor:"#abedd8",
		border:"none",
		padding:"8px",
		borderRadius:"20px",
	})
	return(
	<div css={containerStyle}>
		<p css={titleStyle}>- Emotional -</p>
	  <button css={buttonStyle}>FIGHT!</button>
	</div>
	)
}
