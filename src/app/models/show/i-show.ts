import { ISchedule } from './i-schedule';
import { IRating } from './i-rating';
import { INetwork } from './i-network';
import { IExternals } from './i-externals';
import { IImage } from './i-image';
import { ILinks } from './i-links';

export interface IShow {
    id: number
    url: string
    name: string;
    type: string
    language: string
    genres: Array<string>
    status: string
    runtime: number
    premiered: string
    officialSite: string
    schedule: ISchedule
    rating: IRating
    weight: number
    network: INetwork
    webChannel: INetwork
    externals: IExternals
    image: IImage
    summary: string
    updated: number
    _links: ILinks
}
