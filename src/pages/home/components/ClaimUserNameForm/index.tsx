import { Button, TextInput } from '@ignite-ui/react'
import { Form } from './styles'
import { ArrowRight } from 'phosphor-react'

export function ClaimUserNameForm() {
  return (
    <Form as="form">
      <TextInput
        size="sm"
        prefix="ignite.com"
        placeholder="seu-usuario"
        crossOrigin="anonymous"
      />
      <Button size="sm" type="submit">
        Reservar usuário
        <ArrowRight />
      </Button>
    </Form>
  )
}