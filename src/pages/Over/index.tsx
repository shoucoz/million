import { useLocation, useNavigate } from 'react-router-dom';
import Button from "shared/components/Button";
import { ReactComponent as HandImage }from "assets/images/hand.svg";
import { GAME_URL } from 'constants/routes';
import "./styles.scss";

const Over = () => {
    const location = useLocation();
    const history = useNavigate();
    const handleStartGame = () => history(GAME_URL);

    return (
        <div className="page page-over">
            <div className="page-over-elem">
                <HandImage />
            </div>
            <div className="page-over-elem">
                <div>
                    <h5>Total score:</h5>
                    <h1>${location?.state?.totalAmount || 0} earned</h1>
                </div>
                <Button text="Try again" className="button" onClick={handleStartGame} />
            </div>
        </div>
    )
}

export default Over;
