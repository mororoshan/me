import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Button } from 'antd'
import { I18N_STORAGE_KEY } from '../../shared/i18n'

export default function Header() {
  const { t, i18n } = useTranslation()
  const location = useLocation()

  const setLang = (lng: 'en' | 'ru') => {
    i18n.changeLanguage(lng)
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(I18N_STORAGE_KEY, lng)
    }
  }

  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 16px',
        borderBottom: '1px solid var(--color-border)',
        backgroundColor: 'var(--color-surface)',
        marginBottom: 16,
      }}
    >
      <nav style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
        <Link
          to="/"
          style={{
            color: location.pathname === '/' ? 'var(--color-accent)' : 'var(--color-text-primary)',
            textDecoration: 'none',
            fontWeight: 500,
          }}
        >
          {t('common.navHome')}
        </Link>
        <Link
          to="/projects"
          style={{
            color: location.pathname.startsWith('/projects') ? 'var(--color-accent)' : 'var(--color-text-primary)',
            textDecoration: 'none',
            fontWeight: 500,
          }}
        >
          {t('common.navProjects')}
        </Link>
      </nav>
      <div>
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
    </header>
  )
}
