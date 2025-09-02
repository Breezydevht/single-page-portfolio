import HeaderNav from "./HeaderNav/HeaderNav";
function Header({ links }) {
    return (
        <>
            <header className="flex justify-center w-full h-[72px] mt-6">
                <HeaderNav links={ links } />
            </header>
        </>
    )
}

export default Header;