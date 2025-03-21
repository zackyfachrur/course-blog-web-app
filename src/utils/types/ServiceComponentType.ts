export type LabelProps = {
    content: string;
    target: string;
}

export interface DeleteValidationProps {
  onAccept: () => void;
  onCancel: () => void;
}
