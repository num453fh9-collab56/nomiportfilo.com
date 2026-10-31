import {
  Bot,
  Code2,
  Globe,
  Mail,
  Megaphone,
  MessageCircle,
  MessagesSquare,
  Server,
  type LucideIcon,
} from 'lucide-react';
import type { ServiceIconName } from '@/lib/services';

export const serviceIcons: Record<ServiceIconName, LucideIcon> = {
  code: Code2,
  server: Server,
  globe: Globe,
  bot: Bot,
  chat: MessagesSquare,
  mail: Mail,
  whatsapp: MessageCircle,
  megaphone: Megaphone,
};

type ServiceIconProps = {
  name: ServiceIconName;
  size?: number;
  strokeWidth?: number;
  className?: string;
};

export default function ServiceIcon({
  name,
  size = 20,
  strokeWidth = 1.5,
  className,
}: ServiceIconProps) {
  const Icon = serviceIcons[name];
  return <Icon size={size} strokeWidth={strokeWidth} className={className} aria-hidden="true" />;
}
