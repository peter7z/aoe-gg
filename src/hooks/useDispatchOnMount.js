import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export default (action, params) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(action(params))
  }, [action, dispatch, params])
}
