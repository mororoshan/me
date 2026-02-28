import { useState } from 'react'
import { useTranslation, Trans } from 'react-i18next'
import { Button, Card } from 'antd'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import { I18N_STORAGE_KEY } from '../shared/i18n'
import './App.css'

function App() {
  const { t, i18n } = useTranslation()
  const [count, setCount] = useState(0)

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
      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{t('app.viteReact')}</h1>
      <div className="card">
        <button onClick={() => setCount((c) => c + 1)}>
          {t('app.countIs')} {count}
        </button>
        <p>
          <Trans i18nKey="app.editHint" components={{ 0: <code /> }} />
        </p>
      </div>
      <Card title={t('app.themeCheck')} style={{ marginTop: 16, maxWidth: 320 }}>
        <Button type="primary">{t('app.antPrimary')}</Button>
      </Card>
      <p className="read-the-docs">{t('app.readTheDocs')}</p>
    </>
  )
}

export default App
