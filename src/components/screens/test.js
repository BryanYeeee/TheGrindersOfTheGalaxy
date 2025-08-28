import { useState } from 'react'

import Panel from '@/components/panels/panel'
import Switcher from '@/components/switcher'

const Test = () => {
  const [sidePanelIndex, setSidePanelIndex] = useState(0)

  return (
    <div className='h-full w-full grid grid-rows-1 grid-cols-[1fr_1fr] gap-12 py-8'>

      <Switcher activeIndex={sidePanelIndex}>
        {[
          <Panel clip='r' bgCol={1}>
            A
          </Panel>,
          <Panel clip='l' bgCol={1}>
            B
          </Panel>
        ]}
      </Switcher>
      <div className='h-full grid grid-rows-[1fr_1fr] grid-cols-1 gap-12'>
        <Panel clip={'b'} bgCol={1}>
          ABCABCABC
        </Panel>
        <Panel clip={'t'} bgCol={2}>

          
            <button className='border-1 w-10'onClick={() => setSidePanelIndex(0)}>
              +1
            </button>
            <button className='border-1 w-10'onClick={() => setSidePanelIndex(1)}>
              -1
            </button>
        </Panel>
      </div>
    </div>
  )
}

export default Test
