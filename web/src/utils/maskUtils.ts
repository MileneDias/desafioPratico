import { Caractere } from '@/@types'

type MaskProps = {
  CNPJMask: Caractere[]
  CPFMask: Caractere[]
  FullTimeMask: Caractere[]
  LimiteValue: Caractere[]
  SecondsMask: Caractere[]
  TimeMask: Caractere[]
}

const MaskPattern = {} as MaskProps

MaskPattern.CNPJMask = [
  /\d/,
  /\d/,
  '.',
  /\d/,
  /\d/,
  /\d/,
  '.',
  /\d/,
  /\d/,
  /\d/,
  '/',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/
]

MaskPattern.CPFMask = [
  /\d/,
  /\d/,
  /\d/,
  '.',
  /\d/,
  /\d/,
  /\d/,
  '.',
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/
]

MaskPattern.FullTimeMask = [/\d/, /\d/, ':', /\d/, /\d/, ':', /\d/, /\d/]
MaskPattern.LimiteValue = [/\d/, /\d/, /\d/]
MaskPattern.SecondsMask = [/\d{1,2}|1/, /\d{1,2}|1/]
MaskPattern.TimeMask = [/\d/, /\d/, ':', /\d/, /\d/]

export default MaskPattern
