import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { observer } from 'mobx-react-lite'
import { Button } from 'antd'
import { useAppStore } from '../../app/store/context'

function HeaderInner() {
  const { t } = useTranslation()
  const location = useLocation()
  const appStore = useAppStore()

  return (
    <header className="w-full flex items-center justify-between px-4 py-3 border-b border-border bg-surface shrink-0">
      <nav className="flex gap-4 items-center">
        <Link
          to="/"
          className={`no-underline font-medium ${location.pathname === '/' ? 'text-accent' : 'text-text-primary'}`}
        >
          {t('common.navHome')}
        </Link>
        <Link
          to="/projects"
          className={`no-underline font-medium ${location.pathname.startsWith('/projects') ? 'text-accent' : 'text-text-primary'}`}
        >
          {t('common.navProjects')}
        </Link>
      </nav>
      <div className="flex gap-1">
        <Button
          type={appStore.locale === 'en' ? 'primary' : 'default'}
          size="small"
          onClick={() => appStore.setLocale('en')}
        >
          {t('app.langEn')}
        </Button>
        <Button
          type={appStore.locale === 'ru' ? 'primary' : 'default'}
          size="small"
          onClick={() => appStore.setLocale('ru')}
        >
          {t('app.langRu')}
        </Button>
      </div>
    </header>
  )
}

export default observer(HeaderInner)
