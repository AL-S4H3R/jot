import { useCallback, useEffect } from 'react'
import type { FC } from 'react'
import useCodeMirror from '../utils/useCodeMirror'

interface Props {
  initialDoc: string,
  onChange: (doc: string) => void
}

const Editor: FC<Props> = ({
    initialDoc,
    onChange
}) => {
  const handleChange = useCallback(
    state => onChange(state.doc.toString()),
    [onChange]
  )
  const [refContainer, editorView] = useCodeMirror<HTMLDivElement>({
    initialDoc: initialDoc,
    onChange: handleChange
  })

  useEffect(() => {
    if (editorView) {
      // Do nothing for now
    }
  }, [editorView])

  return <div ref={refContainer}></div>
}

export default Editor