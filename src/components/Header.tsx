import Navigation from './Nav';

const Header: React.FC = () => {
  return (
    <header>
      <Navigation />
      <div style={{ marginTop: 60 }}>{/* to handle space created by navigation 'fixed-top' */}</div>
    </header>
  );
};

export default Header;
