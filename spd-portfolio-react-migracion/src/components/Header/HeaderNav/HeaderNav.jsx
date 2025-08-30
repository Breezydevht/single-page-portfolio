import styles from "./HeaderNav.module.css"
import imgTablet from "@/assets/images/img_profile/image-profile-tablet.webp"
import imgDesktop from "@/assets/images/img_profile/image-profile-desktop.webp"
import imgPhone from "@/assets/images/img_profile/image-profile-mobile.webp"
function HeaderNav() {
    return (
        <nav className={
                        /* Mobile first */
                        `flex flex-col items-center justify-between w-[153px] h-[72px] gap-1
                          
                        md:flex-row md:w-full

                        `}>
                <a href="/" className="nav__logo text-heading-m font-bold md:ml-6">BreezyDev</a>
                <div className="flex w-full relative flex-col md:max-w-[322px] md:flex-row md:justify-end lg:max-w-[400px]">
                    <ul className="flex items-center justify-between nav__list w-full z-0 md:justify-around md:w-[192px] md:mr-6">
                        <li className="nav__item"><a href="#" className="nav__link"><div className={styles.twitter__icon}></div></a></li>
                        <li className="nav__item"><a href="#" className="nav__link"><div className={styles.github__icon}></div></a></li>
                        <li className="nav__item"><a href="#" className="nav__link"><div className={styles.linkedin__icon}></div></a></li>
                        <li className="nav__item"><a href="#" className="nav__link"><div className={styles.frontendMentor__icon}></div></a></li>
                    </ul>
                    <div className="w-full absolute">
                        <picture>
                            <source media="(min-width: 768px)" srcSet={imgTablet} className="absolute" />
                            <source media="(min-width: 1440px)" srcSet={imgDesktop} className="absolute"/>
                            <img src={imgPhone} alt="BreezyDev Profile" className="absolute top-[-3.5rem] z-[-1]"/>
                        </picture>
                    </div>
                    
                </div>
                
        </nav>
    );
}

export default HeaderNav