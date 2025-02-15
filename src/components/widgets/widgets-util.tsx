import type {
  LinkItemData,
  WidgetMaterial,
  WidgetNode,
  WidgetType,
} from '@/components/widgets/widgets-type.d.ts'
import i18n from '@/i18n'
import { CalendarRange, Heading, Image, Type, User } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export const useWidgetMaterialList: () => WidgetMaterial[] = () => {
  const { t } = useTranslation()
  return [
    {
      type: 'BasicInfo',
      icon: <User className="icon-size" />,
      title: t('widgets.basicInfo'),
    },
    {
      type: 'TitleSection',
      icon: <Heading className="icon-size" />,
      title: t('widgets.title'),
    },
    {
      type: 'ExperienceTime',
      icon: <CalendarRange className="icon-size" />,
      title: t('widgets.experience'),
    },
    {
      type: 'TextContent',
      icon: <Type className="icon-size" />,
      title: t('widgets.text'),
    },
    {
      type: 'ImageSection',
      icon: <Image className="icon-size" />,
      title: t('widgets.image'),
    },
  ]
}

export function generateWidgetId(): string {
  return `${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 6)}`
}

export function createWidgetsNode(type: WidgetType): WidgetNode {
  const isChinese = i18n.language === 'zh'
  const id = generateWidgetId()
  switch (type) {
    case 'BasicInfo':
      return {
        type: 'BasicInfo',
        id,
        data: {
          propsData: {
            avatarUrl: '/avatar.jpg',
            avatarSize: 86,
            avatarRound: true,
            name: isChinese ? '陈 明' : 'Ming Chen',
            jobTitle: isChinese ? '算法工程师' : 'Algorithm Engineer',
            linksGroup: [
              [
                {
                  href: '',
                  content: '2050/01',
                  icon: 'cake',
                },
                {
                  href: '',
                  content: '15123456789',
                  icon: 'phone',
                },
              ],
              [
                {
                  href: 'https://github.com/',
                  content: 'github.com',
                  icon: 'github',
                },
                {
                  href: 'mailto:tanjiro@gmail.com',
                  content: 'tanjiro@gmail.com',
                  icon: 'gmail',
                },
              ],
              [],
            ],
          },
          styleData: {
            marginTop: 0,
            marginBottom: 0,
          },
        },
      }
    case 'TitleSection':
      return {
        type: 'TitleSection',
        id,
        data: {
          propsData: {
            title: isChinese ? '工作经历' : 'Work Experience',
          },
          styleData: {
            marginTop: 20,
            marginBottom: 12,
          },
        },
      }
    case 'ExperienceTime':
      return {
        type: 'ExperienceTime',
        id,
        data: {
          propsData: {
            title: isChinese ? 'XX有限公司' : 'XX Company',
            dateRange: '2077/07 - 2080/07',
          },
          styleData: {
            marginTop: 0,
            marginBottom: 0,
          },
        },
      }
    case 'TextContent':
      return {
        type: 'TextContent',
        id,
        data: {
          propsData: {
            content: isChinese
              ? '<h3>XX项目 - Web 前端开发</h3><ul><li><p>负责从需求分析到前端架构设计、功能开发及性能优化的全流程开发工作。</p></li><li><p>坚持与产品、设计、后端团队紧密协作，推动敏捷开发流程和 CI/CD 工具链的落地，确保高质量的交付。</p></li><li><p>通过深入研究用户体验和前端性能，成功优化支付流程页面，提升了用户转化率和支付成功率。</p></li></ul>'
              : '<h3>XX Project - Web Frontend Development</h3><ul><li><p>Responsible for the full development process from requirement analysis to frontend architecture design, feature development, and performance optimization.</p></li><li><p>Consistently collaborated with product, design, and backend teams to promote agile development processes and implement CI/CD toolchains, ensuring high-quality delivery.</p></li><li><p>Successfully optimized the payment process page through in-depth research on user experience and frontend performance, improving user conversion and payment success rates.</p></li></ul>',
          },
          styleData: {
            marginTop: 0,
            marginBottom: 0,
          },
        },
      }
    case 'ImageSection':
      return {
        type: 'ImageSection',
        id,
        data: {
          propsData: {
            url: '/image.png',
            imageSize: 100,
            borderRadius: 0,
          },
          styleData: {
            marginTop: 10,
            marginBottom: 10,
          },
        },
      }
    default: {
      const exhaustiveCheck: never = type
      return exhaustiveCheck
    }
  }
}

export const createLinkItem: () => LinkItemData = () => {
  return {
    href: 'https://github.com/',
    content: 'github.com',
    icon: 'link',
  }
}

