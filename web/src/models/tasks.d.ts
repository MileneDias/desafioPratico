import { Base } from "./base/base"

export type Task = Base & {
    title: string
    description: string
    date: string
    owner: string
    status: string
}