import { Modal } from '@/ui/components/modal';
import { SlotsGame } from '@/features/games/slots-game';

export function GameModal({
  portalKey,
}: {
  onClose: () => void;
  portalKey?: string;
}) {
  return (
    <Modal>
      <Modal.Header portalKey={portalKey} />
      <Modal.Content>
        <SlotsGame />
      </Modal.Content>
      <Modal.Footer />
    </Modal>
  );
}
