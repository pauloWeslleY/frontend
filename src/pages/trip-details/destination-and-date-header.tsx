import { MapPin, Calendar } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { Separator, Button, Modal, Input, Form } from "../../components/ui";
import { Title } from "../../components/layout";
import { useDestinationAndDateHeader } from "./hooks";


export function DestinationAndDateHeader() {
  const {
    trip,
    eventStartEndDates,
    openUpdatedTripModal,
    updatedHeaderTitle,
    openModalUpdatedTrip,
    closeModalUpdatedTrip,
    updatedTrip,
    setDestination,
    setEventStartEndDates
  } = useDestinationAndDateHeader()

  return (
    <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between">
      <Title title={trip?.destination || ''} icon={MapPin} />

      <div className="flex items-center gap-5">
        <Title title={updatedHeaderTitle() || ''} icon={Calendar} />

        <Separator variant="vertical" />

        <Button onClick={openModalUpdatedTrip} variant="secondary">
          Alterar local/data?
          <Calendar className="size-5" />
        </Button>

        {openUpdatedTripModal && (
          <Modal.Root>
            <Modal.Wrapper>
              <Modal.Header title="Atualizar Viagem" onClose={closeModalUpdatedTrip} />

              <form onSubmit={updatedTrip} className="space-y-3">
                <Form.Group icon={MapPin} className="h-14 px-4 bg-zinc-950 border-zinc-800 rounded-lg">
                  <Input
                    name="destination"
                    placeholder="Atualizar destino?"
                    className="flex-1"
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </Form.Group>

                <DayPicker mode="range" selected={eventStartEndDates} onSelect={setEventStartEndDates} />

                <Button type="submit" variant="primary" size="full">
                  Atualizar viagem
                </Button>
              </form>
            </Modal.Wrapper>
          </Modal.Root>
        )}
      </div>
    </div>

  )
}