import '../styles/Home.css';
import bgImage from '../assets/images/homepage-bg.jpg';
function Home() {
  return (
    <div className='home' style={{ backgroundImage: `url(${bgImage})` }}>
      <h1>Welcome to Lizzi Pizzas</h1>
      <h3>Sweet to come again tommorow</h3>
    </div>
  )
}

export default Home