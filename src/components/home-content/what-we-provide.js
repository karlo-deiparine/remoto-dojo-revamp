import React from "react"

import { WhatWeProvideData } from "@data/what-we-provide-data"

function WhatWeProvide() {
  return (
    <div className="grid grid-cols-4 gap-y-8 gap-x-4">
      {WhatWeProvideData.map((card, i) => {
        return (
          <div key={i} className="bg-quarternary py-10 px-7 text-center">
            <div>
              <img src={card.image} alt={card.title} />
              <h3 className="text-3xl font-semibold">{card.title}</h3>
              <p>{card.content}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default WhatWeProvide
