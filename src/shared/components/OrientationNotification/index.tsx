import useScreenOrientation from 'hooks/useScreenOrientation';
import useDeviceType from 'hooks/useDeviceType';
import { LANDSCAPE } from 'constants/screenOrientaion';
import { MOBILE } from 'constants/deviceType';
import './styles.scss';

const NotificationOrientation:React.FC<{children: React.ReactNode}> = ({ children }) => {
    const screenOrientation = useScreenOrientation();
    const deviceType = useDeviceType();
    const isLandscape = screenOrientation === LANDSCAPE;
    const isMobile = deviceType === MOBILE;

    return (
        <>
            {children}
            {
                isLandscape && isMobile &&  (
                    <div className='orientation-notification'>
                        <h1>Please change our device orientation</h1>
                    </div>
                )
            }
        </>
    )
}


export default NotificationOrientation;