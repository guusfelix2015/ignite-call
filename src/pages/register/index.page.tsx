import { Button, Heading, MultiStep, Text, TextInput } from '@ignite-ui/react'
import { Container, Form, FormError, Header } from './styles'
import { ArrowArcRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const registerFormSchema = z.object({
  userName: z
    .string({})
    .min(3, { message: 'O nome de usuário deve ter no mínimo 3 caracteres' })
    .regex(/^([a-z\\-]+)$/i, {
      message: 'O nome de usuário deve conter apenas letras e hifens',
    })
    .transform((value) => value.toLowerCase()),
  name: z
    .string()
    .min(3, { message: 'O nome precisa ter pelo menos 3 letras.' }),
})

type RegisterFormData = z.infer<typeof registerFormSchema>

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
  })

  async function handleFormRegister(data: RegisterFormData) {
    console.log(data)
  }

  return (
    <Container>
      <Header>
        <Heading as="strong">Bem-vindo ao Ignite Call!</Heading>
        <Text>
          Precisamos de algumas informações para criar seu perfil! Ah, você pode
          editar essas informações depois.
        </Text>
        <MultiStep size={4} currentStep={1} />
      </Header>
      <Form as="form" onSubmit={handleSubmit(handleFormRegister)}>
        <label>
          <Text size="sm">Nome de usuário</Text>
          <TextInput
            {...register('userName')}
            prefix="ignite.com/"
            placeholder="seu-usuario"
            crossOrigin=""
          />
          {errors.name && (
            <FormError>{errors.userName && errors.userName.message}</FormError>
          )}
        </label>
        <label>
          <Text size="sm">Nome completo</Text>
          <TextInput
            placeholder="Seu nome"
            crossOrigin=""
            {...register('name')}
          />
          {errors.name && <FormError>{errors.name.message}</FormError>}
        </label>
        <Button disabled={isSubmitting} type="submit">
          Próximo passo
          <ArrowArcRight />
        </Button>
      </Form>
    </Container>
  )
}
