export interface IAppsContent {
  appId: number,
  name: string,
  description: string,
  iconUrl: string,
  launchUrl: string,
  isTrending: boolean,
  priorityOrder: number
  isHovered?: boolean;
  }