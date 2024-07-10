import { Tag, Calendar } from "lucide-react";
import { Form, Input, Modal, Button } from "../../components/ui";

interface CreateActivityModalProps {
  closeCreateActivityModal: () => void
}

export function CreateActivityModal({
  closeCreateActivityModal
}: CreateActivityModalProps) {
  return (
    <Modal.Root>
      <Modal.Header title="Cadastrar atividade" onClose={closeCreateActivityModal}>
        <p className="text-sm text-zinc-400">
          Todos convidados podem visualizar as atividades.
        </p>
      </Modal.Header>

      <form className="space-y-3">
        <Form.Group icon={Tag} className="h-14 px-4 bg-zinc-950 border-zinc-800 rounded-lg">
          <Input
            name="title"
            placeholder="Qual a atividade?"
            className="flex-1"
          />
        </Form.Group>

        <Form.Group icon={Calendar} className="h-14 px-4 bg-zinc-950 border-zinc-800 rounded-lg flex-1">
          <Input
            type="datetime-local"
            name="occurs_at"
            placeholder="Data e horário da atividade"
            className="flex-1"
          />
        </Form.Group>

        <Button type="submit" variant="primary" size="full">
          Salvar atividade
        </Button>
      </form>
    </Modal.Root>
  )
}
