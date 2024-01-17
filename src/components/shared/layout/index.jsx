const Layout = ({children})=>{
    return(
        <div>
            <nav className="bg-[green] h-[100px]">
                <h1>menu</h1>
            </nav>
            <section className="p-4">
                {children}
            </section>
            <footer className="bg-[blue] h-[100px]">
                <h1>footer</h1>
            </footer>
        </div>
    )
}

export default Layout