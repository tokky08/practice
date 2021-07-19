import cssTest from './styles/test.module.css';

const Square = (props) => {
    return (
        <button className={cssTest.square} onClick={() => props.onClick()}>
            {props.value}
        </button>
    )
}

export default Square;