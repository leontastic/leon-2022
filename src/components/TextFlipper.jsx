import React, {
  forwardRef,
  useLayoutEffect,
  useEffect,
  useRef,
  useState,
} from 'react'

const TextFlipper = ({ texts = [], auto = true, duration = 2000 }) => {
  const { length } = texts
  const [index, setIndex] = useState(0)
  const [{ height, width }, setDimensions] = useState({
    height: undefined,
    width: undefined,
  })

  const getRelativeIndex = (relativeIndex) =>
    (index + relativeIndex + length) % length
  const handleFlip = () => setIndex(getRelativeIndex(1))

  useEffect(() => {
    const timeout = setTimeout(() => auto && handleFlip(), duration)
    return () => clearTimeout(timeout)
  }, [index])

  const beforeIndex = getRelativeIndex(-1)
  const currentIndex = getRelativeIndex(0)
  const afterIndex = getRelativeIndex(1)

  const beforeRef = useRef(null)
  const currentRef = useRef(null)
  const afterRef = useRef(null)

  useLayoutEffect(() => {
    const { clientHeight: height, clientWidth: width } = currentRef.current
    setDimensions({ height, width })
  }, [index])

  return (
    <span
      style={{
        position: 'relative',
        display: 'inline-block',
        overflow: 'hidden',
        verticalAlign: 'bottom',
        height,
        width,
        willChange: 'width, height',
        transition: [
          `width ${duration / 4}ms ease-in-out`,
          `height ${duration / 4}ms ease-in-out`,
        ].join(','),
        cursor: 'pointer',
      }}
      onClick={handleFlip}
    >
      <span
        style={{
          display: 'inline-block',
          position: 'absolute',
          top: 0,
          left: 0,
          whiteSpace: 'nowrap',
          opacity: 0,
          transform: 'translateY(-100%)',
          willChange: 'transform',
          transition: [`transform ${duration / 4}ms ease-in-out`, `opacity ${duration / 8}ms ease-in-out`].join(','),
        }}
        key={beforeIndex}
        ref={beforeRef}
      >
        {texts[beforeIndex]}
      </span>
      <span
        style={{
          display: 'inline-block',
          position: 'absolute',
          top: 0,
          left: 0,
          whiteSpace: 'nowrap',
          opacity: 1,
          transform: 'translateY(0%)',
          willChange: 'transform',
          transition: [`transform ${duration / 4}ms ease-in-out`, `opacity ${duration / 8}ms ease-in-out`].join(','),
        }}
        key={currentIndex}
        ref={currentRef}
      >
        {texts[currentIndex]}
      </span>
      <span
        style={{
          display: 'inline-block',
          position: 'absolute',
          top: 0,
          left: 0,
          whiteSpace: 'nowrap',
          opacity: 0,
          transform: 'translateY(100%)',
          willChange: 'transform',
          transition: [`transform ${duration / 4}ms ease-in-out`, `opacity ${duration / 8}ms ease-in-out`].join(','),
        }}
        key={afterIndex}
        ref={afterRef}
      >
        {texts[afterIndex]}
      </span>
    </span>
  )
}

export default TextFlipper
