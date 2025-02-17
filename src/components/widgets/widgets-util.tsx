// 导入类型定义和必要的依赖
import type {
  LinkItemData,
  WidgetMaterial,
  WidgetNode,
  WidgetType,
} from '@/components/widgets/widgets-type.d.ts'
import i18n from '@/i18n'
import { CalendarRange, Heading, Image, Type, User } from 'lucide-react'
import { useTranslation } from 'react-i18next'

// 定义可用的组件材料列表，用于组件拖拽面板
export const useWidgetMaterialList: () => WidgetMaterial[] = () => {
  const { t } = useTranslation()
  return [
    // 基本信息组件（头像、姓名等）
    {
      type: 'BasicInfo',
      icon: <User className="icon-size" />,
      title: t('widgets.basicInfo'),
    },
    // 标题组件（如"工作经验"、"教育背景"等章节标题）
    {
      type: 'TitleSection',
      icon: <Heading className="icon-size" />,
      title: t('widgets.title'),
    },
    // 时间经历组件（用于显示工作/教育经历的时间段）
    {
      type: 'ExperienceTime',
      icon: <CalendarRange className="icon-size" />,
      title: t('widgets.experience'),
    },
    // 文本内容组件
    {
      type: 'TextContent',
      icon: <Type className="icon-size" />,
      title: t('widgets.text'),
    },
    // 图片组件
    {
      type: 'ImageSection',
      icon: <Image className="icon-size" />,
      title: t('widgets.image'),
    },
  ]
}

// 生成唯一的组件ID，使用时间戳和随机数组合
export function generateWidgetId(): string {
  return `${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 6)}`
}

// 根据组件类型创建新的组件节点，包含默认数据
export function createWidgetsNode(type: WidgetType): WidgetNode {
  const isChinese = i18n.language === 'zh'
  const id = generateWidgetId()
  
  // 根据不同类型返回对应的组件配置
  switch (type) {
    case 'BasicInfo':
      return {
        type: 'BasicInfo',
        id,
        data: {
          propsData: {
            avatarUrl: '/avatar.jpg',
            avatarSize: 86,
            avatarRound: false,
            name: isChinese ? '陈 明' : 'Ming Chen',
            jobTitle: isChinese ? '机器学习工程师' : 'Machine Learning Engineer',
            linksGroup: [
              [ 
                {
                  href: '',
                  content: '1771313747',
                  icon: 'phone',
                },
                {
                  href: 'https://github.com/icm-ai',
                  content: 'icm-ai',
                  icon: 'github',
                },
                {
                  href: 'mailto:bestchenming@gmail.com',
                  content: 'bestchenming@gmail.com',
                  icon: 'gmail',
                },
                {
                  href: "",
                  content: "意向城市:广州深圳",
                  icon: "location"
                }
              ],
              [
                
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
              ? '<h3>XX项目 - 高级算法工程师</h3><ul><li><p>负责从需求分析到算法设计、功能开发及性能优化的全流程开发工作。</p></li><li><p>坚持与产品、设计、后端团队紧密协作，推动敏捷开发流程和 CI/CD 工具链的落地，确保高质量的交付。</p></li><li><p>通过深入研究算法效果及性能，成功优化了算法模型，提升了算法的准确性和效率</p></li></ul>'
              : '<h3>XX Project - Senior Algorithm Engineer</h3><ul><li><p>Led the entire development process from requirement analysis to algorithm design, development, and performance optimization.</p></li><li><p>Strengthened collaboration between product, design, and backend teams. Implemented and deployed CI/CD pipeline and CI/CD tools. Ensured high-quality delivery.</p></li><li><p>Successfully optimized the algorithm model, resulting in improved accuracy and efficiency.</p></li></ul>',
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

// 创建新的链接项数据
export const createLinkItem: () => LinkItemData = () => {
  return {
    href: 'https://github.com/',
    content: 'github.com',
    icon: 'link',
  }
}

// 创建默认的简历数据，包含基础的组件结构
export const createDefaultData: () => WidgetNode[] = () => {
  const isChinese = i18n.language === 'zh'
  // 返回包含默认组件的数组
  return [
    {
      type: 'BasicInfo',
      id: 'm5nh7g2t_c08t',
      data: {
        propsData: {
          avatarUrl: '/avatar.jpg',
          avatarSize: 86,
          avatarRound: true,
          name: isChinese ? '陈 明' : 'Ming Chen',
          jobTitle: isChinese ? '算法工程师' : 'Machine Learning Engineer',
          linksGroup: [
            [
              {
                href: '',
                content: '1991/09',
                icon: 'cake',
              },
              {
                href: '',
                content: '1771313747',
                icon: 'phone',
              },
            ],
            [
              {
                href: 'https://github.com/icm-ai',
                content: 'github.com',
                icon: 'github',
              },
              {
                href: 'mailto:bestchenming@gmail.com',
                content: 'bestchenming@gmail.com',
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
      id: 'm5nhe7a6_uswu',
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
            ? '<h3>XX项目 - 高级算法工程师</h3><ul><li><p>负责从需求分析到算法设计、功能开发及性能优化的全流程开发工作。</p></li><li><p>坚持与产品、设计、后端团队紧密协作，推动敏捷开发流程和 CI/CD 工具链的落地，确保高质量的交付。</p></li><li><p>通过深入研究算法效果及性能，成功优化了算法模型，提升了算法的准确性和效率</p></li></ul>'
            : '<h3>XX Project - Senior Algorithm Engineer</h3><ul><li><p>Led the entire development process from requirement analysis to algorithm design, development, and performance optimization.</p></li><li><p>Strengthened collaboration between product, design, and backend teams. Implemented and deployed CI/CD pipeline and CI/CD tools. Ensured high-quality delivery.</p></li><li><p>Successfully optimized the algorithm model, resulting in improved accuracy and efficiency.</p></li></ul>',
        },
        styleData: { marginTop: 0, marginBottom: 0 },
      },
    },
  ]
}

// 根据简历数据生成文件名（用于导出PDF或配置文件）
export function getBasename(widgets: WidgetNode[]) {
  const basicInfo = widgets.find(item => item.type === 'BasicInfo')
  if (basicInfo) {
    const { name, jobTitle } = basicInfo.data.propsData
    return `${name} - ${jobTitle}`
  }
  return ''
}
