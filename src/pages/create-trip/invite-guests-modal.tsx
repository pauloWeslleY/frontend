import { AtSign, Plus, X } from "lucide-react"
import { FormEvent } from "react"
import { Button, Form, Input, Modal, Separator } from "../../components/ui"

interface InviteGuestsModalProps {
  emailsToInvite: string[]
  closeGuestsModal: () => void
  addNewEmailToInvite: (event: FormEvent<HTMLFormElement>) => void
  deleteEmailFromInvite: (email: string) => void
}

export function InviteGuestsModal({
  emailsToInvite,
  addNewEmailToInvite,
  closeGuestsModal,
  deleteEmailFromInvite
}: InviteGuestsModalProps) {
  return (
    <Modal.Root>
      <Modal.Header title="Selecionar convidados" onClose={closeGuestsModal}>
        <p className="text-sm text-zinc-400">Os convidados irão receber e-mails para confirmar a participação na viagem.</p>
      </Modal.Header>

      <div className="flex flex-wrap gap-2">
        {emailsToInvite.map(email => {
          return (
            <div key={email} className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2">
              <span className="text-zinc-300">{email}</span>
              <button type="button" onClick={() => deleteEmailFromInvite(email)}>
                <X className="size-3 text-zinc-400" />
              </button>
            </div>
          )
        })}
      </div>

      <Separator variant="horizontal" />

      <form
        onSubmit={addNewEmailToInvite}
        className="p-2.5 bg-zinc-950 border-zinc-800 rounded-lg flex items-center gap-2"
      >
        <Form.Group icon={AtSign} className="flex-1 px-2">
          <Input
            type="email"
            name="email"
            placeholder="Digite o email do convidado"
            className="flex-1"
          />
        </Form.Group>

        <Button type="submit" variant="primary">
          Convidar
          <Plus className="size-5" />
        </Button>
      </form>

    </Modal.Root>
  )
}
