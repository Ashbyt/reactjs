mport './App.css';
import { Link } from 'react-router-dom';

function Home() {
return (
<div>
    <nav>
     <Link to="/about">About</Link>
     <Link to="/contact">Contact</Link>
    </nav>
    <h1>My Website</h1>
</div>
);
}

export function About(){
  return (
    <div>
        <h1>About Us</h1>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
    </div>
  )
}

export function Contact(){
  return (
    <div>
        <h1>Contact Us</h1>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>

    </div>
  )

}

export function App(){
  return <Home />;

}

export default App;
