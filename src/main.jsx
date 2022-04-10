import { render } from 'react-dom'

const App = () => {
  const envs = import.meta.env;
  console.warn({envs})
  return <pre>{JSON.stringify(envs, null, 2)}</pre>;
}

render(<App/>, document.getElementById('root'))
