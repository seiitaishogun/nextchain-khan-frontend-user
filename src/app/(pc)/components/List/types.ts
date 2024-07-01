import { MainContentT } from '@module/types/main';

interface MainProps {
  data: MainContentT[];
}

interface MainDetailProps {
  data: MainContentT;
}

interface ListItemSmallProps extends MainDetailProps {
  order: number;
}

export type { ListItemSmallProps, MainProps, MainDetailProps };
