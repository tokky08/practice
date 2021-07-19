import { Board } from "./index";
import cssTest from './styles/test.module.css';


const Game = () => {
    return (
        <div className={ cssTest.game }>
            <div className={ cssTest.game_board }>
                <Board />
            </div>
            <div ckass={ cssTest.game_info }>
                <div></div>
                <ol></ol>
            </div>
        </div>
    )
}

export default Game