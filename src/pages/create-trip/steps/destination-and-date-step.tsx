import { ArrowRight, Calendar, MapPin, Settings2 } from 'lucide-react'
import { Form, Input, Separator, Button } from '../../../components/ui'

interface DestinationAndDateStepProps {
  isGuestsInputOpen: boolean
  closeGuestsInput: () => void
  openGuestsInput: () => void
}

export function DestinationAndDateStep({
  openGuestsInput,
  closeGuestsInput,
  isGuestsInputOpen,
}: DestinationAndDateStepProps) {
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <Form.Group icon={MapPin} className='flex-1'>
        <Input
          disabled={isGuestsInputOpen}
          type="text"
          placeholder="Para onde você vai?"
          className="flex-1"
        />
      </Form.Group>

      <Form.Group icon={Calendar}>
        <Input
          disabled={isGuestsInputOpen}
          type="text"
          placeholder="Quando?"
          className="w-40"
        />
      </Form.Group>

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
