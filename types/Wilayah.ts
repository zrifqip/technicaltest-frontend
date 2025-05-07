export type Kota = {

    "id": number,
    "Nama": string,
    "id_provinsi": number
}
export interface kotaMap {
    label: string
    value: number
}

export type kotaResponse = {
    data: Kota[]
}
