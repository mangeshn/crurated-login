import Nav from "@/components/Nav"
export default function Layout({ children, pageTitle }) {
    return (

        <div className="main-wrapper">

            <Nav></Nav>
            <div className="content-body">
                {children}
            </div>
        </div>
    )
}