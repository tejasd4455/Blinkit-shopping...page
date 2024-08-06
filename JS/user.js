import './App.css'
function App()
{
    return(
    <div className="App">
     <BrowserRouter> 
       <Header/>
    )
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Shop' element={<About/>}/>
    <Route path='/Services' element={<Services/>}/>
    <Route path='/Blog' element={<Blog/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    <Route path='/User' element={<User/>}/>
    <Route path='/Cart' element={<Home/>}/>
 </Routes>
   </BrowserRouter>
     </div>
}
   <Nav>
    <Nav.Link href="/">Home</Nav.Link>
    <Nav.Link href="/Shop">Shop</Nav.Link>
    <Nav.Link href="/Services">Services</Nav.Link>
    <Nav.Link href="/Blog">Blog</Nav.Link>
    <Nav.Link href="/Contact">Contact</Nav.Link>
    <Nav.Link href="/User">User</Nav.Link>
    <Nav.Link href="/Cart">Cart</Nav.Link>
   </Nav>