import { Mail, User } from "lucide-react";
import { Button, Form, Input, Modal } from "../../../../components/ui";
import { useCreateInviteModal } from "./useCreateInviteModal";

interface CreateInviteModalProps {
  onClose: () => void
}

export function CreateInviteModal({ onClose }: CreateInviteModalProps) {
  const { createInvite } = useCreateInviteModal()

  return (
    <Modal.Root>
      <Modal.Wrapper className="w-[640px]">
        <Modal.Header title="Confirmar participação" onClose={onClose}>
          <p className="text-sm text-zinc-400">
            Para confirmar sua presença na viagem, preencha os dados abaixo:
          </p>
        </Modal.Header>

        <form onSubmit={createInvite} className="space-y-3">
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

          <Button type="submit" variant="primary" size="full">
            Confirmar minha presença
          </Button>
        </form>
      </Modal.Wrapper>
    </Modal.Root>
  )
}