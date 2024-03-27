import React, { PropsWithChildren } from 'react'

export const Building = (props: PropsWithChildren) => {
  return (
    <div className="brick-wall w-full h-full flex flex-1 p-10 space-x-5 justify-center">
      {props.children}
    </div>
  )
}
