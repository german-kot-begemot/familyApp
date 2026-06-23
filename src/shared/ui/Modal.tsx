import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog';
import { ReactNode } from 'react';

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
};
export const Modal = ({ open, onClose, children }: ModalProps) => {
  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent className="sm:max-w-80 h-auto bg-[#4a6f51] text-white">
        {children}
      </DialogContent>
    </Dialog>
  );
};
