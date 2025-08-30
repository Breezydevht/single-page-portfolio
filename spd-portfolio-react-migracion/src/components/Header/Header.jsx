import HeaderNav from "./HeaderNav/HeaderNav";
function Header() {
    return (
        <>
            <header className="flex justify-center w-full h-[72px] max-w-[1100px]">
                <HeaderNav />
            </header>
        </>
    )
}

export default Header;