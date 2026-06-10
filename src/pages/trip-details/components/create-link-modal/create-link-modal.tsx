import { Link2, Tag } from "lucide-react";
import { Form, Modal, Input, Button } from "../../../../components/ui";
import { useCreateLinkModal } from "./useCreateLinkModal";

interface CreateLinkModalProps {
  onClose: () => void
  links: {
    id: string
    title: string
    url: string
  }[]
}

export function CreateLinkModal({ links, onClose }: CreateLinkModalProps) {
  const { createLink } = useCreateLinkModal({ links })

  return (
    <Modal.Root>
      <Modal.Wrapper className="w-[640px]">
        <Modal.Header title="Cadastrar link" onClose={onClose}>
          <p className="text-sm text-zinc-400">
            Todos convidados podem visualizar os links importantes.
          </p>
        </Modal.Header>

        <form onSubmit={createLink} className="space-y-3">
          <Form.Group icon={Tag} className="h-14 px-4 bg-zinc-950 border-zinc-800 rounded-lg">
            <Input
              name="title-link"
              placeholder="Título do link"
              className="flex-1"
            />
          </Form.Group>

          <Form.Group icon={Link2} className="h-14 px-4 bg-zinc-950 border-zinc-800 rounded-lg flex-1">
            <Input
              type="text"
              name="url"
              placeholder="URL"
              className="flex-1"
            />
          </Form.Group>

          <Button type="submit" variant="primary" size="full">
            Salvar link
          </Button>
        </form>
      </Modal.Wrapper>
    </Modal.Root>
  )
}