import { useEffect } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Link } from 'react-router-dom';
import { useBackgroundColor } from '../../context/NavBackgroundContext';
import { useLoginModal, useLoginModalUpdate } from '../../context/LoginModalContext';
import { useRegisterModal } from '../../context/RegisterModalContext';
import useCheckBodyBehavior from '../../custom_hooks/CheckBodyBehavior';
import useCheckDevice from '../../custom_hooks/CheckDevice';
import useCheckImagePath from '../../custom_hooks/CheckImagePath';
import LoginModal from './login-and-reg/Login';
import RegisterModal from './login-and-reg/Register';
import HamburgerMenu from './HamburgerMenu';
import HamburgerToggler from './HamburgerToggler';
import CartToggler from './CartToggler';
import SettingsButton from '../UI/buttons/SettingsButton';
import styles from './NavigationMenu.module.scss';
import images from '../image/image_logo.svg';

const NavigationMenu = () => {
    const isRegModalOpen = useRegisterModal();
    const isLoginModalOpen = useLoginModal();
    const toggleLoginModal = useLoginModalUpdate(); 
    const isAuth = useSelector(state => state.auth.isAuth);
    const windowWidth = useCheckDevice();
    const logo = useCheckImagePath(images);
    const bgColor = useBackgroundColor();
    useCheckBodyBehavior();

    useEffect(() => {
        // render
    }, [isAuth])

    return (
        <header>
            {isLoginModalOpen && <LoginModal />}
            {isRegModalOpen && <RegisterModal />}
            <div className={styles.nav} style={{ backgroundColor: bgColor }}>
                <Link to="/">
                    <img src={logo} alt="logo" className={styles.logo} />
                </Link>
                {windowWidth > 920 && <HamburgerMenu />}
                <CartToggler />
                {windowWidth > 920 && (
                    isAuth
                        ? <SettingsButton />
                        : <button className={styles.loginButton} onClick={toggleLoginModal}>LOGIN</button>
                )}
                {windowWidth <= 920 && <HamburgerToggler />}
            </div>
        </header>
    );
}

export default NavigationMenu;