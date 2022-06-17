
export const NavbarIcon = () => {

    function toggleMenu() {
        const sideBar = document.getElementById('side-barIcon')
        if (sideBar?.classList.contains('open')) {
            sideBar?.classList.remove('open')
        } else {
            sideBar?.classList.add('open')
        }
    }

    return (
        <div className='side-bar' id="side-barIcon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}
