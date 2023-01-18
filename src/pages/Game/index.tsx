import Sidebar from './components/Sidebar';
import Question from './components/Question';
import StepList from 'shared/components/StepList';
import MobileMenu from 'shared/components/MobileMenu';
import './style.scss';

const Game = () => {
    return (
        <div className="page page-game">
            <Question />
            <MobileMenu>
                <Sidebar>
                    <StepList />
                </Sidebar>    
            </MobileMenu>
        </div>
    )
}

export default Game;