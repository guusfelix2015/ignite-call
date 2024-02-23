import { Button, TextInput } from '@ignite-ui/react'
import { Form } from './styles'
import { ArrowRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const claimUsernameFormSchema = z.object({
  userName: z.string().min(3).max(20),
})

type ClaimUsernameFormSchemaData = z.infer<typeof claimUsernameFormSchema>

export function ClaimUserNameForm() {
  const { register, handleSubmit } = useForm<ClaimUsernameFormSchemaData>()

  async function handleClaimUsername(data: ClaimUsernameFormSchemaData) {
    console.log(data)
  }

  return (
    <Form as="form" onSubmit={handleSubmit(handleClaimUsername)}>
      <TextInput
        {...register('userName')}
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
