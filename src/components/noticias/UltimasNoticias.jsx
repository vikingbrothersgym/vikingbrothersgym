import React, { useRef, useState, useEffect } from "react"
import news from "@noticias/news"
import "./UltimasNoticias.css"
import NoticiaPreview from "./NoticiaPreview"

const UltimasNoticias = () => {
  const container = useRef(null)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    if (!container.current) return

    const observer = new ResizeObserver(entries => {
      for (let entry of entries) {
        setWidth(entry.contentRect.width)
      }
    })

    observer.observe(container.current)

    return () => observer.disconnect()
  }, [])

  return (
    <div className="ult-container">
      <h1 className="sec-tit pt-5">
        ÚLTIMAS <span> NOTICIAS </span>
      </h1>

      <div
        ref={container}
        className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5 box-border px-5 py-5"
      >
        <NoticiaPreview ultimas={true} not={news[0]} />
        <NoticiaPreview ultimas={true} not={news[1]} />
        {width > 1024 && <NoticiaPreview ultimas={true} not={news[2]} />}
      </div>
    </div>
  )
}

export default UltimasNoticias
