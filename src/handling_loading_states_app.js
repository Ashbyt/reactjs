
import './App.css';
import { useState, useEffect } from "react";

function GithubUser({ name, location, avatar}) {
return (
    <div>
      <h1>{name}</h1>
      <p>{location}</p>
      <img src={avatar} height={150} alt={name}/>
    </div>
  );
}

function App({library}) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(
      'https://api.github.com/users/moonhighway'
    )
    .then((response) => response.json())
    .then(setData)
    .then(() => setLoading(false))
    .catch(setError);
  }, []);


  if(loading) return <h1>Loading...</h1>;
  if (error)
    return <pre>{JSON.stringify(error)}</pre>;
      if (!data) return null;
    return (
    <GithubUser
      name={data.name}
      location={data.location}
      avatar={data.avatar_url}
    />
    );
   return <h1>Data</h1>;
}


export default App;
