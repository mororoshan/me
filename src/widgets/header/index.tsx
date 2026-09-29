import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { observer } from 'mobx-react-lite'
import { Button } from '../../shared/ui'
import { useAppStore } from '../../app/store/context'

function HeaderInner() {
  const { t } = useTranslation()
  const location = useLocation()
  const appStore = useAppStore()

  return (
    <header className="flex w-full shrink-0 items-center justify-between border-b border-border bg-surface px-4 py-3">
      <nav className="flex items-center gap-4">
        <Link
          to="/"
          className={`font-medium no-underline ${location.pathname === '/' ? 'text-accent' : 'text-text-primary'}`}
        >
          {t('common.navHome')}
        </Link>
        <Link
          to="/projects"
          className={`font-medium no-underline ${location.pathname.startsWith('/projects') ? 'text-accent' : 'text-text-primary'}`}
        >
          {t('common.navProjects')}
        </Link>
      </nav>
      <div className="flex gap-1">
        <Button
          variant={appStore.locale === 'en' ? 'primary' : 'default'}
          size="small"
          onClick={() => appStore.setLocale('en')}
        >
          {t('app.langEn')}
        </Button>
        <Button
          variant={appStore.locale === 'ru' ? 'primary' : 'default'}
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
