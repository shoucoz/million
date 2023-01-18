import { useNavigate } from 'react-router-dom';
import Button from "shared/components/Button";
import { ReactComponent as HandImage }from "assets/images/hand.svg";
import { GAME_URL } from 'constants/routes';
import "./styles.scss";

const Home = () => {
    const history = useNavigate();
    const handleStartGame = () => history(GAME_URL);

    return (
        <div className="page page-home">
            <div className="page-home-elem">
                <HandImage />
            </div>
            <div className="page-home-elem">
                <h1>Who wants to be a millionaire?</h1>
                <Button text="Start" className="button" onClick={handleStartGame} />
            </div>
        </div>
    )
} 

export default Home;