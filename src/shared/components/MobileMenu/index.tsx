import React, { useState } from 'react';
import { ReactComponent as Menu } from 'assets/icons/menu.svg';
import { ReactComponent as MenuClose } from 'assets/icons/close.svg';
import useDeviceType from 'hooks/useDeviceType'
import { DESCTOP } from 'constants/deviceType';
import './styles.scss';

const MobileMenu:React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [isOpened, setIsOpened] = useState<boolean>(false);
    const deviceType = useDeviceType();
    const isDesctop = deviceType === DESCTOP;
    const Burger = isOpened ? MenuClose : Menu;
    const toggleMenuHandler = () => setIsOpened(!isOpened);

    return (
        <>
            {
                (isOpened || isDesctop) && children
            }
            {
                !isDesctop && (
                    <Burger onClick={toggleMenuHandler} className='menu-toggler' />
                )
            }
        </>
    )
} 

export default MobileMenu;