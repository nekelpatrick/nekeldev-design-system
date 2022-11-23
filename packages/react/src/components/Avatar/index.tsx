import { AvatarContainer, AvatarFallback, AvatarImage } from './styles'
import { User } from 'phosphor-react'
import { ComponentProps } from 'react'

export interface IAvatarProps extends ComponentProps<typeof AvatarImage> {}

export const Avatar = (props: IAvatarProps) => {
  return (
    <AvatarContainer>
      <AvatarImage {...props} />

      {/* Add delay property to prevent AvatarFallback from being rendered in cases where the user actually has a AvatarImage */}
      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  )
}
