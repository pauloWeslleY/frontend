import { UserCog } from "lucide-react";
import { Button, Participant } from "../../components/ui";
import { CreateInviteModal } from "./components";
import { useParticipant } from "./hooks";

export function Guests() {
  const {
    participants,
    openModalManagersParticipant,
    openModalCreateParticipant,
    closeModalCreateParticipant
  } = useParticipant()

  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Convidados</h2>
      <div className="space-y-5">
        {participants?.map((participant, index) => (
          <Participant
            key={participant.id}
            name={participant.name || `Convidado ${index}`}
            email={participant.email}
            hasActive={participant.is_confirmed}
          />
        ))}
      </div>

      <Button variant="secondary" size="full" onClick={openModalCreateParticipant}>
        <UserCog className="size-5" />
        Gerenciar convidados
      </Button>

      {openModalManagersParticipant && (
        <CreateInviteModal
          onClose={closeModalCreateParticipant}
        />
      )}
    </div>
  )
}