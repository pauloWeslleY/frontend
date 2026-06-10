import { InviteGuestsModal } from './invite-guests-modal'
import { ConfirmTripModal } from './confirm-trip-modal'
import { InviteGuestStep, DestinationAndDateStep } from './steps'
import { useCreateTrip } from './hooks'

export function CreateTripPage() {
  const {
    isGuestsInputOpen,
    isGuestsModalOpen,
    isConfirmTripModalOpen,
    addNewEmailToInvite,
    closeConfirmTripModal,
    closeGuestsInput,
    closeGuestsModal,
    createTrip,
    deleteEmailFromInvite,
    openConfirmTripModal,
    openGuestsInput,
    openGuestsModal,
    setDestination,
    setEventStartEndDates,
    setOwnerEmail,
    setOwnerName,
    eventStartEndDates,
    emailsToInvite,
  } = useCreateTrip()

  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">

        <div className="flex flex-col items-center gap-3">
          <img src="/logo.svg" alt="plann.er" />
          <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua próxima viagem!</p>
        </div>

        <div className="space-y-4">
          <DestinationAndDateStep
            isGuestsInputOpen={isGuestsInputOpen}
            closeGuestsInput={closeGuestsInput}
            openGuestsInput={openGuestsInput}
            setDestination={setDestination}
            setEventStartEndDates={setEventStartEndDates}
            eventStartEndDates={eventStartEndDates}
          />

          {isGuestsInputOpen && (
            <InviteGuestStep
              emailsToInvite={emailsToInvite}
              openGuestsModal={openGuestsModal}
              openConfirmTripModal={openConfirmTripModal}
            />
          )}
        </div>

        <p className="text-zinc-500 text-sm">
          Ao planejar sua viagem pela plann.er você automaticamente concorda <br />
          com nossos <a href="#" className="text-zinc-300 underline">termos de uso</a> e <a href="#" className="text-zinc-300 underline">políticas de privacidade</a>.
        </p>
      </div>

      {isGuestsModalOpen && (
        <InviteGuestsModal
          emailsToInvite={emailsToInvite}
          addNewEmailToInvite={addNewEmailToInvite}
          closeGuestsModal={closeGuestsModal}
          deleteEmailFromInvite={deleteEmailFromInvite}
        />
      )}

      {isConfirmTripModalOpen && (
        <ConfirmTripModal
          createTrip={createTrip}
          closeConfirmTripModal={closeConfirmTripModal}
          setOwnerName={setOwnerName}
          setOwnerEmail={setOwnerEmail}
        />
      )}
    </div>
  )
}


