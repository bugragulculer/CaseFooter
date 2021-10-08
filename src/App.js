import BeBrilliant from './Be-Brilliant.svg';
import Logo from './logo.svg';

function App() {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <div className='first__col'>
          <div >
            <h2>MAIN CONTACT</h2>
            <p>Acme Street 58</p>
            <p>North White Plains, NY</p>
            <p>10603</p>
            <SocialMedia className='social'/>
          </div>
          <img src={Logo} alt="Logo" className='logo'/>
        </div>
        <div>
          <h2>SERVICE & SUPPORT</h2>
          <p>Contact Us</p>
          <p>Service & Repair</p>
          <p>Discontinued Products</p>
          <p>FAQs</p>
          <p>Warranty</p>
          <p>Return Policy</p>
          <p>Privacy Policy</p>
          <p>Terms and Conditions</p>
        </div>
        <div>
        <h2>MY ACCOUNT</h2>
          <p>Login / Register</p>
          <p>My Orders</p>
          <h2>FIND A DEALER</h2>
          <p>In the USA</p>
          <p>Worldwide</p>
        </div>
        <div>
          <h2>NEWSLETTER</h2>
          <p>Be Featured</p>
          <p>Students & Educators</p>
          <p>Firmware Downloads</p>
          <p>Influencers Program</p>
          <h2>BROWSE</h2>
          <p>Sign Up</p>
        </div>
        <img src={BeBrilliant} alt="Be Brilliant" className='slogan'/>
      </div>
      <p className='text__left__perpendicular'>READILY AVAILABLE, SERVICED AND</p>
      <p className='text__left__bottom'>SUPPORTED IN THE USA</p>
      <p className='text__right__bottom'>All rights reserved 2021 ©</p>
    </footer>
  );
}

const SocialMedia = () => {
  return (
    <div className='social__media'>
      <h3>Social Media</h3>
    </div>
  )
}

export default App;
