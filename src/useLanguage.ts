import { useEffect } from 'react'
type TLang =
  | 'aa'
  | 'ab'
  | 'af'
  | 'ak'
  | 'am'
  | 'ar'
  | 'an'
  | 'hy'
  | 'as'
  | 'av'
  | 'ae'
  | 'ay'
  | 'az'
  | 'en'
  | 'ja'
  | 'kr'
  | 'tw'
  | 'uk'

export default (lang: TLang) => {
  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])
}
