import { useTranslation } from 'react-i18next'
import { Typography } from 'antd'

const { Title, Paragraph } = Typography

export default function HomePage() {
  const { t } = useTranslation()

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Title level={1} style={{ marginBottom: 16 }}>
        {t('home.title')}
      </Title>
      <Paragraph style={{ fontSize: '1.1rem', color: 'var(--color-text-secondary)' }}>
        {t('home.intro')}
      </Paragraph>
    </div>
  )
}
