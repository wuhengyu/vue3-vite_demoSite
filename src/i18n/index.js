import { createI18n } from 'vue-i18n'
import localZhCn from './language/zh-cn'
import localEn from './language/en'

const i18n = createI18n({
  legacy: false,
  locale: 'zh-cn',
  fallbackLocale: 'zh-cn',
  messages: {
    'zh-cn': localZhCn,
    'en': localEn
  }
})
export default i18n