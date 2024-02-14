export interface ICardData {
    img: string;
    title: string;
    date: string;
    id: string;
}

export interface IResponseTrending {
    data: IReponseDataItem[];
    meta: IReponseDataItem;
    pagination: IReponsePagination
}

export interface IReponseDataItem {
    id: string;
    title: string;
    trending_datetime: string;
    import_datetime: string;
    images: {
        original: {
            url: string
        }
    }
}

export interface IReponseMeta {
    msg: string;
    response_id: string;
    status: number;
}

export interface IReponsePagination {
    count: number;
    offset: number;
    total_count: number;
}
