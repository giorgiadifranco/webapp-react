//importare react-router


function App() {
  

  return (
    <>
      <header>
        <nav>
          <NavLink to='/'>Home</NavLink>
        </nav>
      </header>

      <main>
        <Outlet/>
      </main>

      <footer>
        footer
      </footer>
    </>
  )
}

export default App
