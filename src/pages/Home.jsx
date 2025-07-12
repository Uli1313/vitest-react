import { getGreeting } from '../logic/getGreeting'

export default function Home() {
  return <div>{getGreeting()}</div>
}