export const createDefaultData: () => WidgetNode[] = () => {
  const isChinese = i18n.language === 'zh'
  return [
    {
      type: 'BasicInfo',
      id: 'm5nh7g2t_c08t',
      data: {
        propsData: {
          avatarUrl: '/avatar.jpg',
          avatarSize: 86,
          avatarRound: true,
          name: isChinese ? '炭治郎' : 'Tanjiro',
          jobTitle: isChinese ? '前端开发工程师' : 'Frontend Developer',
          linksGroup: [
            [
              { href: '', content: '2050/01', icon: 'cake' },
              { href: '', content: '15123456789', icon: 'phone' },
            ],
            [
              { href: 'https://github.com/', content: 'github.com', icon: 'github' },
              {
                href: 'mailto:tanjiro@gmail.com',
                content: 'tanjiro@gmail.com',
                icon: 'gmail',
              },
            ],
            [],
          ],
        },
        styleData: { marginTop: 0, marginBottom: 0 },
      },
    },
    {
      type: 'TitleSection',
      id: 'm5nhbbzu_29xe',
      data: {
        propsData: { title: isChinese ? '专业技能' : 'Professional Skills' },
        styleData: { marginTop: 20, marginBottom: 12 },
      },
    },
    {
      type: 'TextContent',
      id: 'm5nhe7a6_uswu',
      data: {
        propsData: {
          content: isChinese
            ? '<ul><li><p>熟练掌握 <code>JavaScript</code>、<code>TypeScript</code> 语言；</p></li><li><p>熟练使用 <code>Vue</code>、<code>React</code> 开发前端应用，并掌握其基本原理；</p></li><li><p>熟练使用 <code>Vite</code>、<code>Webpack</code> 等打包工具构建应用；</p></li><li><p>熟练使用 <code>NodeJS</code>、<code>MySQL</code>、<code>Redis</code> 等技术开发后端应用；</p></li></ul>'
            : '<ul><li><p>Proficient in <code>JavaScript</code>, <code>TypeScript</code>;</p></li><li><p>Experienced with <code>Vue</code>, <code>React</code> frontend development and understanding of core principles;</p></li><li><p>Skilled in using <code>Vite</code>, <code>Webpack</code> and other build tools;</p></li><li><p>Proficient in backend development with <code>NodeJS</code>, <code>MySQL</code>, <code>Redis</code>;</p></li></ul>',
        },
        styleData: { marginTop: 0, marginBottom: 0 },
      },
    },
    {
      type: 'TitleSection',
      id: 'm5nh7g2t_m1ad',
      data: {
        propsData: { title: isChinese ? '工作经历' : 'Work Experience' },
        styleData: { marginTop: 20, marginBottom: 12 },
      },
    },
    {
      type: 'ExperienceTime',
      id: 'm5nh7g2t_xcji',
      data: {
        propsData: {
          title: isChinese ? 'XX有限公司' : 'XX Company',
          dateRange: '2077/07 - 2080/07',
        },
        styleData: { marginTop: 0, marginBottom: 0 },
      },
    },
    {
      type: 'TextContent',
      id: 'm5nh7g2t_xhk3',
      data: {
        propsData: {
          content: isChinese
            ? '<h3>XX项目 - Web 前端开发</h3><ul><li><p>负责从需求分析到前端架构设计、功能开发及性能优化的全流程开发工作。</p></li><li><p>坚持与产品、设计、后端团队紧密协作，推动敏捷开发流程和 CI/CD 工具链的落地，确保高质量的交付。</p></li><li><p>通过深入研究用户体验和前端性能，成功优化支付流程页面，提升了用户转化率和支付成功率。</p></li></ul>'
            : '<h3>XX Project - Web Frontend Development</h3><ul><li><p>Responsible for the full development process from requirement analysis to frontend architecture design, feature development, and performance optimization.</p></li><li><p>Consistently collaborated with product, design, and backend teams to promote agile development processes and implement CI/CD toolchains, ensuring high-quality delivery.</p></li><li><p>Successfully optimized the payment process page through in-depth research on user experience and frontend performance, improving user conversion and payment success rates.</p></li></ul>',
        },
        styleData: { marginTop: 0, marginBottom: 0 },
      },
    },
    {
      type: 'TitleSection',
      id: 'm5nhamir_1miv',
      data: {
        propsData: { title: isChinese ? '教育经历' : 'Education' },
        styleData: { marginTop: 20, marginBottom: 12 },
      },
    },
    {
      type: 'ExperienceTime',
      id: 'm5nhboq6_hees',
      data: {
        propsData: {
          title: isChinese ? 'XX大学 - 软件工程' : 'XX University - Software Engineering',
          dateRange: '2073/07 - 2077/07',
        },
        styleData: { marginTop: 0, marginBottom: 0 },
      },
    },
  ]
}

// config or pdf file basename (without extname)
export function getBasename(widgets: WidgetNode[]) {
  const basicInfo = widgets.find(item => item.type === 'BasicInfo')
  if (basicInfo) {
    const { name, jobTitle } = basicInfo.data.propsData
    return `${name} - ${jobTitle}`
  }
  return ''
}
