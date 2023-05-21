
export interface IModalProps {
  title: string;
  description: string;
  buttonText: string;
  actionFunction: () => void;
}

export interface ITextModalProps {
  title: string;
  data: string;
}