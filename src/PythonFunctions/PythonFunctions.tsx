import React from 'react'
import { PythonFunctionsGrid, PythonFunctionsHeadline } from './PythonFunctions.styles';
import { Lists, PythonFn, Dictionaries } from './PythonFunctions.data';
import PythonFunctionsGridItem from '../PythonFunctionsGridItem/PythonFunctionsGridItem';

const PythonFunctions: React.FunctionComponent = () => {
  return (
    <div>
      <PythonFunctionsHeadline>Python Functions</PythonFunctionsHeadline>
      <PythonFunctionsGrid>
        <PythonFunctionsGridItem title="Lists" dataType={Lists} />
        <PythonFunctionsGridItem title="Dictionaries" dataType={Dictionaries} />
      </PythonFunctionsGrid>
    </div>
  )
}

export default PythonFunctions

