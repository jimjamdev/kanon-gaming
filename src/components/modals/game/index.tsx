import { Modal } from '@/ui/components/modal';
import { SlotsGame } from '@/features/games/slots-game';
import { Overlay } from '@/ui/components/overlay';

export function GameModal({
  portalKey,
}: {
  onClose: () => void;
  portalKey?: string;
}) {
  return (
    <Overlay>
      <Modal>
        <Modal.Header portalKey={portalKey}>Slots Game</Modal.Header>
        <Modal.Content className="p-4">
          <SlotsGame />
        </Modal.Content>
        <Modal.Footer>Gambling Aware</Modal.Footer>
      </Modal>
    </Overlay>
  );
}

export default GameModal;
