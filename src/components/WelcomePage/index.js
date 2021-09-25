const WelcomePage = ({ user, setIsLoggedIn }) => {
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <h2>Welcome {user}</h2>
      <button onClick={handleLogout}>Voltar</button>
    </div>
  );
};

export default WelcomePage;
