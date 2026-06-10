import { Plus } from "lucide-react";
import { Button, LinkItem } from "../../components/ui";
import { useLinks } from "./hooks";
import { CreateLinkModal } from "./components";

export function ImportantLinks() {
  const {
    links,
    openCreateLinkModal,
    openModalCreateLink,
    closeModalCreateLink
  } = useLinks()

  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Links Importantes</h2>
      <div className="space-y-5">
        {links.length === 0 && (
          <p className="text-zinc-500 text-sm">Nenhum link cadastrado.</p>
        )}

        {links.length > 0 && links.map((link) => (
          <LinkItem
            key={link.id}
            text={link.title}
            href={link.url}
          />
        ))}
      </div>

      <Button variant="secondary" size="full" onClick={openModalCreateLink}>
        <Plus className="size-5" />
        Cadastrar novo link
      </Button>

      {openCreateLinkModal && (
        <CreateLinkModal
          onClose={closeModalCreateLink}
          links={links}
        />
      )}
    </div>
  )
}