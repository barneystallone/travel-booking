import { CSSProperties, useMemo } from 'react'

type MansoryProps = {
  data: MansoryImage[]
  imageWidth: number
}

const Mansory = ({ data, imageWidth }: MansoryProps) => {
  const containerStyle: CSSProperties = {
    gridTemplateColumns: `repeat(auto-fill, ${imageWidth}px)`,
  }

  const newData = useMemo(
    () =>
      // eslint-disable-next-line implicit-arrow-linebreak
      data.map((item): MansoryImage & { style: CSSProperties } => ({
        ...item,
        style: {
          gridRowEnd: `span ${item.spanRows}`,
          width: `${imageWidth}px`,
        },
      })),
    [data, imageWidth]
  )

  return (
    <div>
      <div className='grid  mt-16 justify-center auto-rows-[10px] gap-3 ' style={containerStyle}>
        {newData.map((item) => (
          <div
            key={item.id}
            className='overflow-hidden duration-150 hover:shadow-xl hover:-translate-y-1 rounded-xl group '
            style={item.style}
          >
            <img
              src={item.url}
              className='object-cover w-full h-full duration-300 group-hover:scale-110 '
              alt={item.id}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Mansory
