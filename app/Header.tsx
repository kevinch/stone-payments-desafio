import Date from "./Date"

function Header() {
    return (<header style={{marginBottom: "50px"}}>
        <h1>Stone currency</h1>
        <Date dateString="2024-09-04" />
    </header>
    )
}

export default Header