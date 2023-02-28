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
        <Modal.Header portalKey={portalKey}>Game</Modal.Header>
        <Modal.Content>
          <SlotsGame />
        </Modal.Content>
        <Modal.Footer>Gambling Aware</Modal.Footer>
      </Modal>
    </Overlay>
  );
}

// eslint-disable-next-line import/no-default-export
export default GameModal;
