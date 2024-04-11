import { Base } from "./base/base"

export type Task = Base & {
    title: string
    description: string
    date: Date
    owner: string
    status: string
}