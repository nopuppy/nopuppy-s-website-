function HomePage() {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <h1 style={{ fontFamily: '"Comic Sans MS", fantasy', color: '#4b9be1' }}>
        {"nopuppy's website"}
      </h1>
      <h2
        style={{
          fontFamily: 'Arial, Helvetica, cursive',
          color: 'rgb(243, 103, 123)',
          marginBottom: '10rem'
        }}
      >
        click the buttons below
      </h2>
      <button
        style={{
          fontFamily: 'monospace',
          padding: '1rem',
          fontSize: '2rem',
          background: 'blue',
          color: 'white'
        }}
        onClick={() => alert('Hello there')}
      >
        Welcome
      </button>
      <button
        style={{
          fontFamily: 'monospace',
          padding: '1rem',
          fontSize: '2rem',
          background: 'orange',
          color: 'white',
          marginTop: '2rem'
        }}
        onClick={() => {
          let name = prompt("What's your favorite food?");
          if (name) {
            alert('I like, ' + name  + ' too' + '!');
          } else {
            alert('Cool food!');
          }
        }}
      >
        {"What's your favorite food?"}
      </button>
       <button
        style={{
          fontFamily: 'monospace',
          padding: '1rem',
          fontSize: '2rem',
          background: 'orange',
          color: 'white',
          marginTop: '2rem'
        }}
        onClick={() => {
          let name = prompt("What game do you like the most?");
          if (name) {
            alert('I like, ' + name  + ' too' + '!'),
              alert('Fun game!');
          } else {
            alert('Can you type agian?!');
          }
        }}
      >
        {"What game do you like the most?"}
      </button>
    </div>
  );
}

export default HomePage;
