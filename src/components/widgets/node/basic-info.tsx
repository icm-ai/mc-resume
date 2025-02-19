/*
 * @Author: MingChen
 * @Date: 2025-02-15 19:05:56
 * @LastEditors: MingChen
 * @LastEditTime: 2025-02-19 20:32:55
 */
import { LinkIconComponent } from '@/components/widgets/link-icon.tsx'
import type { BasicInfoData } from '@/components/widgets/widgets-type.d.ts'
import { clsx } from 'clsx'

interface BasicInfoProps {
  data: BasicInfoData['propsData']
}

const BasicInfo = ({ data }: BasicInfoProps) => {
  const { avatarUrl, avatarSize, avatarRound, name, jobTitle, linksGroup } = data

  return (
    <div className="flex-center py-2">
      {/* Avatar */}
      {avatarUrl ? (
        <img
          src={avatarUrl}
          alt="avatar"
          width={avatarSize || 100}
          height={avatarSize || 100}
          className={clsx('mr-8 sm:mr-16', avatarRound && 'rounded-full')}
          draggable={false}
        />
      ) : null}
      <div className="basis-0">
        {/* Name & Position */}
        <div className="mb-1 flex items-end whitespace-nowrap">
          <span className="mr-3 text-2xl font-semibold">{name}</span>
          <span className="text-[17px]">{jobTitle}</span>
        </div>
        {/* Links & Contact Info */}
        <ul>
          {linksGroup.map((links, groupIndex) => (
            <li key={groupIndex}>
              <ul className="flex flex-wrap items-center sm:flex-nowrap">
                {links.map((item, index) => (
                  <li
                    key={index}
                    className="mr-4 flex h-8 min-w-40 items-center"
                  >
                    {/* link icon */}
                    <span className="flex-center mr-2">{LinkIconComponent(item.icon)}</span>
                    {/* link content */}
                    <a
                      href={item.href || undefined}
                      className={clsx('font-mono', item.href && 'underline')}
                      target="_blank"
                    >
                      {item.content}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export { BasicInfo }
