import { FormEvent } from "react"
import { Mail, User } from "lucide-react"
import { Button, Form, Input, Modal } from "../../components/ui"

interface ConfirmTripModalProps {
  closeConfirmTripModal: () => void
  createTrip: (event: FormEvent<HTMLFormElement>) => void
}

export function ConfirmTripModal({
  closeConfirmTripModal,
  createTrip
}: ConfirmTripModalProps) {
  return (
    <Modal.Root>
      <Modal.Header title="Confirmar criação da viagem" onClose={closeConfirmTripModal}>
        <p className="text-sm text-zinc-400">Para concluir a criação da viagem para <span className="text-zinc-100 text-semibold">Florianópolis, Brasil</span>  nas datas de <span className="text-zinc-100 text-semibold">16 a 27 de Agosto de 2024</span> preencha seus dados abaixo:
        </p>
      </Modal.Header>

      <form onSubmit={createTrip} className="space-y-3">
        <Form.Group icon={User} className="h-14 px-4 bg-zinc-950 border-zinc-800 rounded-lg">
          <Input
            name="name"
            placeholder="Seu nome completo"
            className="flex-1"
          />
        </Form.Group>

        <Form.Group icon={Mail} className="h-14 px-4 bg-zinc-950 border-zinc-800 rounded-lg">
          <Input
            type="email"
            name="email"
            placeholder="Seu email pessoal"
            className="flex-1"
          />
        </Form.Group>

        <Button type="submit" size="full" variant="primary">
          Confirmar criação da viagem
        </Button>
      </form>
    </Modal.Root>
  )
}
