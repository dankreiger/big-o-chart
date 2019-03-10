import React from 'react'
import { CaseScenario } from '../PythonFunctions/PythonFunctions.data';
import { PythonFunctionsGridItemContainer } from './PythonFunctionsGridItem.styles';

interface PythonFunctionsGridItemProps {
  title: string;
  dataType: CaseScenario[]
}


// how did this get so strange so quickly :(
const PythonFunctionsGridItem: React.FunctionComponent<PythonFunctionsGridItemProps> = ({ dataType, title }) => {
  return (
    <PythonFunctionsGridItemContainer>
      <h3>{title} <code>n</code> is <code>len(L)</code></h3>
      {dataType.map((scenario: CaseScenario) => (
        Object.entries(scenario).map(s => (
          <div key={s[0]}>
            {Object.entries(scenario).length > 1 && <h5>{s[0]}</h5>}
            {s[1].map(({ name, complexity }: { name: string, complexity: string }) => (
              <div key={name}>
                <p>{name} : {complexity}</p>
              </div>
            ))}
          </div>
        ))
      ))}
    </PythonFunctionsGridItemContainer>
  )
}

export default PythonFunctionsGridItem


// <ul>
      //   {dataType.map((scenario: CaseScenario) => (
      //     <li key={fn.name}>{fn.name}: {fn.complexity}</li>
      //   ))}
      // </ul>