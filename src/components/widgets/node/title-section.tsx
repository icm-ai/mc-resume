/*
 * @Author: MingChen
 * @Date: 2025-02-15 19:05:56
 * @LastEditors: MingChen
 * @LastEditTime: 2025-02-19 16:28:01
 */
import type { TitleSectionData } from '@/components/widgets/widgets-type.d.ts'

interface TitleSectionProps {
  data: TitleSectionData['propsData']
}

const TitleSection = ({ data }: TitleSectionProps) => {
  const { title } = data

  return (
    <div className="flex h-7 items-center">
      <div className="h-full w-1 bg-zinc-600"></div>
      <div className="flex h-full flex-grow items-center bg-zinc-200 pl-2 text-xl font-medium">
        {title}
      </div>
    </div>
  )
}

export { TitleSection }
