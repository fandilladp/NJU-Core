export enum RoomType {
  LOBBY = 'lobby',
  PUBLIC = 'skyoffice',
  CUSTOM = 'custom',
}

export interface IRoomData {
  name: string
  description: string
  idea: string
  progress: string
  failure: string
  password: string | null
  autoDispose: boolean
}
