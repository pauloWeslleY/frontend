import { ArrowRight, Calendar, MapPin, Settings2 } from 'lucide-react'
import { DateRange, DayPicker } from 'react-day-picker'
import { Form, Input, Separator, Button, Modal } from '../../../components/ui'
import { useDestinationAndDateStep } from '../hooks'
import "react-day-picker/dist/style.css"

interface DestinationAndDateStepProps {
  isGuestsInputOpen: boolean
  eventStartEndDates: DateRange | undefined
  closeGuestsInput: () => void
  openGuestsInput: () => void
  setDestination: (destination: string) => void
  setEventStartEndDates: (dates: DateRange | undefined) => void
}

export function DestinationAndDateStep({
  openGuestsInput,
  closeGuestsInput,
  isGuestsInputOpen,
  setDestination,
  eventStartEndDates,
  setEventStartEndDates,
}: DestinationAndDateStepProps) {
  const {
    displayedDate,
    isDatePickerOpen,
    closeDatePicker,
    openDatePicker
  } = useDestinationAndDateStep({ eventStartEndDates })

  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <Form.Group icon={MapPin} className='flex-1'>
        <Input
          disabled={isGuestsInputOpen}
          type="text"
          placeholder="Para onde você vai?"
          className="flex-1"
          onChange={(e) => setDestination(e.target.value)}
        />
      </Form.Group>

      <button onClick={openDatePicker} disabled={isGuestsInputOpen} className="flex items-center gap-2 text-left w-[240px]">
        <Calendar className="text-zinc-400 size-5" />
        <span className="text-lg text-zinc-400 w-40 flex-1">
          {displayedDate || 'Quando?'}
        </span>
      </button>

      {isDatePickerOpen && (
        <Modal.Root>
          <Modal.Wrapper>
            <Modal.Header title='Selecione a data' onClose={closeDatePicker} />

            <DayPicker mode="range" selected={eventStartEndDates} onSelect={setEventStartEndDates} />
          </Modal.Wrapper>
        </Modal.Root>
      )}

      <Separator variant='vertical' />

      {isGuestsInputOpen ? (
        <Button onClick={closeGuestsInput} variant="secondary">
          Alterar local/data
          <Settings2 className="size-5" />
        </Button>
      ) : (
        <Button onClick={openGuestsInput} variant="primary">
          Continuar
          <ArrowRight className="size-5" />
        </Button>
      )}
    </div>
  )
}
