export interface SelectedOptions {
  productName: string;
  color: string;
  size: string;
  cellular?: boolean;
}

export interface ChatProps {
  selectedOptions: SelectedOptions;
  isOpen?: boolean;
  onClose?: () => void;
  withFriction?: boolean;
}
