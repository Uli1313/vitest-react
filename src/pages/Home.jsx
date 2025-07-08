import { useAppDispatch, useAppSelector } from '../store/store'
import { fetchUser } from '../store/userSlice'

export default function Home() {
  const dispatch = useAppDispatch()
  const userName = useAppSelector((state) => state.user.name)
  const userFetchStatus = useAppSelector((state) => state.user.status)

  return (
    <div>
      <div>{userName}</div>
      <button onClick={() => dispatch(fetchUser())}>Fetch user</button>
      {userFetchStatus === 'loading' && <div>Fetching user...</div>}
    </div>
  )
}
