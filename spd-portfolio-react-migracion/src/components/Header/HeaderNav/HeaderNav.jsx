import styles from "./HeaderNav.module.css"
import imgProfile from "@/assets/images/img_profile/image-profile-transparancy-Photoroom.png"
function HeaderNav( { links } ) {



    return (
        <nav className={`flex flex-col items-center justify-between w-[153px] h-[72px] gap-4 md:flex-row md:w-full lg:max-w-[1110px]`}>
                <a href="/" className="nav__logo z-[99] text-heading-m font-bold md:ml-6 lg:ml-4">BreezyDev</a>
                <div className="flex w-full max-w-[174px] items-center relative flex-col md:max-w-[322px] md:flex-row md:justify-end lg:max-w-[445px]">
                    <ul className="flex items-center justify-between nav__list w-full z-[99] md:justify-around md:w-[192px] md:mr-6">
                        {
                            links.map((link) => (
                                <li key={link._id} className="nav__item">
                                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="nav__link">
                                        <div className={`${styles.icon} ${styles[`${link.title}__icon`]}`}></div>
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                    <div className="absolute top-[0px] w-[174px] h-[348px] md:w-[322px] md:h-[600px] md:top-[-100px] lg:w-[445px] lg:h-[720px] bg-gradient-to-b from-[#151515] to-[#242424]">
                        <img src={imgProfile} alt="BreezyDev Profile" className="relative object-cover w-full h-full z-[1]"/>
                    </div>
                    
                </div>
                
        </nav>
    );
}

export default HeaderNav