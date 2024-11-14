interface CardProps {
  icon: string
  title: string
  local: string
  startAt: string
  AndAt: string
  description?: string | undefined
  list?: string[] | undefined
}

const Card: React.FC<CardProps> = ({
  icon,
  title,
  local,
  startAt,
  AndAt,
  description,
  list
}: CardProps) => {
  return (
    <div className="bg-background-secondary p-4">
      <div className="flex gap-2">
        {icon}
        <div>
          <p className="text-base font-semibold text-white-500">{title}</p>
        </div>
      </div>
      <div className="mt-1">
        <p className="text-xs">
          <span className="text-white-400">{local}</span>{' '}
          <span className="text-white-100">
            *{' '}
            <span>
              {startAt} - {AndAt}{' '}
            </span>
            <span />
          </span>
        </p>
      </div>

      {list?.length ? (
        <ul className="list-disc text-sm text-white-400 mt-3">
          {list?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>{description}</p>
      )}
    </div>
  )
}

export default Card
