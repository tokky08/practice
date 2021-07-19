// import cssTest from './styles/test.module.scss';
import cssTest from './styles/test.module.css';
import { useState, useEffect } from "react";



const OneBox = (props) => {
	// const dic = {
	// 	status: false,
	// 	result: ""
	// }
	// const [state, setState] = useState(dic)
	// const change = () => {
	// 	setState(prevState => {
	// 		return {
	// 			status: !prevState.status,
	// 			result: !prevState.status ? "○" : "×"
	// 		}
	// 	})
	// }

	// const dic = {
	// 	status: false,
	// 	result: ""
	// }
	// const [state, setState] = useState(dic)
	// const change = () => {
	// 	setState(prevState => {
	// 		return {
	// 			status: !prevState.status,
	// 			result: !prevState.status ? "○" : "×"
	// 		}
	// 	})
	// }

	return (
		<div className={cssTest.test} onClick={() => props.onClick()}>
			{ props.state.result }
		</div>
	)
}

export default OneBox;