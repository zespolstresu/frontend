
import { format } from 'date-fns';
export const dateFormat = (date: string) => format(new Date(date), 'dd MM HH:mm');