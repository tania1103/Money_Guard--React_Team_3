import Button from './AddButton/AddButton';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      React homework template
      {/* exemplu utilizare componenta Button - a se sterge dupa*/}
      <Button type="colored">Log In </Button>
      <Button type="white">Register </Button>
    </div>
  );
};
