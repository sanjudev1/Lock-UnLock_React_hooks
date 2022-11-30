// Write your code here
import {useState} from 'react'
import {MainContainer, Image, Button, Paragraph} from './styledComponents'

const Unlock = () => {
  const [locked, setLocked] = useState(true)
  const lockedStatus = () => {
    setLocked(prevLock => !prevLock)
  }

  return (
    <MainContainer>
      <Image>
        {locked ? (
          <img
            src="https://assets.ccbp.in/frontend/hooks/lock-img.png"
            alt="lock"
          />
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/hooks/unlock-img.png"
            alt="unlock"
          />
        )}
      </Image>
      <Paragraph>Your Device is {locked ? 'Locked' : 'unLocked'}</Paragraph>
      <Button onClick={lockedStatus}>{locked ? 'Unlock' : 'Lock'}</Button>
    </MainContainer>
  )
}
export default Unlock
