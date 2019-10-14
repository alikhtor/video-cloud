import { IShow } from '../show/i-show';
import { ILinks } from './i-links';

export interface ISchedule {
    airdate: string
    airstamp: string
    airtime: string
    id: number
    image: string
    name: string
    number: number
    runtime: number
    season: number
    show: IShow
    summary: string
    url: string
    _links: ILinks
}
