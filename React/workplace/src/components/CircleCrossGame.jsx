// import cssTest from './styles/test.module.scss';
import cssTest from './styles/test.module.css';
import { useState, useEffect } from "react";
import OneBox from './OneBox';



const CircleCrossGame = () => {
	const dic = {
		status: false,
		result: ""
	}
	const [state, setState] = useState(dic)
	const change = () => {
		setState(prevState => {
			return {
				status: !prevState.status,
				result: !prevState.status ? "○" : "×"
			}
		})
	}

	const dic2 = {
		status: false,
		result: ""
	}
	const [state2, setState2] = useState(dic2)
	const change2 = () => {
		setState2(prevState => {
			return {
				status: !prevState.status,
				result: !prevState.status ? "○" : "×"
			}
		})
	}

	const dic3 = {
		status: false,
		result: ""
	}
	const [state3, setState3] = useState(dic3)
	const change3 = () => {
		setState3(prevState => {
			return {
				status: !prevState.status,
				result: !prevState.status ? "○" : "×"
			}
		})
	}

	return (
		<div>
			<OneBox
				onClick={change}
				state={state}
			/>
			<OneBox
				onClick={change}
				state={state}
			/>
			{/* <OneBox />
			<OneBox /> */}
			{/* <div className={cssTest.box}>
				<div className={cssTest.test} onClick={change}>
					{ state.result }
				</div>
				<div className={cssTest.test} onClick={change2}>
					{ state2.result }
				</div>
				<div className={cssTest.test} onClick={change3}>
					{ state3.result }
				</div>
			</div> */}
		</div>
	)
}

export default CircleCrossGame;