import { Outlet } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Button } from 'antd'
import { I18N_STORAGE_KEY } from '../shared/i18n'
import './App.css'

function App() {
  const { t, i18n } = useTranslation()

  const setLang = (lng: 'en' | 'ru') => {
    i18n.changeLanguage(lng)
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(I18N_STORAGE_KEY, lng)
    }
  }

  return (
    <>
      <div style={{ marginBottom: 8 }}>
        <Button
          type={i18n.language === 'en' ? 'primary' : 'default'}
          size="small"
          onClick={() => setLang('en')}
        >
          {t('app.langEn')}
        </Button>
        <Button
          type={i18n.language === 'ru' ? 'primary' : 'default'}
          size="small"
          onClick={() => setLang('ru')}
          style={{ marginLeft: 4 }}
        >
          {t('app.langRu')}
        </Button>
      </div>
      <Outlet />
    </>
  )
}

export default App
